# Skill Template

Use this template as a starting point for creating new skills. Copy this structure and customize it for your specific use case.

## Basic Template

```markdown
---
name: your-skill-name
description: A clear, one-sentence description of what your skill does
allowed-tools: ["Tool1", "Tool2", "Tool3"]
version: 1.0.0
author: Your Name or GitHub Handle
license: Apache-2.0
keywords: [relevant, search, keywords]
repository: https://github.com/GLINCKER/claude-code-marketplace
homepage: https://github.com/GLINCKER/claude-code-marketplace/tree/main/skills/category/your-skill-name
---

# Skill Name

A brief introduction explaining the purpose and main functionality of this skill.

## What This Skill Does

Clearly describe:
- The main purpose of the skill
- What problems it solves
- When users should use it
- What makes it unique or valuable

## Instructions

Provide detailed, step-by-step instructions for Claude on how to execute this skill:

1. First, do this...
2. Then, analyze that...
3. Finally, produce the result...

Be specific about:
- What files to read or create
- What analysis to perform
- What output to generate
- How to handle errors

## Examples

### Example 1: Basic Usage

**User Request:**
"[Example of what a user might ask]"

**Expected Behavior:**
1. Claude should first...
2. Then Claude analyzes...
3. Finally Claude outputs...

### Example 2: Advanced Usage

**User Request:**
"[More complex example]"

**Expected Behavior:**
[Describe the advanced workflow]

## Configuration

If your skill has configurable options, document them here:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| option1 | string | "value" | What this option controls |
| option2 | boolean | true | When to enable this feature |

## Tool Requirements

This skill requires access to:

- **Tool1**: Used for [specific purpose]
- **Tool2**: Needed to [specific action]
- **Tool3**: Required for [specific functionality]

## Limitations

Be transparent about what this skill cannot do:

- This skill cannot handle [specific case]
- It works best with [specific conditions]
- It may struggle with [known limitations]
- Maximum [size/complexity] is [limit]

## Error Handling

Describe how the skill handles common errors:

- **Missing dependencies**: Claude should check for X and prompt user to install
- **Invalid input**: Claude should validate and provide helpful error messages
- **Permission errors**: Claude should explain what permissions are needed

## Best Practices

Share tips for getting the best results:

1. Always start by [recommended first step]
2. For large projects, consider [optimization tip]
3. Avoid [common pitfall]

## Dependencies

List any external dependencies:

- Python 3.8+ (for included scripts)
- Node.js 18+ (if using JavaScript tools)
- Specific packages: `package-name==1.0.0`

## Related Skills

If applicable, link to related or complementary skills:

- [skill-name-1](../category/skill-name-1/SKILL.md) - For [related purpose]
- [skill-name-2](../category/skill-name-2/SKILL.md) - Complements this skill by [explanation]

## Changelog

### Version 1.0.0 (YYYY-MM-DD)
- Initial release
- Feature: [main feature]
- Feature: [another feature]

## Contributing

Found a bug or have an improvement? Please:
1. Open an issue describing the problem or enhancement
2. Submit a pull request with your changes
3. Follow the [Contributing Guidelines](../../docs/CONTRIBUTING.md)

## License

This skill is licensed under Apache License 2.0. See [LICENSE](../../LICENSE) for details.

## Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com (optional)
- Website: https://yoursite.com (optional)

## Acknowledgments

Credit any resources, libraries, or people who inspired or helped with this skill:

- Thanks to [person/project] for [contribution]
- Inspired by [existing tool/skill]
- Built with [technology/library]
```

## Frontmatter Fields Reference

### Required Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| name | string | Unique kebab-case identifier | `git-commit-analyzer` |
| description | string | One-sentence summary | `Analyzes git commits for patterns and insights` |
| allowed-tools | array | List of tool names | `["Read", "Bash", "Grep"]` |
| version | string | Semantic version | `1.0.0` |
| author | string | Creator name | `Jane Smith` |

### Optional Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| license | string | License identifier | `Apache-2.0` |
| keywords | array | Search keywords | `["git", "analysis", "commits"]` |
| repository | string | Source repository URL | `https://github.com/...` |
| homepage | string | Documentation URL | `https://example.com/docs` |
| dependencies | array | Required tools/packages | `["python>=3.8", "git"]` |

## Tool Names Reference

Common tool names for `allowed-tools`:

- `Read` - Read files from filesystem
- `Write` - Write files to filesystem
- `Edit` - Edit existing files
- `Bash` - Execute bash commands
- `Glob` - Find files by pattern
- `Grep` - Search file contents
- `WebFetch` - Fetch web content
- `WebSearch` - Search the web
- `Task` - Launch sub-agents
- `TodoWrite` - Manage todo lists

Use `["*"]` only if absolutely necessary (not recommended).

## Tips for Great Skills

### Be Specific

Instead of: "Analyze the code"
Write: "Read all Python files in the src/ directory, identify functions longer than 50 lines, and suggest refactoring opportunities"

### Think Step-by-Step

Break complex tasks into clear steps:
1. Gather information
2. Analyze data
3. Generate output
4. Validate results

### Provide Context

Help Claude understand:
- Why certain steps are important
- What the expected output should look like
- How to recognize success or failure

### Test Thoroughly

Before submitting:
- Test with minimal input
- Test with complex scenarios
- Test error conditions
- Verify all examples work

## Need Help?

- See existing skills in [skills/](../../skills/) for real examples
- Ask questions in [Discussions](https://github.com/GLINCKER/claude-code-marketplace/discussions)
- Read the [Claude Code Skills Documentation](https://code.claude.com/docs/en/skills.md)
