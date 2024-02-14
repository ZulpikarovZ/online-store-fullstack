import { SET_CATEGORY } from '../action-types/action-types';

export const setCategory = (category) => ({
	type: SET_CATEGORY,
	payload: category,
});
