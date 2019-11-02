import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Header from '../Header';

const DefaultLayout = ({ children }) => {
	return (
		<>
			<Header />
			<Container>{children}</Container>
		</>
	);
};

DefaultLayout.propTypes = {
	children: PropTypes.any.isRequired
};

export default DefaultLayout;
