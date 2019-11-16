export function signInRequest(email, password) {
	return {
		type: '@auth/SIGN_IN_REQUEST',
		payload: { email, password }
	};
}

export function signInSuccess(token, user) {
	return {
		type: '@auth/SIGN_IN_SUCCESS',
		payload: { token, profile: user }
	};
}

export function signUpRequest(name, email, password) {
	return {
		type: '@auth/SIGN_UP_REQUEST',
		payload: { name, email, password }
	};
}

export function signUpSuccess(name, email, password) {
	return {
		type: '@auth/SIGN_UP_SUCCESS',
		payload: { email, password }
	};
}

export function signFailure() {
	return {
		type: '@auth/SIGN_FAILURE'
	};
}

export function userUpdateRequest(userData) {
	return {
		type: '@auth/USER_UPDATE_REQUEST',
		payload: userData
	};
}

export function userUpdateSuccess(userData) {
	return {
		type: '@auth/USER_UPDATE_SUCCESS',
		payload: userData
	};
}

export function logout() {
	return {
		type: '@auth/LOGOUT'
	};
}
