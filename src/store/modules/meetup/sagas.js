import { all, call, put, takeLatest } from 'redux-saga/effects';

import { meetupRegisterSuccess } from './actions';

import { toast } from 'react-toastify';

import history from '../../../services/history';

import api from '../../../services/api';

function* meetupRegister({ payload }) {
	try {
		const { banner_id, title, description, date, location } = payload;

		yield call(api.post, 'meetups', {
			banner_id,
			title,
			description,
			date,
			location
		});

		history.push('/dashboard');
	} catch (err) {
		if (err.response.data.error) {
			toast.error(err.response.data.error);
		} else {
			console.warn(err);
		}
	}
}

function* meetupUpdate({ payload }) {
	try {
		const { banner_id, title, description, date, location } = payload.meetupData;

		yield call(api.put, `meetups/${payload.id}`, {
			banner_id,
			title,
			description,
			date,
			location
		});

		history.push('/dashboard');
	} catch (err) {
		if (err.response.data.error) {
			toast.error(err.response.data.error);
		} else {
			console.warn(err);
		}
	}
}

function* meetupCancel({ payload }) {
	yield api.delete(`meetups/${payload}`);

	history.push('/dashboard');
	toast.success('Cancelado com sucesso');
}

export default all([
	takeLatest('@meetup/REGISTER_REQUEST', meetupRegister),
	takeLatest('@meetup/UPDATE_REQUEST', meetupUpdate),
	takeLatest('@meetup/CANCEL_REQUEST', meetupCancel)
]);
