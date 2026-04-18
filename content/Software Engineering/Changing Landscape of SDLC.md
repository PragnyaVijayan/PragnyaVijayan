---
title: The Changing Landscape of SDLC
tags: [software-engineering, agents, sdlc]
---

# The Changing Landscape of SDLC
*How agentic systems are reshaping the software development lifecycle.*

I recently had the opportunity to watch a [webinar](https://x.com/trq212/status/2034431949474091140) hosted by **Thariq Shihipar** an agentic engineer at Anthropic featuring **Adam Huda**, an agentic engineer at Uber. The discussion focused on how agentic systems are changing the way we think about building software, not just making development faster but reshaping the *entire* software development lifecycle (SDLC) itself.

---

### The Traditional Mental Model

During my time at [Corcentric](https://www.corcentric.com/), I learned a version of the SDLC adapted for data science work. Since then, I’ve carried a simple mental model across projects:

```text
1. Planning
2. Scope definition
3. Code generation
4. Testing
5. Security
6. CI/CD and deployment monitoring
7. Production monitoring
```

Traditionally, each stage is built and managed manually through a combination of tools and human effort. The key idea from the webinar was to move away from rebuilding these steps every time and instead design reusable **“skills.”**

> [!abstract] What is a Skill?
> These are well-defined autonomous units that can execute parts of the lifecycle consistently. Each stage of the SDLC contains accumulated knowledge such as patterns, decisions, and tradeoffs. By capturing that knowledge into *skills*, it becomes reusable across projects. 
> 
> When these skills are chained together, the SDLC can be turned into a single orchestrated system.

---

### The Feature Assembly Line

That said, building is no longer the hardest part. **Verification becomes the real bottleneck.**

This leads to the idea of a feature assembly line, where development flows through a sequence of strict quality gates. Each stage acts as a checkpoint, and work only moves forward if it meets the required standard.

```mermaid
flowchart LR
    Planning --> Building
    Building --> Testing
    Testing --> Review
    Review --> Security
    Security --> Fixes
```

### The Shift in Handling Failures

One of the most interesting ideas is how failures are handled. Instead of patching code directly, the focus shifts to **improving the underlying skill**. 

This changes the goal from fixing one localized output to improving the system that produces *all* outputs. Over time, improvements compound safely across every project that uses those skills.

---

### Good Skills vs. Bad Skills

Because everything relies on them, the distinction between good and bad skills is vital to the architecture's success.

> [!success] Good Skills
> - Produce reliable and consistent outputs.
> - Include telemetry such as usage data and feedback.
> - Are supported by evaluations and some deterministic components.
> - Improve outcomes over time.

> [!fail] Bad Skills
> - Duplicate functionality unnecessarily.
> - Quietly degrade the user experience.
> - Introduce small inefficiencies that compound.
> - Are difficult to debug without monitoring.

---

### The "Golden Marketplace"

To support this agentic system, telemetry and evaluation are absolutely essential. Teams are beginning to track usage metrics, input and output patterns, and user feedback. Some are also using LLM-based evaluation systems before promoting skills for broader pipeline use.

This feeds into the idea of a **“golden marketplace.”** 

This would be an internal ecosystem of vetted skills that are searchable through a CLI or UI. Each skill would include metadata such as ownership, ratings, evaluation scores, and real usage examples. Instead of building from scratch, developers could compose workflows from these trusted components.

> [!tip] The Vision
> Looking ahead, there is a vision of **self-improving skills**. With enough telemetry and evaluation data, skills could adapt based on real usage. Over time, they could refine their behavior and improve performance automatically.