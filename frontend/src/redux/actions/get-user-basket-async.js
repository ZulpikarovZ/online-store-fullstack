import { request } from '../../utils';
import { setUser } from './set-user';

export const getUserBasketAsync = (userId) => (dispatch) =>
	request(`/basket/${userId}`).then((res) => dispatch(setUser(res.data)));
