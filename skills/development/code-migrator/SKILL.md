---
name: code-migrator
description: Migrate legacy code to modern frameworks, languages, and patterns with automated refactoring and testing
allowed-tools: ["Read", "Write", "Edit", "Glob", "Grep", "Bash", "Task"]
version: 1.0.0
author: GLINCKER Team
license: Apache-2.0
keywords: [migration, modernization, refactoring, legacy-code, framework-upgrade, language-translation]
---

# Code Migrator

**⚡ UNIQUE FEATURE**: Automated legacy code modernization with AI-powered migration paths, dependency resolution, test generation, and risk analysis. Migrate between languages, frameworks, or architectural patterns with confidence.

## What This Skill Does

Intelligently migrates codebases with minimal manual intervention:

### Language Migrations
- **Python 2 → Python 3**: Syntax, imports, unicode handling
- **JavaScript → TypeScript**: Type inference and definitions
- **Java 8 → Java 17+**: Modern language features
- **Angular.js → React/Vue**: Complete framework migration
- **PHP 5 → PHP 8**: Modernize deprecated features
- **Ruby 2 → Ruby 3**: Update syntax and gems

### Framework Upgrades
- **React Class → Hooks**: Convert class components
- **Vue 2 → Vue 3**: Composition API migration
- **Django 2 → Django 4**: Settings and ORM updates
- **Rails 5 → Rails 7**: Modern Rails patterns
- **Express 4 → Express 5**: Route handlers, middleware

### Architectural Migrations
- **Monolith → Microservices**: Service extraction
- **REST → GraphQL**: API transformation
- **Callback Hell → Async/Await**: Promise modernization
- **MVC → Component-Based**: Architecture refactoring

## Why This Is Revolutionary

First migration skill with:
- **AI-powered analysis**: Understands code context and intent
- **Risk assessment**: Identifies high-risk changes
- **Incremental migration**: Migrate module by module
- **Automated testing**: Generates tests to verify migration
- **Rollback support**: Safe migration with undo capability
- **Dependency resolution**: Automatically updates imports and packages
- **Pattern recognition**: Identifies and modernizes anti-patterns

## Instructions

### Phase 1: Migration Discovery & Analysis

1. **Identify Migration Type**:
   ```
   Ask user:
   - What are you migrating FROM?
   - What are you migrating TO?
   - Full codebase or specific modules?
   - Any constraints or requirements?
   ```

2. **Analyze Current State**:
   ```bash
   # Discover project structure
   Use Glob to find all source files
   Use Grep to identify:
   - Framework versions
   - Import patterns
   - Deprecated APIs
   - Code smells
   ```

3. **Generate Migration Plan**:
   ```markdown
   # Migration Plan: Python 2 → Python 3

   ## Scope
   - Files to migrate: 247
   - Estimated effort: 2-3 days
   - Risk level: Medium

   ## Changes Required

   ### High Priority (Breaking Changes)
   1. Print statements → print() function (187 occurrences)
   2. Unicode strings (u'') → default strings (423 occurrences)
   3. Dict.iteritems() → Dict.items() (89 occurrences)

   ### Medium Priority (Deprecated APIs)
   1. urllib → urllib.request (34 occurrences)
   2. ConfigParser → configparser (12 occurrences)

   ### Low Priority (Best Practices)
   1. Old-style classes → new-style classes
   2. % formatting → f-strings

   ## Dependencies to Update
   - Django 1.11 → Django 4.2
   - requests 2.9 → requests 2.31
   - pytest 3.0 → pytest 7.4

   ## Migration Strategy
   - Phase 1: Update dependencies (safe, reversible)
   - Phase 2: Automated syntax fixes (safe)
   - Phase 3: Manual code review (requires attention)
   - Phase 4: Test and validate

   ## Risk Assessment
   - **Critical**: Database migrations (manual review needed)
   - **High**: Third-party API calls (may have changed)
   - **Medium**: String encoding (test thoroughly)
   - **Low**: Print statements (auto-fixable)
   ```

### Phase 2: Automated Migration

1. **Create Migration Branch**:
   ```bash
   git checkout -b migrate-to-python3
   ```

