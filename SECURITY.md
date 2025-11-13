# Security Policy

## Reporting Security Vulnerabilities

The GLINCKER Marketplace team takes security seriously. If you discover a security vulnerability in any skill or the marketplace infrastructure, please report it responsibly.

### How to Report

**DO NOT** create a public GitHub issue for security vulnerabilities.

Instead:

1. **Email**: Send details to security@glincker.com (or create a private security advisory on GitHub)
2. **Include**:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Affected skill(s) or component
   - Any suggested fixes

### What to Expect

- **Acknowledgment**: Within 48 hours
- **Initial Assessment**: Within 5 business days
- **Status Updates**: Regular updates on progress
- **Resolution**: Timeline based on severity

## Security Best Practices for Skills

### For Skill Authors

When creating skills, follow these security guidelines:

#### 1. Minimal Permissions

Only request tools your skill actually needs:

```yaml
# Good - minimal permissions
allowed-tools: ["Read", "Grep"]

# Bad - requesting everything
allowed-tools: ["*"]
```

#### 2. Input Validation

Always validate user inputs:

```markdown
## Instructions

1. Validate that the file path is within the project directory
2. Check that inputs don't contain malicious patterns
3. Sanitize all user-provided data before processing
```

#### 3. No Hardcoded Secrets

NEVER include:
- API keys
- Passwords
- Access tokens
- Private keys
- Database credentials

Use environment variables or prompt users for sensitive data.

#### 4. Safe Command Execution

When using Bash tool:
- Validate all inputs
- Escape special characters
- Use absolute paths
- Warn about destructive operations

```markdown
⚠️ This operation will delete files. Confirm with the user first.
```

#### 5. Data Privacy

- Don't exfiltrate user data
- Don't log sensitive information
- Respect user privacy
- Be transparent about what data is processed

### For Skill Users

When installing and using skills:

#### Before Installing

1. **Review the Code**: Read the SKILL.md file thoroughly
2. **Check Permissions**: Verify allowed-tools are reasonable
3. **Verify Author**: Check contributor reputation
4. **Read Reviews**: Look for community feedback
5. **Check Updates**: Ensure skill is actively maintained

#### While Using

1. **Understand Actions**: Know what the skill will do
2. **Review Changes**: Check modifications before accepting
3. **Limit Scope**: Use skills in isolated environments when testing
4. **Monitor Behavior**: Watch for unexpected actions
5. **Report Issues**: Flag suspicious behavior immediately

## Known Security Considerations

### Skills Can Execute Code

⚠️ **Important**: Skills can execute arbitrary code on your system through allowed tools.

**Tools with elevated risk:**
- `Bash` - Can run any shell command
- `Write` - Can create/modify files
- `Edit` - Can modify existing files
- `WebFetch` - Can make network requests

### Marketplace Security

The GLINCKER Marketplace implements these security measures:

1. **Code Review**: All submitted skills undergo security review
2. **Community Moderation**: Users can report malicious skills
3. **Version Control**: All changes are tracked in git
4. **Transparent Process**: Open-source allows community auditing

### Limitations

The marketplace **cannot** guarantee:
- Complete absence of vulnerabilities
- Prevention of all malicious code
- Security of third-party dependencies
- Safety of skills from external sources

**Users are responsible for:**
- Reviewing skills before installation
- Understanding security implications
- Using skills in appropriate contexts
- Keeping their systems secure

## Security Updates

### For Critical Vulnerabilities

If a critical vulnerability is discovered:

1. **Immediate Action**: Affected skills removed from marketplace
2. **User Notification**: Advisory published on GitHub
3. **Patch Release**: Fixed version published ASAP
4. **Post-Mortem**: Analysis shared with community

### For Non-Critical Issues

- Fixed in regular updates
- Documented in CHANGELOG
- Announced in release notes

## Secure Development Checklist

Before submitting a skill:

- [ ] Minimal tool permissions requested
- [ ] All inputs validated and sanitized
- [ ] No hardcoded secrets or credentials
- [ ] Destructive operations require confirmation
- [ ] Error messages don't leak sensitive info
- [ ] Dependencies are from trusted sources
- [ ] Code reviewed for common vulnerabilities
- [ ] Security implications documented
- [ ] User warnings included where appropriate

## Vulnerability Disclosure Timeline

1. **Day 0**: Vulnerability reported privately
2. **Day 1-2**: Initial acknowledgment sent
3. **Day 3-7**: Vulnerability assessed and validated
4. **Day 7-30**: Fix developed and tested (timeline varies by severity)
5. **Day 30+**: Public disclosure after fix is deployed

For critical vulnerabilities, this timeline may be accelerated.

## Security Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Claude Code Security Docs](https://code.claude.com/docs/en/security.md)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)

## Contact

- **Security Issues**: security@glincker.com
- **General Questions**: [GitHub Discussions](https://github.com/GLINCKER/claude-code-marketplace/discussions)
- **Bug Reports**: [GitHub Issues](https://github.com/GLINCKER/claude-code-marketplace/issues)

---

**Last Updated**: January 2025

Thank you for helping keep the GLINCKER Marketplace secure!
