import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import DefaultLayout from '../components/DafaultLayout';
import MeetupRegister from '../pages/MeetupRegister';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Login} />
			<Route path="/signup" component={SignUp} />
			<DefaultLayout>
				<PrivateRoute path="/dashboard" component={Dashboard} />
				<PrivateRoute
					path="/teste"
					component={() => {
						return <Link to="/dashboard">Dash</Link>;
					}}
				/>
				<PrivateRoute path="/meetup-details" component={Details} />
				<PrivateRoute path="/meetup-register/:id" component={MeetupRegister} />
			</DefaultLayout>
		</Switch>
	);
};

export default Routes;
