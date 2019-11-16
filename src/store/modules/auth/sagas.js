import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { signInSuccess, signFailure } from './actions';

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

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn), takeLatest('@auth/SIGN_UP_REQUEST', signUp)]);
