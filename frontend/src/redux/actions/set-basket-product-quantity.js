import { SET_BASKET_PRODUCT_QUANTITY } from '../action-types/action-types';

export const setBasketProductQuantity = (productId, quantity) => ({
	type: SET_BASKET_PRODUCT_QUANTITY,
	payload: {
		productId,
		quantity,
	},
});
