import {
	REMOVE_CATEGORY,
	SET_CATEGORIES,
	SET_CATEGORY,
} from '../action-types/action-types';

const userInitialState = [];

export const categoryReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case SET_CATEGORY:
			return [...state, action.payload];

		case SET_CATEGORIES:
			return [...action.payload];

		case REMOVE_CATEGORY:
			return [...state].filter((category) => category.name !== action.payload);

		default:
			return state;
	}
};
