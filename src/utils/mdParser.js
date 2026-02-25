export function parseFrontmatter(mdContent) {
    // Extract frontmatter using a simple regex
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = mdContent.match(frontmatterRegex);

    if (!match) {
        return { data: {}, content: mdContent };
    }

    const dataString = match[1];
    const content = match[2];

    const data = {};
    dataString.split('\n').forEach(line => {
        const index = line.indexOf(':');
        if (index > -1) {
            const key = line.slice(0, index).trim();
            let value = line.slice(index + 1).trim();
            // Remove wrapping quotes if present
            if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            data[key] = value;
        }
    });

    return { data, content };
}
