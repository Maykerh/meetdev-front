import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { signInSuccess, signFailure, userUpdateSuccess } from './actions';

function* signIn({ payload }) {
	try {
		const { email, password } = payload;

		const session = yield call(api.post, 'sessions', {
			email,
			password
		});

		api.defaults.headers.Authorization = `Bearer ${session.data.token}`;

		yield put(signInSuccess(session.data.token, session.data.user));

		history.push('/dashboard');
	} catch (err) {
		toast.error('Falha na autenticação');
		yield put(signFailure());
	}
}

function* signUp({ payload }) {
	try {
		const { name, email, password } = payload;

		yield call(api.post, '/users', {
			name,
			email,
			password
		});

		toast.success('Conta criada com sucesso');

		setTimeout(() => history.push('/'), 2000);
	} catch (err) {
		toast.error('Falha ao criar a conta, tente novamente');
		yield put(signFailure());
	}
}

function* userUpdate({ payload }) {
	const { name, email, password, actualPassword, id } = payload;

	yield call(api.put, `/users/${id}`, { name, email, password, actualPassword });

	yield put(userUpdateSuccess({ name, email }));
}

function logout() {
	history.push('/');
}

export default all([
	takeLatest('@auth/SIGN_IN_REQUEST', signIn),
	takeLatest('@auth/SIGN_UP_REQUEST', signUp),
	takeLatest('@auth/USER_UPDATE_REQUEST', userUpdate),
	takeLatest('@auth/LOGOUT', logout)
]);
