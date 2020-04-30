import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import * as actionCreators from './actions/index';
import reducer from '../frontend/reducers/index';
import initialState from './initialState'
import App from './routes/App';

//ServerRoutes
const history = createBrowserHistory()

//Compose for Redux DevTools
const composeEnhancers = composeWithDevTools({
	actionCreators,
	trace: true,
	traceLimit: 25
});

//Setting up the store
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('app')
);
