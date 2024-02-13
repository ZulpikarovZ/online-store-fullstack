const formatDate = require('./formatDate');

module.exports = (user) => {
	return {
		id: user.id,
		login: user.login,
		email: user.email,
		roleId: user.role,
		registeredAt: formatDate(user.createdAt),
	};
};
