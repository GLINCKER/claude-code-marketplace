# Contributing to GLINCKER Marketplace

Thank you for your interest in contributing to the GLINCKER Claude Code Marketplace! This guide will help you create high-quality skills that benefit the entire community.

## Table of Contents

- [Getting Started](#getting-started)
- [Contribution Workflow](#contribution-workflow)
- [Skill Guidelines](#skill-guidelines)
- [Quality Standards](#quality-standards)
- [Review Process](#review-process)
- [Community Standards](#community-standards)

## Getting Started

### Prerequisites

- Claude Code installed and configured
- Git installed on your system
- Basic understanding of YAML frontmatter
- Familiarity with Markdown

### Fork and Clone

```bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR-USERNAME/claude-code-marketplace.git
cd claude-code-marketplace

# Add upstream remote
git remote add upstream https://github.com/GLINCKER/claude-code-marketplace.git
```

## Contribution Workflow

### 1. Choose the Right Category

Place your skill in the appropriate category:

- `skills/development/` - Software development tools
- `skills/productivity/` - Workflow and productivity enhancements
- `skills/creative/` - Design and creative tools
- `skills/testing/` - Testing and quality assurance
- `skills/documentation/` - Documentation tools
- `skills/data-science/` - Data analysis and ML tools
- `skills/security/` - Security and auditing tools
- `skills/automation/` - Automation and orchestration

Not sure? Open a discussion first!

### 2. Create Your Skill

```bash
# Create a new branch
git checkout -b skill/your-skill-name

# Create skill directory
mkdir -p skills/category/your-skill-name
cd skills/category/your-skill-name

# Create the skill file
touch SKILL.md
```

### 3. Follow the Template

Use our [Skill Template](SKILL_TEMPLATE.md) as a starting point. Every skill must have:

```markdown
---
name: your-skill-name
description: Clear, concise description (one sentence)
allowed-tools: ["Tool1", "Tool2"]  # Only what you need!
version: 1.0.0
author: Your Name or GitHub Handle
license: Apache-2.0
keywords: [relevant, tags, here]
---

# Your Skill Name

Clear introduction of what this skill does.

## Instructions

Detailed instructions for Claude on how to use this skill.

## Examples

Concrete examples of usage.

## Limitations

What this skill cannot or should not do.
```

### 4. Test Your Skill

Before submitting, test thoroughly:

```bash
# Install your skill locally
claude skill install ./skills/category/your-skill-name

# Test it in Claude Code
# Try edge cases
# Verify error handling
```

### 5. Submit a Pull Request

```bash
# Commit your changes
git add .
git commit -m "Add [category]: your-skill-name"

# Push to your fork
git push origin skill/your-skill-name

# Create a Pull Request on GitHub
```

## Skill Guidelines

### Naming Conventions

- Use kebab-case: `my-skill-name`
- Be descriptive but concise
- Avoid generic names like "helper" or "utility"
- Examples: `git-commit-analyzer`, `api-doc-generator`, `test-suite-creator`

### Tool Permissions

Only request tools your skill actually needs:

```yaml
# Good - minimal permissions
allowed-tools: ["Read", "Grep"]

# Bad - requesting everything
allowed-tools: ["*"]

# Bad - requesting unused tools
allowed-tools: ["Read", "Write", "Bash", "WebFetch"]  # But only using Read
```

### Documentation Requirements

Every skill must include:

1. Clear description in frontmatter
2. Instructions section explaining usage
3. At least one concrete example
4. List of limitations or caveats
5. Any dependencies or prerequisites

### File Organization

```
your-skill/
├── SKILL.md              # Required: Main skill definition
├── README.md             # Optional: Additional documentation
├── scripts/              # Optional: Helper scripts
│   ├── helper.py
│   └── validator.sh
├── templates/            # Optional: File templates
│   └── template.txt
└── examples/             # Optional: Example files
    └── example-output.md
```

## Quality Standards

### Code Quality

- Write clear, maintainable instructions
- Handle edge cases gracefully
- Provide helpful error messages
- Follow security best practices

### Security Considerations

Skills must NEVER:

- Exfiltrate sensitive data without explicit user consent
- Execute arbitrary code from untrusted sources
- Modify system files without clear warnings
- Bypass security restrictions
- Include hardcoded credentials or secrets

Skills should:

- Validate all inputs
- Use minimal permissions (allowed-tools)
- Warn users about destructive operations
- Follow principle of least privilege

### Testing Checklist

- [ ] Skill installs without errors
- [ ] Instructions are clear and unambiguous
- [ ] All examples work as documented
- [ ] Error cases are handled gracefully
- [ ] No security vulnerabilities
- [ ] Documentation is complete
- [ ] YAML frontmatter is valid
- [ ] Tool permissions are minimal

## Review Process

### What We Look For

1. **Functionality**: Does it work as described?
2. **Quality**: Is the code well-documented and maintainable?
3. **Security**: Are there any security concerns?
4. **Uniqueness**: Does it add value to the marketplace?
5. **Standards**: Does it follow our guidelines?

### Review Timeline

- Initial review: Within 3-5 days
- Feedback provided via PR comments
- Approval requires at least one maintainer review
- Community feedback is encouraged

### After Approval

Once merged:

1. Your skill will be added to the marketplace
2. It will appear in the main README
3. Community members can install and use it
4. You become a contributor!

## Community Standards

### Code of Conduct

Be respectful, inclusive, and collaborative. See our [Code of Conduct](../CODE_OF_CONDUCT.md).

### Communication

- Use discussions for questions and ideas
- Use issues for bugs and feature requests
- Use PRs only for concrete contributions
- Be constructive in reviews and feedback

### Maintenance

Contributors are expected to:

- Respond to issues about their skills
- Update skills for breaking changes
- Consider community feedback
- Maintain backward compatibility when possible

## Need Help?

- Check the [Skill Template](SKILL_TEMPLATE.md)
- Review [existing skills](../../skills/) for examples
- Ask in [Discussions](https://github.com/GLINCKER/claude-code-marketplace/discussions)
- Read [Claude Code docs](https://code.claude.com/docs)

## License

By contributing, you agree that your contributions will be licensed under the Apache License 2.0.

---

Thank you for making the GLINCKER Marketplace better for everyone!
