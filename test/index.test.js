const {
    capitalizeWords,
    filterActiveUsers,
    logAction,
} = require('../index');

describe('capitalizeWords', () => {
    test('capitalizes each word in a normal string', () => {
        expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    test('returns empty string when input is empty', () => {
        expect(capitalizeWords('')).toBe('');
    });

    test('handles strings with special characters', () => {
        // Function does NOT capitalize after hyphens
        expect(capitalizeWords('Hello-world')).toBe('Hello-world');
    });

    test('capitalizes a single word', () => {
        expect(capitalizeWords('hello')).toBe('Hello');
    });

    test('returns empty string when input is not a string', () => {
        expect(capitalizeWords(123)).toBe('');
    });
});

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
        const users = [
            { name: 'Alice', isActive: false },
            { name: 'Bob', isActive: false },
        ];

        expect(filterActiveUsers(users)).toEqual([]);
    });

    test('returns empty array for empty input array', () => {
        expect(filterActiveUsers([])).toEqual([]);
    });

    test('returns empty array when input is not an array', () => {
        expect(filterActiveUsers('invalid')).toEqual([]);
    });
});

describe('logAction', () => {
    test('generates correct log string for valid inputs', () => {
        const result = logAction('login', 'Alice');
        expect(result).toContain('User Alice performed login at');
    });

    test('handles missing action', () => {
        const result = logAction('', 'Alice');
        expect(result).toContain('Alice');
    });

    test('handles missing username', () => {
        const result = logAction('login', '');
        expect(result).toContain('login');
    });
});