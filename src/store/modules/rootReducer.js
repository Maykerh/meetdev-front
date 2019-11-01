import { combineReducers } from 'redux';

import auth from './auth/reducers';

const persistReducer = (state = {}, action) => {
	switch (action.type) {
		case '@auth/SIGN_IN_SUCCESS':
			localStorage.setItem(
				'meetdev',
				JSON.stringify({
					profile: action.payload.user,
					token: action.payload.token
				})
			);
			return state;
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	auth,
	persistReducer
});

export default rootReducer;
