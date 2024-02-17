import { LOGOUT, SET_MODAL_CLOSE, SET_MODAL_OPEN } from '../action-types/action-types';

const userInitialState = {
	wasLogout: false,
	isModalOpen: false,
};

export const appReducer = (state = userInitialState, action) => {
	switch (action.type) {
		case LOGOUT:
			return {
				...state,
				wasLogout: !state.wasLogout,
			};

		case SET_MODAL_OPEN:
			return {
				...state,
				isModalOpen: true,
			};

		case SET_MODAL_CLOSE:
			return {
				...state,
				isModalOpen: false,
			};

		default:
			return state;
	}
};
