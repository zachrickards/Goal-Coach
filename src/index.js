import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { firebaseApp } from './firebase';
import { logUser } from './actions';
import reducer from './reducers'

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const history = createHistory();
const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
	if (user) {
		const { email } = user;
		store.dispatch(logUser(email));
		history.push('/app');
	} else {
		history.replace('/signin');
	}
})

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<div>
				<Route path='/app' component={App} />
				<Route path='/signin' component={SignIn} />
				<Route path='/signup' component={SignUp} />
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);