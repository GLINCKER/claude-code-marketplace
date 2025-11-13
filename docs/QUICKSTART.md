# Quick Start Guide

Get started with the GLINCKER Claude Code Marketplace in minutes!

## For Users: Installing and Using Skills

### 1. Add the Marketplace

```bash
# Using Claude Code CLI
claude marketplace add https://github.com/GLINCKER/claude-code-marketplace

# Or add manually in Claude Code settings
```

### 2. Browse Available Skills

```bash
# List all skills in the marketplace
claude marketplace list glincker-marketplace

# Search for specific skills
claude marketplace search readme glincker-marketplace
```

### 3. Install a Skill

```bash
# Install from marketplace
claude skill install readme-generator --from glincker-marketplace

# Or install from local path
claude skill install ./skills/documentation/readme-generator
```

### 4. Use the Skill

Once installed, the skill is automatically available in Claude Code:

```
You: "Generate a README for my project"

Claude: [Activates readme-generator skill and creates a comprehensive README]
```

### 5. Manage Installed Skills

```bash
# List installed skills
claude skill list

# Update a skill
claude skill update readme-generator

# Uninstall a skill
claude skill uninstall readme-generator
```

## For Contributors: Creating Your First Skill

### 1. Fork and Clone

```bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR-USERNAME/claude-code-marketplace.git
cd claude-code-marketplace
```

### 2. Choose a Category

Pick the most appropriate category for your skill:
- `development/` - Coding and development tools
- `documentation/` - Documentation generation
- `testing/` - Testing utilities
- `productivity/` - Workflow enhancements
- `creative/` - Design and creative tools
- `data-science/` - Data analysis tools
- `security/` - Security and auditing
- `automation/` - Automation workflows

### 3. Create Your Skill

```bash
# Create a new branch
git checkout -b skill/my-awesome-skill

# Create skill directory
mkdir -p skills/category/my-awesome-skill
cd skills/category/my-awesome-skill

# Copy the template
cp ../../../docs/SKILL_TEMPLATE.md SKILL.md
```

### 4. Write Your Skill

Edit `SKILL.md` with your skill's details:

```yaml
---
name: my-awesome-skill
description: Does something amazing for users
allowed-tools: ["Read", "Write"]
version: 1.0.0
author: Your Name
license: Apache-2.0
keywords: [relevant, keywords]
---

# My Awesome Skill

[Your skill instructions here...]
```

Key sections to include:
- **Clear instructions** for Claude on what to do
- **Examples** of usage
- **Tool requirements** explanation
- **Limitations** and caveats
- **Error handling** guidance

### 5. Test Your Skill

```bash
# Install your skill locally
claude skill install ./skills/category/my-awesome-skill

# Test it in Claude Code
# Try different scenarios
# Verify all examples work
```

### 6. Submit Your Skill

```bash
# Commit your changes
git add .
git commit -m "Add [category]: my-awesome-skill"

# Push to your fork
git push origin skill/my-awesome-skill

# Create a Pull Request on GitHub
# Use the PR template to provide details
```

### 7. Community Review

- Maintainers will review your skill
- Address any feedback in your PR
- Once approved, your skill joins the marketplace!

## Examples and Templates

### Example 1: Simple Skill (No Tools)

```yaml
---
name: hello-world
description: A simple greeting skill
allowed-tools: []
version: 1.0.0
author: Your Name
---

# Hello World

When activated, greet the user warmly and explain what skills are.
```

### Example 2: Skill with Tools

```yaml
---
name: file-analyzer
description: Analyzes project files and provides insights
allowed-tools: ["Read", "Glob", "Grep"]
version: 1.0.0
author: Your Name
---

# File Analyzer

## Instructions

1. Use Glob to find all files matching user's pattern
2. Use Read to examine file contents
3. Use Grep to search for specific patterns
4. Provide analysis and insights
```

## Best Practices

### ✅ Do

- **Start small**: Begin with a simple, focused skill
- **Test thoroughly**: Verify all examples and edge cases
- **Document clearly**: Write for both Claude and human readers
- **Minimal permissions**: Only request tools you need
- **Security first**: Review for vulnerabilities
- **Get feedback**: Ask in Discussions before submitting

### ❌ Don't

- Request unnecessary tools (`allowed-tools: ["*"]`)
- Include hardcoded secrets or credentials
- Create overly complex skills (break them down)
- Skip testing and examples
- Ignore security considerations
- Submit without reading contribution guidelines

## Common Patterns

### Pattern 1: File Generator

```markdown
## Instructions

1. Gather requirements from user
2. Analyze project structure with Glob
3. Read relevant configuration files
4. Generate content based on analysis
5. Present to user for review
6. Use Write to create the file
```

### Pattern 2: Code Analyzer

```markdown
## Instructions

1. Use Glob to find target files
2. Use Read to examine code
3. Use Grep to find patterns
4. Analyze and identify issues
5. Provide recommendations
```

### Pattern 3: Test Generator

```markdown
## Instructions

1. Use Read to examine source code
2. Identify functions/classes to test
3. Determine appropriate test framework
4. Generate test cases (happy path, edge cases, errors)
5. Use Write to create test file
```

## Troubleshooting

### Skill Won't Install

- Check YAML frontmatter syntax
- Verify required fields are present
- Ensure skill name is unique

### Skill Not Activating

- Check skill is installed: `claude skill list`
- Verify skill name matches installation
- Review skill instructions for clarity

### Permission Errors

- Check `allowed-tools` includes necessary tools
- Verify file paths are accessible
- Review security settings

## Resources

- [Skill Template](SKILL_TEMPLATE.md) - Comprehensive template
- [Contributing Guide](CONTRIBUTING.md) - Detailed contribution process
- [Example Skills](../skills/) - Real working examples
- [Claude Code Docs](https://code.claude.com/docs) - Official documentation

## Getting Help

- **Questions**: [GitHub Discussions](https://github.com/GLINCKER/claude-code-marketplace/discussions)
- **Bugs**: [GitHub Issues](https://github.com/GLINCKER/claude-code-marketplace/issues)
- **Ideas**: [Feature Requests](https://github.com/GLINCKER/claude-code-marketplace/issues/new?template=feature_request.md)

## What's Next?

1. **Explore**: Browse existing skills for inspiration
2. **Try**: Install and use skills to see how they work
3. **Create**: Build your first skill
4. **Share**: Contribute to the marketplace
5. **Grow**: Help build the community!

---

**Ready to build something amazing? Start with the [Skill Template](SKILL_TEMPLATE.md)!**
