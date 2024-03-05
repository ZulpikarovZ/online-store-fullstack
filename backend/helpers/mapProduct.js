const mongoose = require('mongoose');
const mapCategory = require('./mapCategory');
const mapComment = require('./mapComment');

module.exports = (product) => {
	return {
		id: product.id,
		name: product.name,
		price: product.price,
		quantity: product.quantity,
		imageUrl: product.imageUrl,
		categoryId: mapCategory(product.categoryId),
		comments: product.comments.map((comment) =>
			mongoose.isObjectIdOrHexString(comment) ? comment : mapComment(comment),
		),
		quantityInBasket: product.quantityInBasket,
	};
};
