const mapCategory = require('./mapCategory');

module.exports = (product) => {
	return {
		id: product.id,
		name: product.name,
		price: product.price,
		quantity: product.quantity,
		imageUrl: product.imageUrl,
		categoryId: mapCategory(product.categoryId),
		comments: product.comments,
	};
};
