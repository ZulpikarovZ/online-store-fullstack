import { request } from '../../utils';
import { setCategory } from './set-category';

export const addCategoryAsync = (category) => (dispatch) => {
	request('/categories', 'POST', { category }).then((res) => {
		dispatch(setCategory(res.data));

		return res;
	});
};
