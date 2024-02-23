const Comment = require('../models/Comment');
const Product = require('../models/Product');

//add one product
const addProduct = async (product) => {
	const newProduct = await Product.create(product);
	await newProduct.populate('categoryId');
	await newProduct.populate({ path: 'comments', populate: 'author' });

	return newProduct;
};

//get all products
const getProducts = async () => {
	let products = await Product.find();
	for (let product of products) {
		await Product.populate(product, { path: 'categoryId' });
	}

	return products;
};

//get one product
const getProduct = async (productId) => {
	const product = await Product.findById(productId).populate('categoryId');
	await product.populate({ path: 'comments', populate: 'author' });

	return product;
};

//update product
const updateProduct = async (productId, product) => {
	const updatedProduct = await Product.findByIdAndUpdate(productId, product, {
		returnDocument: 'after',
	});
	await updatedProduct.populate('categoryId');
	await updatedProduct.populate({ path: 'comments', populate: 'author' });

	return updatedProduct;
};

//remove product
const deleteProduct = async (productId) => {
	await Product.deleteOne({ _id: productId });
};

//add new comment
const addComment = async (productId, comment) => {
	const newComment = await Comment.create(comment);
	await Product.findByIdAndUpdate(productId, { $push: { comments: newComment } });
	await newComment.populate('author');

	return newComment;
};

//remove comment
const deleteComment = async (productId, commentId) => {
	await Comment.deleteOne({ _id: commentId });
	await Product.findByIdAndUpdate(productId, { $pull: { comments: commentId } });
};

module.exports = {
	addProduct,
	getProducts,
	getProduct,
	updateProduct,
	deleteProduct,
	addComment,
	deleteComment,
};
