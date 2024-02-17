import { REMOVE_PRODUCT } from '../action-types/action-types';

export const removeProduct = (productId) => ({
	type: REMOVE_PRODUCT,
	payload: productId,
});
