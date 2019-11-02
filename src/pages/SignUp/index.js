import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { signUpRequest } from '../../store/modules/auth/actions';

import { Container } from './styles';
import Logo from '../../components/Logo';

const schema = Yup.object().shape({
	name: Yup.string().required(),
	email: Yup.string()
		.email()
		.required('Email is required'),
	password: Yup.string()
		.min(6, 'Password minimun length is 6')
		.required('Password is required')
});

const SignUp = () => {
	const dispatch = useDispatch();
	const loading = useSelector(state => state.auth.loading);

	function handleSignUp({ name, email, password }) {
		dispatch(signUpRequest(name, email, password));
	}

	return (
		<Container>
			<div>
				<Logo />
				<Form schema={schema} onSubmit={handleSignUp}>
					<div>
						<Input type="text" placeholder="Nome" name="name" />
					</div>
					<div>
						<Input type="text" placeholder="E-mail" name="email" />
					</div>
					<div>
						<Input
							type="password"
							placeholder="Senha"
							name="password"
						/>
					</div>
					<button type="submit">
						{loading ? 'Carregando...' : 'Cadastrar'}
					</button>
					<Link to="/">Já tenho uma conta</Link>
				</Form>
			</div>
		</Container>
	);
};

export default SignUp;
