import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default class SignUp extends Component {
	render() {
		return (
			<Container>
				{'signup'}
				{<Link to="/">signup</Link>}
			</Container>
		);
	}
}
