import { all, call, put, takeLatest } from 'redux-saga/effects';

import { meetupRegisterSuccess } from './actions';

import history from '../../../services/history';

import api from '../../../services/api';

function* meetupRegister({ payload }) {
	const { banner_id, title, description, date, location } = payload;

	var result = yield call(api.post, 'meetups', { banner_id, title, description, date, location });

	history.push('/dashboard');
}

export default all([takeLatest('@meetup/REGISTER_REQUEST', meetupRegister)]);
