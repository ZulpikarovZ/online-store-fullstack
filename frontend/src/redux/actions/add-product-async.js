import { request } from '../../utils';
import { setProduct } from './set-product';

export const addProductAsync = (product) => (dispatch) => {
	request('/products', 'POST', product).then((res) => {
		dispatch(setProduct(res.data));

		return res;
	});
};
