import { request } from '../../utils';
import { editProduct } from './edit-product';

export const editProductAsync = (productId, product) => (dispatch) => {
	request(`/products/${productId}`, 'PATCH', {
		...product,
		categoryId:
			typeof product.categoryId !== 'string'
				? product.categoryId?.id
				: product.categoryId,
	}).then((res) => {
		dispatch(editProduct(res.data));

		return res;
	});
};
