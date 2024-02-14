const mongoose = require('mongoose');

const CategoryScheme = mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
});

const Category = mongoose.model('Category', CategoryScheme);

module.exports = Category;
