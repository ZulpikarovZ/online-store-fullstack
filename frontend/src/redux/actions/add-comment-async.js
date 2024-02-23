import { request } from '../../utils';

export const addCommentAsync = (productId, content) => (dispatch) =>
	request(`/products/${productId}/comments`, 'POST', { content });
