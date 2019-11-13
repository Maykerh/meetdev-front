import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = ({ text, width, Icon, color }) => {
	return (
		<Container width={width} color={color}>
			{Icon ? <Icon size={'16px'} /> : null}
			{text}
		</Container>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	width: PropTypes.string,
	icon: PropTypes.object,
	color: PropTypes.string
};

export default Button;
