export default (state = {}, action) => {
	switch (action.type) {
		case '@auth/SIGN_IN_SUCCESS':
			localStorage.setItem(
				'meetdev',
				JSON.stringify({
					profile: action.payload.user || action.payload.profile,
					token: action.payload.token
				})
			);
			return state;
		case '@auth/USER_UPDATE_SUCCESS':
			let userData = JSON.parse(localStorage.getItem('meetdev'));

			userData.profile.name = action.payload.name;
			userData.profile.email = action.payload.email;

			localStorage.setItem('meetdev', JSON.stringify({ ...userData }));

			return state;
		case '@auth/LOGOUT':
			localStorage.removeItem('meetdev');
			return state;
		default:
			return state;
	}
};
