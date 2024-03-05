const User = require('../models/User');

const addProductInBasket = async (userId, productId) => {
	const user = await User.findByIdAndUpdate(
		userId,
		{ $addToSet: { basket: productId } },
		{
			returnDocument: 'after',
		},
	).populate('basket');

	return user;
};

const getUserBasket = async (userId) => {
	const user = await User.find({ _id: userId }).populate('basket');

	return user;
};

const deleteProductFromBasket = async (userId, productId) => {
	await User.findByIdAndUpdate({ _id: userId }, { $pull: { basket: productId } });
};

module.exports = {
	addProductInBasket,
	getUserBasket,
	deleteProductFromBasket,
};
