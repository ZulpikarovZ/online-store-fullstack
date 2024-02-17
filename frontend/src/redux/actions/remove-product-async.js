import { request } from '../../utils';
import { removeProduct } from './remove-product';

export const removeProductAsync = (productId) => (dispatch) => {
	request(`/products/${productId}`, 'DELETE').then(() =>
		dispatch(removeProduct(productId)),
	);
};
