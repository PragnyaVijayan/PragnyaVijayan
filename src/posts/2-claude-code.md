---
title: "Engineering with Claude Code: From Prompts to Autonomous Agents"
date: "October 23, 2025"
category: "Engineering"
readTime: "24 min read"
slug: "engineering-with-claude-code"
---

# Engineering with Claude Code: From Prompts to Autonomous Agents

For a long time, working with LLMs felt like talking to a very smart, very amnesiac intern. 

I remember the early days. You would paste a massive snippet of code into a web UI, meticulously describe a refactor, wait for the generation, copy the response, paste it back into your IDE, fix the hallucinated syntax errors, realize the model completely forgot about a dependency in another file, and start all over again. 

It wasn't engineering; it was babysitting. It felt more like prompt-wrangling than actual problem solving, and frankly, it was exhausting. There were weeks where trying to force a 100k-token model to hold the context of an enterprise microservice architecture felt like trying to fill a bucket with a hole in it. The promised "10x engineer" productivity boost was getting eaten up by the overhead of manually managing the model.

Then came the paradigm shift from conversational prompting to *agentic workflows*. And the tool that finally made this click for me in a brutal, real-world production setting was [Claude Code](https://docs.anthropic.com/en/docs/claude-code). 

![Aesthetic Terminal Workspace](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200)

## Beyond the Chat Interface

Let's clear the air: Claude Code isn't a chat window taped onto VScode. It’s an agentic CLI tool that lives directly inside your terminal (`npm install -g @anthropic-ai/claude-code`). That distinction is massive. 

It reads your local filesystem, hooks directly into your Git tree, understands your project structure, and executes shell commands. But what makes it technically fascinating isn't merely that it runs commands—it's *how* it manages context when everything inevitably goes wrong.

### The Context Window Illusion vs. Working Memory

There is a huge misconception in the industry right now: "Just buy a bigger context window." 

When working with large, messy codebases, the limiting factor isn't model intelligence; it's context fragmentation. Claude 3.7 Sonnet (my default model for the CLI) boasts a massive 200,000 token context window. Early on, I thought the solution was simply to pipe `tree` and `cat **/*.js` into the prompt. 

I was wrong. Stuffing 200,000 tokens of raw source code into a prompt is computationally expensive, slow, and worst of all, dilutes attention. The model gets lost in the noise of `node_modules` and legacy spaghetti code. It hallucinates variables that exist in completely unrelated modules.

Claude Code handles this differently. It acts as an autonomous agent with *working memory*. Instead of you manually curating which files to pass up to the API, the agent uses semantic search, AST parsing, and tools like `grep` under the hood to selectively mount files into its active memory buffer. It dynamically pages files in and out based on what it is currently debugging. 

It's the difference between handing someone an entire library and hoping they find the answer, versus teaching an agent how to use the Dewey Decimal System.

## The Terror and Glory of "Dangerously Skip Permissions"

In theory, an agentic system requires human-in-the-loop validation for executing commands or modifying files. Safety first, right? You want to look over the diff before it runs `rm -rf` or overwrites your database schema. 

But in practice, when you are running a tight test-driven development (TDD) loop at 2 AM trying to ship a feature, constant confirmation prompts kill all of your momentum. The friction becomes unbearable. 

Enter my favorite (and most terrifyingly named) flag: `--dangerously-skip-permissions`.

```bash
claude "Run the test suite. If it fails, read the stack trace, fix the offending React component, and rerun the tests until they pass." --dangerously-skip-permissions
```

The first time I ran that command, my heart was in my throat. I watched the terminal output as the agent:
1. Ran `npm run test`
2. Caught a massive traceback regarding a deeply nested React Context failure.
3. Automatically grepped the codebase for the Context Provider.
4. Used `sed` and direct file writes to patch the asynchronous state race-condition.
5. Re-ran the tests. They failed again (it forgot a dependency array).
6. Caught the new error, opened the file, fixed the dependency array.
7. Re-ran the tests. Green checkmarks.

When you pipe together a robust CI/CD environment with this flag, you are fundamentally changing the job description. You are no longer writing code. You are writing the *constraints* (the tests, the types, the architecture boundaries) and relying on the agent to navigate the chaotic solution space inside those walls. 

![Abstract Code and Debugging](https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200)

## The Trough of Disillusionment: When the Agent Fails

Of course, it isn't magic. There have been spectacular failures. 

There was a day I asked the agent to "clean up unused CSS variables" across a legacy monolithic application. I walked away to get coffee. I came back to find that it had completely stripped the global theming system because it misunderstood how the CSS-in-JS variables were being injected at runtime. The site looked like bare HTML from 1995. 

That failure taught me a vital lesson about Agency: **An AI agent is only as safe as your rollback strategy.** 

Because Claude Code integrates natively with Git, fixing that disaster was just a `git reset --hard` away. But it highlighted the necessity of compartmentalizing work into small, atomic Git branches. You have to treat the AI like a Junior Developer with limitless energy but zero institutional memory. You give it guardrails. 

## Extending the Agent: Skills and "Thinking"

The base system is powerful for file editing, but it gets truly interesting when you start pushing the boundaries of what an agent can touch.

### 1. Extended Thinking (The Scratchpad)
For highly complex architectural refactoring (e.g., migrating from a REST API to GraphQL across 50 components), standard eager inference falls short. The agent tries to write code before it understands the problem, resulting in cyclic errors.

By leveraging the **extended thinking** capabilities of newer models (like Claude 3.7 Sonnet's reasoning tokens), the agent is forced to slow down. I can watch the terminal stream as it spends thousands of compute cycles generating internal scratchpads, planning the migration step-by-step, analyzing edge cases, and mocking out interfaces *before* it ever touches a line of code. It feels like watching someone pace around a whiteboard. 

### 2. Custom Skills and the Model Context Protocol (MCP)
Anthropic's introduction of the Model Context Protocol (MCP) changes everything. It means Claude Code isn't sandboxed to your local disk; it can be extended with custom "Skills" to hit external APIs or infrastructure.

In a recent Databricks project, our unified data model was incredibly complex. Previously, interacting with it via AI meant:
1. I write a prompt asking for a SQL query.
2. The AI hallucinates a table name.
3. I copy the query, run it in Databricks, get a schema mismatch error.
4. I paste the error back to the AI.

With MCP, I built a custom skill exposing our Databricks cluster directly to the CLI agent. The workflow became:
1. "Claude, analyze the defect triage table and find the anomaly."
2. Agent writes query.
3. Agent *executes* query against the live database via the MCP skill.
4. Agent hits a schema error, realizes the column was renamed, runs a `SHOW TABLES` command, corrects its own JOIN logic, and fetches the precise data slice. 

It self-healed its own query in real-time. 

## The Model Ecosystem: Hammer vs. Scalpel

Through trial and error, I've learned that you don't always need an expensive sledgehammer to crack a nut. Claude Code allows you to hot-swap models depending on the latency/reasoning tradeoff required:

- **Claude 3.5 Haiku:** The scalpel. Incredible for localized linting, minor bug fixes, regex generation, and docstring formatting. The latency is practically imperceptible.
- **Claude 3.7 Sonnet:** The workhorse. The absolute sweet spot for coding. It reasons through complex multi-file logic while executing tool-calls accurately without burning through API credits too furiously.
- **Claude 3 Opus:** The architect. Reserved for deep, whole-system architectural planning or high-level design documents where linguistic nuance and extreme logical depth are required. (I use this rarely, but when I do, it's a lifesaver).

## Conclusion

At the end of the day, I like building things that work. I don't care about the hype cycle. Machine Learning, Data Science, LLMs, and Agents are fundamentally just toolkits to solve complex engineering problems. 

Tools like Claude Code represent the next evolution of that toolkit. It forces us to abstract away syntax and boilerplate so we can focus entirely on system architecture, data flow, and business logic. 

We are moving away from *writing* software to *directing* it. The growing pains are real, the hallucinations still happen, and you absolutely need a strong Git workflow to survive the chaos. But when it works? When you watch your terminal autonomously debug its way through a red test suite and come out green? 

The terminal has never felt more alive.