2. **Backup Current State**:
   ```bash
   # Create backup
   git tag pre-migration-backup
   ```

3. **Execute Migration** (module by module):

   **For each file/module**:

   a. **Read current code**:
   ```python
   Use Read to load file contents
   ```

   b. **Apply transformations**:
   ```python
   # Example: Python 2 → 3 print statements
   # Before
   print "Hello, World!"

   # After
   print("Hello, World!")

   # Example: Unicode strings
   # Before
   u"Hello, 世界"

   # After
   "Hello, 世界"

   # Example: Dict iteration
   # Before
   for key, value in my_dict.iteritems():

   # After
   for key, value in my_dict.items():
   ```

   c. **Update imports**:
   ```python
   # Before
   import urllib
   import ConfigParser

   # After
   import urllib.request
   import configparser
   ```

   d. **Modernize patterns**:
   ```python
   # Before: Old-style formatting
   "Hello, %s!" % name

   # After: f-strings
   f"Hello, {name}!"

   # Before: Manual file handling
   f = open('file.txt')
   content = f.read()
   f.close()

   # After: Context manager
   with open('file.txt') as f:
       content = f.read()
   ```

4. **Use Edit tool** to apply changes:
   ```
   For each transformation:
   - Use Edit with old_string/new_string
   - Preserve formatting and style
   - Add comments where behavior changes
   ```

### Phase 3: Dependency Migration

1. **Update package manager files**:

   ```python
   # requirements.txt migration
   # Before
   Django==1.11.29
   requests==2.9.1

   # After
   Django==4.2.0
   requests==2.31.0
   ```

   ```json
   // package.json migration
   // Before
   {
     "dependencies": {
       "react": "^16.8.0"
     }
   }

   // After
   {
     "dependencies": {
       "react": "^18.2.0"
     }
   }
   ```

2. **Install new dependencies**:
   ```bash
   pip install -r requirements.txt
   # or
   npm install
   ```

### Phase 4: Test Generation & Validation

1. **Generate Migration Tests**:
   ```python
   # Use Task to launch test-generator agent
   Task: "Generate tests that verify migration correctness"

   For each migrated function:
   - Create test with Python 2/3 compatible inputs
   - Verify output is identical
   - Test edge cases
   ```

2. **Run Existing Tests**:
   ```bash
   # Run original test suite
   pytest tests/

   # Report:
   - Tests passing: 247/250
   - Tests failing: 3
   - New errors: 0
   ```

3. **Run Migration Validation**:
   ```bash
   # Custom validation checks
   - Import validation
   - Syntax check (python -m py_compile)
   - Linting (flake8, pylint)
   - Type checking (mypy for Python, tsc for TypeScript)
   ```

### Phase 5: Manual Review Queue

For high-risk changes:

```markdown
## Manual Review Required

### File: api/payments.py (Lines 45-67)
**Risk**: HIGH
**Reason**: External API call with changed response format

```python
# Original (Python 2)
response = urllib.urlopen(url)
data = json.loads(response.read())

# Migrated (Python 3)
response = urllib.request.urlopen(url)
data = json.loads(response.read().decode('utf-8'))
```

**Action needed**: Verify API still returns same data structure

### File: database/models.py (Lines 102-115)
**Risk**: CRITICAL
**Reason**: Database model migration

**Action needed**: Create and review Django migration files
```

### Phase 6: Documentation & Rollback Plan

1. **Generate Migration Report**:
   ```markdown
   # Migration Report: Python 2 → Python 3

   **Date**: 2025-01-13
   **Duration**: 3.2 hours
   **Status**: ✅ Complete (3 items need manual review)

   ## Statistics
   - Files modified: 247
   - Lines changed: 1,834
   - Dependencies updated: 12
   - Tests updated: 45
   - New tests added: 18

   ## Breaking Changes
   1. Unicode handling in API responses
   2. Dictionary iteration in processors
   3. Print output in CLI tools

   ## Rollback Instructions
   ```bash
   git checkout pre-migration-backup
   ```

   ## Next Steps
   1. Review 3 flagged items in review-queue.md
   2. Run integration tests
   3. Deploy to staging
   4. Monitor for issues
   ```

