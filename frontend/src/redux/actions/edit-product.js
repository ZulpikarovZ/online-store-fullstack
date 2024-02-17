import { EDIT_PRODUCT } from '../action-types/action-types';

export const editProduct = (product) => ({
	type: EDIT_PRODUCT,
	payload: product,
});
