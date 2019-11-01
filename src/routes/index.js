import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Login} />
			<Route path="/signup" component={SignUp} />
			<PrivateRoute path="/dashboard" component={Dashboard} />
		</Switch>
	);
};

export default Routes;
