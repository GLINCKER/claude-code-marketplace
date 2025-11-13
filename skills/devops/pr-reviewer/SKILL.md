---
name: pr-reviewer
description: Autonomous AI-powered pull request reviewer with multi-agent analysis and comprehensive feedback
allowed-tools: ["Read", "Bash", "Grep", "Glob", "Task", "Write"]
version: 1.0.0
author: GLINCKER Team
license: Apache-2.0
keywords: [devops, pr-review, code-review, automation, multi-agent, quality-assurance]
---

# Autonomous PR Reviewer

**⚡ UNIQUE FEATURE**: Multi-agent review system with specialized reviewers for security, performance, testing, and architecture - the first autonomous PR review skill with parallel agent coordination.

## What This Skill Does

Automatically reviews pull requests with multiple specialized AI agents working in parallel:

- **Security Agent**: Scans for vulnerabilities, SQL injection, XSS, hardcoded secrets
- **Performance Agent**: Identifies bottlenecks, inefficient algorithms, memory leaks
- **Testing Agent**: Validates test coverage, suggests additional test cases
- **Architecture Agent**: Reviews design patterns, code structure, maintainability
- **Style Agent**: Checks code style, naming conventions, documentation

## Why This Is Unique

Unlike simple code review tools, this skill:
- **Runs 5 specialized agents in parallel** for comprehensive analysis
- **Provides actionable suggestions** with code examples
- **Generates review summaries** for different audiences (technical/non-technical)
- **Auto-suggests fixes** that you can apply with one command
- **Learns from your codebase** patterns and conventions

## Instructions

### Phase 1: Setup and Discovery

1. **Identify the PR**:
   - Use Bash to get current branch and diff: `git diff main...HEAD`
   - Or accept PR number/URL from user
   - Use Bash: `gh pr view <number>` to get PR details

2. **Gather Context**:
   - Use Glob to find all changed files
   - Use Read to examine modified code
   - Use Grep to search for related code patterns
   - Identify programming languages and frameworks

### Phase 2: Multi-Agent Review (Parallel Execution)

Launch 5 specialized Task agents in parallel:

**Agent 1: Security Reviewer**
```
Task: Security analysis of PR
Prompt: "Analyze these code changes for security vulnerabilities:
- SQL injection risks
- XSS vulnerabilities
- Hardcoded secrets or API keys
- Authentication/authorization issues
- Dependency vulnerabilities
- OWASP Top 10 issues

Files: [list changed files]

Provide:
1. Severity ratings (Critical/High/Medium/Low)
2. Specific line numbers
3. Exploitation scenarios
4. Remediation steps with code examples"
```

**Agent 2: Performance Reviewer**
```
Task: Performance analysis of PR
Prompt: "Analyze these code changes for performance issues:
- Inefficient algorithms (O(n²) vs O(n log n))
- Database N+1 queries
- Memory leaks
- Unnecessary re-renders (React/Vue)
- Blocking operations
- Resource waste

Files: [list changed files]

Provide:
1. Performance impact assessment
2. Specific bottlenecks with line numbers
3. Benchmark comparison suggestions
4. Optimized code examples"
```

**Agent 3: Testing Reviewer**
```
Task: Test coverage analysis of PR
Prompt: "Analyze test coverage and quality:
- Calculate test coverage for changed code
- Identify untested edge cases
- Review test quality and assertions
- Suggest additional test scenarios
- Check for test best practices

Files: [list changed files]

Provide:
1. Coverage percentage
2. Missing test cases
3. Test improvement suggestions
4. Example test code"
```

**Agent 4: Architecture Reviewer**
```
Task: Architecture and design analysis
Prompt: "Review architectural decisions:
- Design pattern appropriateness
- SOLID principles adherence
- Code modularity and coupling
- Separation of concerns
- Scalability considerations
- Technical debt introduced

Files: [list changed files]

Provide:
1. Architecture assessment
2. Design improvement suggestions
3. Refactoring recommendations
4. Long-term impact analysis"
```

**Agent 5: Style & Documentation Reviewer**
```
Task: Code style and documentation review
Prompt: "Review code style and documentation:
- Naming conventions
- Code readability
- Comment quality
- API documentation
- README updates needed
- Breaking changes documented

Files: [list changed files]

Provide:
1. Style issues with line numbers
2. Documentation gaps
3. Readability improvements
4. Suggested comments"
```

### Phase 3: Synthesis and Reporting

1. **Collect all agent results** (wait for all Task agents to complete)

2. **Generate comprehensive review**:
   ```markdown
   # PR Review Summary

   ## 📊 Overview
   - Files changed: X
   - Lines added: Y
   - Lines removed: Z
   - Overall rating: [Excellent/Good/Needs Work/Reject]

   ## 🔒 Security (Critical: X, High: Y, Medium: Z)
   [Agent 1 findings summary]

   ## ⚡ Performance (Issues: X)
   [Agent 2 findings summary]

   ## ✅ Testing (Coverage: X%)
   [Agent 3 findings summary]

   ## 🏗️ Architecture
   [Agent 4 findings summary]

   ## 📝 Style & Documentation
   [Agent 5 findings summary]

   ## 🎯 Action Items
   1. [Priority action with fix]
   2. [Priority action with fix]

   ## 💡 Suggested Changes
   [Code blocks with suggested improvements]

   ## ✨ Highlights
   [Positive aspects of the PR]
   ```

