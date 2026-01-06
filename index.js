const capitalizeWords = (input) => {
    if (typeof input !== 'string') {
        return '';
    }

    if (input === '') {
        return '';
    }

    return input
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

const filterActiveUsers = (users) => {
    if (!Array.isArray(users)) {
        return [];
    }

    return users.filter((user) => user.isActive);
};

const logAction = (action, username) => {
    const timestamp = new Date().toISOString();
    return `User ${username} performed ${action} at ${timestamp}`;
};

module.exports = {
    capitalizeWords,
    filterActiveUsers,
    logAction,
};