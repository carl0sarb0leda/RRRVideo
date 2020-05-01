import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import reducer from '../frontend/reducers/index';
import App from './routes/App';

//ServerRoutes
const history = createBrowserHistory()

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

//Compose for Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//Setting up the store
const store = createStore(reducer, preloadedState, composeEnhancers());

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__


ReactDOM.hydrate(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('app')
);
