import { REMOVE_CATEGORY } from '../action-types/action-types';

export const removeCategory = (categoryName) => ({
	type: REMOVE_CATEGORY,
	payload: categoryName,
});
