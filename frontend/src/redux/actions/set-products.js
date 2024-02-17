import { SET_PRODUCTS } from '../action-types/action-types';

export const setProducts = (products) => ({
	type: SET_PRODUCTS,
	payload: products,
});
