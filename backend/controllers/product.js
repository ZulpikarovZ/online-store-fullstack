const Product = require('../models/Product');

const addProduct = async (product) => {
	const newProduct = await Product.create(product);
	await newProduct.populate('categoryId');

	return newProduct;
};

const getProducts = async () => {
	let products = await Product.find();
	for (let product of products) {
		await Product.populate(product, { path: 'categoryId' });
	}

	return products;
};

const updateProduct = async (productId, product) => {
	const updatedProduct = await Product.findByIdAndUpdate(productId, product, {
		returnDocument: 'after',
	});
	await updatedProduct.populate('categoryId');

	return updatedProduct;
};

const deleteProduct = async (productId) => {
	await Product.deleteOne({ _id: productId });
};

module.exports = {
	addProduct,
	getProducts,
	updateProduct,
	deleteProduct,
};
