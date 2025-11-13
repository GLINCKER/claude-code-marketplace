---
name: unit-test-generator
description: Generates comprehensive unit tests for functions and classes in multiple languages
allowed-tools: ["Read", "Grep", "Write", "Bash"]
version: 1.0.0
author: GLINCKER Team
license: Apache-2.0
keywords: [testing, unit-tests, tdd, quality-assurance]
---

# Unit Test Generator

Automatically generates comprehensive unit tests for your code, supporting multiple programming languages and testing frameworks.

## What This Skill Does

This skill creates high-quality unit tests by:
- Analyzing function/method signatures and logic
- Generating test cases for happy paths
- Creating edge case tests
- Adding error condition tests
- Following language-specific best practices
- Using appropriate testing frameworks
- Including setup/teardown when needed

## Instructions

### 1. Code Analysis

When asked to generate tests:

1. **Identify target code**:
   - Use Read to examine the source file
   - Parse function/class signatures
   - Understand parameters, return types, and dependencies

2. **Detect language and framework**:
   - Python: pytest, unittest
   - JavaScript/TypeScript: Jest, Mocha, Vitest
   - Go: testing package
   - Rust: built-in test framework
   - Java: JUnit

3. **Analyze logic**:
   - Identify all code paths
   - Find conditionals and branches
   - Locate error handling
   - Determine edge cases

### 2. Test Generation Strategy

Create tests covering:

**Happy Path Tests:**
- Normal input → expected output
- Valid use cases
- Common scenarios

**Edge Cases:**
- Empty inputs
- Boundary values (min, max)
- Special characters
- Large datasets
- Zero/null values

**Error Conditions:**
- Invalid inputs
- Type mismatches
- Missing required parameters
- Exception scenarios

**Integration Points:**
- Mock external dependencies
- Stub API calls
- Fake database interactions

### 3. Test Structure

Follow framework-specific conventions:

**Python (pytest):**
```python
import pytest
from module import function_to_test

class TestFunctionName:
    def test_happy_path(self):
        # Arrange
        input_data = "valid input"

        # Act
        result = function_to_test(input_data)

        # Assert
        assert result == expected_value

    def test_edge_case_empty_input(self):
        with pytest.raises(ValueError):
            function_to_test("")
```

**JavaScript (Jest):**
```javascript
describe('functionName', () => {
  test('should handle valid input', () => {
    // Arrange
    const input = 'test';

    // Act
    const result = functionName(input);

    // Assert
    expect(result).toBe(expected);
  });

  test('should throw error on invalid input', () => {
    expect(() => functionName(null)).toThrow();
  });
});
```

### 4. Test Quality

Ensure generated tests:
- Have descriptive names (test_should_do_x_when_y)
- Follow AAA pattern (Arrange, Act, Assert)
- Are independent and isolated
- Run deterministically
- Have clear assertions
- Include comments explaining complex scenarios

### 5. Output

Present the generated tests and:
- Explain coverage achieved
- Note any uncovered scenarios
- Suggest where to place test file
- Offer to write tests to appropriate test directory

## Examples

### Example 1: Python Function

**User Request:**
"Generate tests for the calculate_discount function"

**Source Code:**
```python
def calculate_discount(price: float, discount_percent: int) -> float:
    if discount_percent < 0 or discount_percent > 100:
        raise ValueError("Discount must be between 0 and 100")
    return price * (1 - discount_percent / 100)
```

**Generated Tests:**
```python
import pytest
from shopping import calculate_discount

class TestCalculateDiscount:
    def test_valid_discount(self):
        """Test normal discount calculation"""
        result = calculate_discount(100.0, 20)
        assert result == 80.0

    def test_zero_discount(self):
        """Test with no discount"""
        result = calculate_discount(100.0, 0)
        assert result == 100.0

    def test_full_discount(self):
        """Test with 100% discount"""
        result = calculate_discount(100.0, 100)
        assert result == 0.0

    def test_negative_discount_raises_error(self):
        """Test that negative discount raises ValueError"""
        with pytest.raises(ValueError, match="between 0 and 100"):
            calculate_discount(100.0, -10)

    def test_discount_over_100_raises_error(self):
        """Test that discount > 100 raises ValueError"""
        with pytest.raises(ValueError, match="between 0 and 100"):
            calculate_discount(100.0, 150)

    def test_zero_price(self):
        """Test with price of 0"""
        result = calculate_discount(0.0, 50)
        assert result == 0.0
```

### Example 2: JavaScript Class

**User Request:**
"Create unit tests for the UserValidator class"

**Generated Approach:**
1. Read the class definition
2. Identify all methods
3. Generate tests for each method
4. Mock dependencies (if any)
5. Create comprehensive test suite

## Tool Requirements

- **Read**: Examine source code files
- **Grep**: Find existing tests, check coverage
- **Write**: Create test files
- **Bash**: Run tests to verify they work (optional)

## Limitations

- Cannot test private implementation details (by design)
- May not cover all business logic edge cases without context
- Generated tests should be reviewed and customized
- Cannot generate integration/E2E tests (use specific skills for those)
- Works best with pure functions and well-structured code

## Best Practices

When using this skill:

1. **Start with one function**: Don't try to test entire file at once
2. **Review generated tests**: Ensure they make sense for your use case
3. **Add domain knowledge**: Include business-specific edge cases
4. **Run the tests**: Verify they pass before committing
5. **Maintain test quality**: Keep tests updated as code changes

## Error Handling

- **Complex code**: Break down into smaller testable units first
- **Heavy dependencies**: Suggest refactoring for testability
- **No clear test path**: Ask user for expected behavior
- **Existing tests found**: Offer to extend rather than replace

## Configuration

Adapts to detected setup:

| Language | Framework | Test File Location |
|----------|-----------|-------------------|
| Python | pytest | `tests/test_*.py` |
| Python | unittest | `tests/test_*.py` |
| JavaScript | Jest | `__tests__/*.test.js` |
| TypeScript | Jest | `__tests__/*.test.ts` |
| Go | testing | `*_test.go` (same dir) |
| Rust | built-in | `tests/` or inline |

## Related Skills

- [tdd-workflow](../tdd-workflow/SKILL.md) - Test-driven development process
- [coverage-analyzer](../coverage-analyzer/SKILL.md) - Analyze test coverage
- [test-refactorer](../test-refactorer/SKILL.md) - Improve existing tests

## Changelog

### Version 1.0.0 (2025-01-13)
- Initial release
- Support for Python, JavaScript, TypeScript
- pytest and Jest framework support
- AAA pattern enforcement
- Edge case generation

## Contributing

Want to add support for a new language or framework?
1. Open an issue with the language/framework name
2. Submit a PR with examples
3. Follow [Contributing Guidelines](../../../docs/CONTRIBUTING.md)

## License

Apache License 2.0 - See [LICENSE](../../../LICENSE)

## Author

**GLINCKER Team**
- GitHub: [@GLINCKER](https://github.com/GLINCKER)
- Repository: [claude-code-marketplace](https://github.com/GLINCKER/claude-code-marketplace)
