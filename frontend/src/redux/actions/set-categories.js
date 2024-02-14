import { SET_CATEGORIES } from '../action-types/action-types';

export const setCategories = (categories) => ({
	type: SET_CATEGORIES,
	payload: categories,
});
