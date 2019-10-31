import React from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import history from '../services/history';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const Routes = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/signup" component={SignUp} />
				<PrivateRoute path="/dashboard" component={Dashboard} />
			</Switch>
		</Router>
	);
};

export default Routes;
