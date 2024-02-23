import { request } from '../../utils';

export const getProductAsync = (productId) => (dispatch) =>
	request(`/products/${productId}`);
