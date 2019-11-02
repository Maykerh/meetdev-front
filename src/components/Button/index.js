import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = ({ text, width, Icon }) => {
	return (
		<Container width={width}>
			{Icon ? <Icon size={'16px'} /> : null}
			{text}
		</Container>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	width: PropTypes.string,
	icon: PropTypes.object
};

export default Button;
