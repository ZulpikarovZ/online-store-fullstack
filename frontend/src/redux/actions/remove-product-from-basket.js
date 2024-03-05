import { REMOVE_PRODUCT_FROM_BASKET } from '../action-types/action-types';

export const removeProductFromBasket = (productId) => ({
	type: REMOVE_PRODUCT_FROM_BASKET,
	payload: productId,
});
