import { request } from '../../utils';
import { setProducts } from './set-products';

export const getProductsAsync = () => (dispatch) => {
	request('/products').then((res) => {
		dispatch(setProducts(res.data));

		return res;
	});
};
