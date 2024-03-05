const mongoose = require('mongoose');

const ProductScheme = mongoose.Schema(
	{
		imageUrl: {
			type: String,
			required: true,
			unique: true,
		},
		name: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
		},
		price: {
			type: Number,
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
		},
		categoryId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Category',
		},
		comments: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Comment',
			},
		],
		quantityInBasket: {
			type: Number,
			default: 1,
		},
	},
	{ timestamps: true },
);

const Product = mongoose.model('Product', ProductScheme);

module.exports = Product;
