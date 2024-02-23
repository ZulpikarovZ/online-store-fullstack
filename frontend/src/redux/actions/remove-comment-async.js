import { request } from '../../utils';

export const removeCommentAsync = (prodictId, commentId) => (dispatch) =>
	request(`/products/${prodictId}/comments/${commentId}`, 'DELETE');
