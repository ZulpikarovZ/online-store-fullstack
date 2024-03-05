import {
	LOGOUT,
	REMOVE_PRODUCT_FROM_BASKET,
	SET_BASKET_PRODUCT_QUANTITY,
	SET_USER,
} from '../action-types/action-types';
import { ROLE } from '../../constants';

const userInitialState = {
	id: null,
	login: null,
	email: null,
	roleId: ROLE.GUEST,
};

export const userReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				...action.payload,
			};

		case REMOVE_PRODUCT_FROM_BASKET:
			return {
				...state,
				basket: [...state.basket].filter((el) => el.id !== action.payload),
			};

		case SET_BASKET_PRODUCT_QUANTITY:
			return {
				...state,
				basket: [...state.basket].map((el) => {
					if (el.id === action?.payload?.productId) {
						return { ...el, quantityInBasket: action?.payload?.quantity };
					}
					return el;
				}),
			};

		case LOGOUT:
			return userInitialState;

		default:
			return state;
	}
};
