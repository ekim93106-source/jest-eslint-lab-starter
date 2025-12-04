// test/index.test.js
const {
  capitalizeWords,
  filterActiveUsers,
  logAction,
} = require('../index');

// ----------------------
// capitalizeWords tests
// ----------------------
describe('capitalizeWords', () => {
  test('capitalizes each word in a normal string', () => {
    expect(capitalizeWords('Hello world')).toBe('Hello World');
  });

  test('returns empty string when input is empty', () => {
    expect(capitalizeWords('')).toBe('');
  });

  test('handles strings with special characters', () => {
    expect(capitalizeWords('Hello-world')).toBe('Hello-World');
  });

  test('capitalizes a single word', () => {
    expect(capitalizeWords('alice')).toBe('Alice');
  });

  test('returns empty string when input is not a string', () => {
    expect(capitalizeWords(null)).toBe('');
  });
});

// ----------------------
// filterActiveUsers tests
// ----------------------
describe('filterActiveUsers', () => {
  test('returns only active users from mixed list', () => {
    const users = [
      { name: 'Alice', isActive: true },
      { name: 'Bob', isActive: false },
    ];
    expect(filterActiveUsers(users)).toEqual([
      { name: 'Alice', isActive: true },
    ]);
  });

  test('returns empty array when all users inactive', () => {
    const inactive = [
      { name: 'Bob', isActive: false },
      { name: 'Chris', isActive: false },
    ];
    expect(filterActiveUsers(inactive)).toEqual([]);
  });

  test('returns empty array for empty input array', () => {
    expect(filterActiveUsers([])).toEqual([]);
  });

  test('returns empty array when input is not array', () => {
    expect(filterActiveUsers(null)).toEqual([]);
  });
});

// ----------------------
// logAction tests
// ----------------------
describe('logAction', () => {
  test('generates correct log string for valid inputs', () => {
    const result = logAction('login', 'Alice');
    expect(result).toContain('User Alice performed login at');
  });

  test('returns error message when action is missing', () => {
    expect(logAction('', 'Alice')).toBe('Invalid input');
  });

  test('returns error message when username is missing', () => {
    expect(logAction('login', '')).toBe('Invalid input');
  });
});
