import { SET_CURRENT_USER } from "./user.types";

const initialState = {
  currentUser: {
		email: 'erambo@gmail.com',
		displayName: 'John Rambo'
	},
};

export default function userReducer(state = initialState, {type, payload}) {
	switch (type) {
		case SET_CURRENT_USER:
			return {
				...state,
				currentUser: payload
			};
		default:
			return state;
	}
}
