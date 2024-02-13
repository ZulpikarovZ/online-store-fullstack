import { LOGOUT, SET_USER } from '../action-types/action-types';
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

		case LOGOUT:
			return userInitialState;

		default:
			return state;
	}
};
