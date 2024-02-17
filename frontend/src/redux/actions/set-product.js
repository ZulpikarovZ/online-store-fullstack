import { SET_PRODUCT } from '../action-types/action-types';

export const setProduct = (product) => ({
	type: SET_PRODUCT,
	payload: product,
});
