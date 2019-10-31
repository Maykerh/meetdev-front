import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';

const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Login} />
			<Route path="/signup" component={SignUp} />
		</Switch>
	</Router>
);

export default Routes;
