const mongoose = require('mongoose');
const formatDate = require('./formatDate');
const mapProduct = require('./mapProduct');

module.exports = (user) => {
	return {
		id: user.id,
		login: user.login,
		email: user.email,
		roleId: user.role,
		basket: user.basket.map((product) =>
			mongoose.isObjectIdOrHexString(product) ? product : mapProduct(product),
		),
		registeredAt: formatDate(user.createdAt),
	};
};
