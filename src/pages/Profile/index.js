import React, { useState, useEffect, useRef } from 'react';
import { useField, Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';

import { FaPlusCircle } from 'react-icons/fa';
import Button from '../../components/Button';

import { Container, ImageInput } from './styles';

import { userUpdateRequest } from '../../store/modules/auth/actions';

import api from '../../services/api';

import * as Yup from 'yup';

const schema = Yup.object().shape({
	name: Yup.string().required(),
	email: Yup.string().email(),
	password: Yup.string().required(),
	actualPassword: Yup.string().test('password', 'Password minimum length is 6', str => (str ? str.length >= 6 : true))
});

// test('password', 'Password minimum length is 6', str => (str ? str.length >= 6 : true)),

export default function Profile() {
	const userData = useSelector(state => state.auth.profile);

	const dispatch = useDispatch();

	function handleSubmit(data) {
		data.id = userData.id;

		dispatch(userUpdateRequest(data));
	}

	return (
		<Container>
			<Form schema={schema} onSubmit={handleSubmit} initialData={userData}>
				<Input name="name" type="text" placeholder="Nome" />
				<Input name="email" type="text" placeholder="Email" />
				<Input name="actualPassword" type="text" placeholder="Senha atual" />
				<Input name="password" type="text" placeholder="Nova senha" />

				<Button type="submit" Icon={FaPlusCircle} text={'Salvar'} />
			</Form>
		</Container>
	);
}
