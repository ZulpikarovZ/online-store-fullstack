import { request } from '../../utils';
import { removeCategory } from './remove-category';

export const removeCategoryAsync = (category) => (dispatch) => {
	request('./categories', 'DELETE', { category }).then(() =>
		dispatch(removeCategory(category)),
	);
};
