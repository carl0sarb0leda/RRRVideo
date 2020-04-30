import React from 'react';
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { renderRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router-dom'
import serverRoutes from '../frontend/routes/serverRoutes'
import express from 'express'
import dotenv from 'dotenv'
import webpack from 'webpack'

import reducer from '../frontend/reducers/index';
import initialState from '../frontend/initialState'

//Calling from .env
dotenv.config()
const { ENV, PORT } = process.env

const app = express();

if (ENV === "development") {
    console.log('Development config perrooo')
    const webpackConfig = require('../../webpack.config')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')

    const compiler = webpack(webpackConfig)
    const serverConfig = { port: PORT, hot: true }
    app.use(webpackDevMiddleware(compiler, serverConfig))
    app.use(webpackHotMiddleware(compiler))
}
const setResponse = (html) => {
    return (`
    <!DOCTYPE html>
        <html>
            <head>
                <title>Brown Video</title>
                <link rel="stylesheet" href="assets/app.css" type="text/css">
            </head>
            <body>
                <div id="app">${html}</div>
                <script src="assets/app.js" type="text/javascript"></script>
            </body>
        </html>
    `)
}

const renderApp = (req, res) => {
    const store = createStore(reducer, initialState)
    const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                {renderRoutes(serverRoutes)}
            </StaticRouter>
        </Provider>
    )
    res.send(setResponse(html))
}

app.get('*', renderApp)

//Listener
app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Server is running on: 3000  Yeah!')
    }
})