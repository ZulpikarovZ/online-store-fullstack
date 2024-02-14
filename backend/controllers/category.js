const Category = require('../models/Category');

const addCategory = async (category) => {
	const newCategory = await Category.create({ name: category });

	return newCategory;
};

const getCategories = async () => {
	const categories = await Category.find();

	return categories;
};

const deleteCategories = async (category) => {
	await Category.deleteOne({ name: category });
};

module.exports = {
	addCategory,
	getCategories,
	deleteCategories,
};
