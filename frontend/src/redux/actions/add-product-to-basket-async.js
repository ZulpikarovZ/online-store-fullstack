import { request } from '../../utils';
import { setUser } from './set-user';

export const addProductToBasketAsync = (userId, productId) => (dispatch) =>
	request(`/basket/${userId}`, 'POST', { productId }).then((res) => {
		dispatch(setUser(res.data));

		return res;
	});
