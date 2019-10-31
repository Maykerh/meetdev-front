import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default class Login extends Component {
	render() {
		return (
			<Container>
				<div>
					<span id="logo">M</span>
					<input type="text" placeholder={'e-mail'} />
					<input type="text" placeholder={'senha'} />
					<button type="button">Entrar</button>
				</div>
				<Link to="/signup">signup</Link>
			</Container>
		);
	}
}
