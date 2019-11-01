import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '../../store/modules/auth/actions';

import { Container } from './styles';

const schema = Yup.object().shape({
	email: Yup.string()
		.email()
		.required('Email is required'),
	password: Yup.string()
		.min(6, 'Password minimun length is 6')
		.required('Password is required')
});

const Login = () => {
	const dispatch = useDispatch();
	const loading = useSelector(state => state.auth.loading);

	function handleLogin({ email, password }) {
		dispatch(signInRequest(email, password));
	}

	return (
		<Container>
			<div>
				<span id="logo">M</span>
				<Form schema={schema} onSubmit={handleLogin}>
					<div>
						<Input type="text" placeholder="E-mail" name="email" />
					</div>
					<div>
						<Input
							type="password"
							placeholder="Password"
							name="password"
						/>
					</div>
					<button type="submit">
						{loading ? 'Carregando...' : 'Login'}
					</button>
					<Link to="/signup">Criar uma conta</Link>
				</Form>
			</div>
		</Container>
	);
};

export default Login;
