import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './services/history';

import store from './store';
import Routes from './routes';

import GlobalStyle from './styles/global';

const storedUserData = JSON.parse(localStorage.getItem('meetdev'));

if (storedUserData) {
	store.dispatch({ type: '@auth/SIGN_IN_SUCCESS', payload: storedUserData });
}

function App() {
	return (
		<Provider store={store}>
			<Router history={history}>
				<Routes />
				<ToastContainer autoClose={3000} />
				<GlobalStyle />
			</Router>
		</Provider>
	);
}

export default App;