3. **Generate fix suggestions**:
   - Create a `pr-review-fixes.md` file with all suggested changes
   - Optionally create a `pr-review-fixes.patch` file

### Phase 4: Interactive Options

Offer the user:
1. **Post review as comment**: Use Bash `gh pr comment <number> -F pr-review.md`
2. **Apply suggested fixes**: Use Edit to apply recommended changes
3. **Re-run specific agent**: Re-analyze with one agent for updated code
4. **Generate test cases**: Create tests based on Testing Agent suggestions
5. **Export report**: Save review in multiple formats (markdown, JSON, HTML)

## Examples

### Example 1: GitHub PR Review

**User Request:**
"Review PR #123"

**Workflow:**
1. Fetch PR: `gh pr view 123`
2. Launch 5 agents in parallel (use Task tool 5 times in one message)
3. Wait for all agents to complete
4. Synthesize results
5. Present comprehensive review
6. Offer to post comment or apply fixes

**Output:**
```
🔍 PR #123 Review Complete

📊 Overall: Good (minor improvements needed)

🔒 Security: ✅ No issues found
⚡ Performance: ⚠️ 1 issue found
✅ Testing: ⚠️ Coverage 78% (target: 80%)
🏗️ Architecture: ✅ Well designed
📝 Style: ⚠️ 3 minor issues

📋 Action Items:
1. Add database index for user_id column (performance)
2. Add tests for error scenarios (testing)
3. Update function documentation (style)

Would you like me to:
1. Post this review as a PR comment
2. Apply the suggested fixes
3. Generate the missing tests
```

### Example 2: Local Branch Review

**User Request:**
"Review my current changes before I push"

**Workflow:**
1. Run: `git diff main...HEAD`
2. Analyze changes with 5 agents
3. Provide feedback before push
4. Optionally fix issues

## Configuration

Customize review behavior:

```yaml
# .pr-reviewer-config.yml
agents:
  security:
    enabled: true
    severity_threshold: medium
  performance:
    enabled: true
    benchmark_required: false
  testing:
    enabled: true
    min_coverage: 80
  architecture:
    enabled: true
    check_solid: true
  style:
    enabled: true
    follow_existing: true

review:
  auto_post_comment: false
  suggest_fixes: true
  blocking_issues: [critical_security, zero_tests]
```

## Tool Requirements

- **Read**: Examine code changes
- **Bash**: Git operations, gh CLI for PR interaction
- **Grep**: Search codebase for patterns
- **Glob**: Find related files
- **Task**: Launch specialized review agents (KEY FEATURE)
- **Write**: Create review reports and fix files

## Limitations

- Requires `gh` CLI installed for PR operations
- Best results with code <10,000 lines changed per PR
- Security agent cannot detect all vulnerabilities (not a replacement for dedicated security tools)
- Performance suggestions may need benchmarking to validate
- Works best with supported languages (Python, JavaScript, TypeScript, Go, Rust, Java)

## Advanced Features

### 1. Incremental Review Mode

Review only new commits since last review:
```bash
git diff PR_BASE...HEAD --since="last review"
```

### 2. Custom Agent Addition

Add your own specialized agents:
- Accessibility reviewer (WCAG compliance)
- Localization reviewer (i18n/l10n)
- API contract reviewer (OpenAPI schema changes)

### 3. Team Learning Mode

Learns from approved/rejected reviews to adapt to team preferences.

### 4. Integration Ready

Can integrate with:
- GitHub Actions (automated PR reviews)
- GitLab CI
- Bitbucket Pipelines
- Custom webhooks

## Best Practices

1. **Run before pushing**: Catch issues early
2. **Review incrementally**: Don't wait for huge PRs
3. **Act on Critical/High issues**: Always fix security and performance criticals
4. **Use as learning tool**: Understand *why* changes are suggested
5. **Combine with human review**: AI augments, doesn't replace human judgment

## Related Skills

- [unit-test-generator](../../testing/unit-test-generator/SKILL.md) - Generate tests from Testing Agent suggestions
- [refactor-master](../../development/refactor-master/SKILL.md) - Apply architecture improvements
- [ci-cd-wizard](../ci-cd-wizard/SKILL.md) - Integrate PR reviews into CI/CD

## Changelog

### Version 1.0.0 (2025-01-13)
- Initial release with multi-agent review system
- 5 specialized agents: Security, Performance, Testing, Architecture, Style
- GitHub PR integration
- Interactive fix application
- Custom configuration support

## Contributing

This is a flagship skill for GLINCKER Marketplace. Contributions welcome:
- Add new specialized agents
- Improve detection algorithms
- Add support for new languages
- Enhance reporting formats

## License

Apache License 2.0 - See [LICENSE](../../../LICENSE)

## Author

**GLINCKER Team**
- GitHub: [@GLINCKER](https://github.com/GLINCKER)
- Repository: [claude-code-marketplace](https://github.com/GLINCKER/claude-code-marketplace)

---

**🌟 This is a UNIQUE skill not available in other marketplaces!**
