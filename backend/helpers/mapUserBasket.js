const mongoose = require('mongoose');
const mapProduct = require('./mapProduct');

module.exports = (user) => {
	return {
		basket: user.basket.map((product) =>
			mongoose.isObjectIdOrHexString(product) ? product : mapProduct(product),
		),
	};
};
