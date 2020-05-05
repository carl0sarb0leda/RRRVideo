import React from 'react'
import { createStore } from 'redux'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import initialState from '../client/initialState'
import reducer from '../client/reducers'

const store = createStore(reducer, initialState)
const history = createBrowserHistory()

const ProviderMock = ({ children }) => {
    <Provider store={store}>
        <Router history={history}>
            {children}
        </Router>
    </Provider>
}

export default ProviderMock