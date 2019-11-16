const initialState = {
	profile: null,
	token: null,
	signed: null,
	loading: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case '@auth/SIGN_IN_REQUEST':
			return { ...state, loading: true };
		case '@auth/SIGN_IN_SUCCESS':
			return {
				...state,
				profile: action.payload.profile,
				token: action.payload.token,
				signed: true,
				loading: false
			};
		case '@auth/SIGN_FAILURE':
			return {
				...state,
				loading: false
			};
		case '@auth/USER_UPDATE_SUCCESS':
			return {
				...state,
				profile: {
					...state.profile,
					name: action.payload.name,
					email: action.payload.email
				}
			};
		case '@auth/LOGOUT_SUCCESS':
			return initialState;
		default:
			return state;
	}
};
