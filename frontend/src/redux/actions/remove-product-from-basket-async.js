import { request } from '../../utils';
import { removeProductFromBasket } from './remove-product-from-basket';

export const removeProductFromBasketAsync = (userId, productId) => (dispatch) =>
	request(`/basket/${userId}`, 'DELETE', { productId }).then(() =>
		dispatch(removeProductFromBasket(productId)),
	);
