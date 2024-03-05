const mongoose = require('mongoose');
const roles = require('../constants/roles');

const UserScheme = mongoose.Schema(
	{
		login: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: Number,
			default: roles.USER,
		},
		basket: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Product',
			},
		],
	},
	{ timestamps: true },
);

const User = mongoose.model('User', UserScheme);

module.exports = User;
