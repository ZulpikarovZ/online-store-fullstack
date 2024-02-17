import {
	EDIT_PRODUCT,
	REMOVE_PRODUCT,
	SET_PRODUCT,
	SET_PRODUCTS,
} from '../action-types/action-types';

const initialState = [];

export const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PRODUCT:
			return [...state, action.payload];

		case SET_PRODUCTS:
			return [...action.payload];

		case EDIT_PRODUCT:
			return [
				...state.map((el) => {
					if (el.id === action.payload?.id) {
						return action.payload;
					}

					return el;
				}),
			];

		case REMOVE_PRODUCT:
			return [...state].filter((el) => el.id !== action.payload);

		default:
			return state;
	}
};
