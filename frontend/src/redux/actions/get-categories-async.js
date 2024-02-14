import { request } from '../../utils';
import { setCategories } from './set-categories';

export const getCategoriesAsync = () => (dispatch) => {
	request('/categories').then((res) => {
		dispatch(setCategories(res.data));

		return res;
	});
};
