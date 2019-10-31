import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import store from '../store';

const PrivateRoute = ({ children, ...rest }) => {
	console.log('ahahaha');
	console.log(rest);
	const { signed } = store.getState().auth;

	console.log(store.getState());

	if (!signed) {
		return <Redirect to="/" />;
	}

	return <Route {...rest}>{children}</Route>;
};

export default PrivateRoute;