2. **Create Migration Documentation**:
   - What changed and why
   - How to use new patterns
   - Common gotchas
   - Troubleshooting guide

## Example Migrations

### Example 1: React Class → Hooks

**User**: "Migrate this component to hooks"

**Input**:
```javascript
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null, loading: true };
  }

  componentDidMount() {
    fetchUser(this.props.userId)
      .then(user => this.setState({ user, loading: false }));
  }

  render() {
    const { user, loading } = this.state;
    if (loading) return <div>Loading...</div>;
    return <div>{user.name}</div>;
  }
}
```

**Output**:
```javascript
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(userId)
      .then(user => {
        setUser(user);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}
```

### Example 2: Callback Hell → Async/Await

**Before**:
```javascript
function processUser(userId, callback) {
  getUser(userId, (err, user) => {
    if (err) return callback(err);
    getOrders(user.id, (err, orders) => {
      if (err) return callback(err);
      calculateTotal(orders, (err, total) => {
        if (err) return callback(err);
        callback(null, { user, total });
      });
    });
  });
}
```

**After**:
```javascript
async function processUser(userId) {
  const user = await getUser(userId);
  const orders = await getOrders(user.id);
  const total = await calculateTotal(orders);
  return { user, total };
}
```

## Configuration

`.code-migrator-config.yml`:

```yaml
migration:
  backup_enabled: true
  incremental: true
  generate_tests: true
  risk_threshold: medium  # Require manual review for high/critical

patterns:
  # Custom pattern replacements
  - from: "old_api_call"
    to: "new_api_call"
    risk: high

exclusions:
  # Files to skip
  - "vendor/*"
  - "node_modules/*"
  - "*.min.js"

validation:
  run_tests: true
  run_linters: true
  type_check: true
```

## Supported Migrations

### Languages
- Python 2 → 3
- JavaScript ES5 → ES6+ → TypeScript
- Java 8 → 11 → 17
- PHP 5 → 7 → 8
- Ruby 2 → 3
- Go 1.x → 1.21+

### Frameworks
- React (any version upgrade)
- Vue 2 → 3
- Angular any → any
- Django 1.x → 4.x
- Rails 5 → 7
- Express 4 → 5

### Patterns
- Callbacks → Promises → Async/Await
- Class components → Functional + Hooks
- Options API → Composition API
- MVC → MVVM
- REST → GraphQL

## Tool Requirements

- **Read**: Load source files
- **Write**: Create new files and reports
- **Edit**: Transform code in-place
- **Glob**: Find all files to migrate
- **Grep**: Search for patterns
- **Bash**: Run tests, install dependencies
- **Task**: Generate tests, analyze risks

## Best Practices

1. **Start small**: Migrate one module at a time
2. **Test continuously**: Run tests after each module
3. **Commit frequently**: Easy rollback if needed
4. **Review high-risk**: Never auto-migrate critical code
5. **Update docs**: Keep documentation in sync
6. **Monitor production**: Watch for issues post-migration

## Limitations

- Cannot migrate business logic (requires human understanding)
- Complex macros/metaprogramming may need manual work
- Performance characteristics may change
- Some migrations require iterative refinement

## Related Skills

- [unit-test-generator](../../testing/unit-test-generator/SKILL.md) - Generate migration tests
- [refactor-master](../refactor-master/SKILL.md) - Further code improvements
- [pr-reviewer](../../devops/pr-reviewer/SKILL.md) - Review migrated code

## Changelog

### Version 1.0.0 (2025-01-13)
- Initial release
- Support for 6 languages
- 10+ framework migrations
- Risk assessment
- Automated testing
- Rollback support

## Contributing

Help add migration paths:
- New language pairs
- Framework upgrades
- Pattern transformations
- Risk detection rules

## License

Apache License 2.0 - See [LICENSE](../../../LICENSE)

## Author

**GLINCKER Team**
- GitHub: [@GLINCKER](https://github.com/GLINCKER)
- Repository: [claude-code-marketplace](https://github.com/GLINCKER/claude-code-marketplace)

---

**🌟 The most comprehensive code migration skill available - save weeks of manual work!**
