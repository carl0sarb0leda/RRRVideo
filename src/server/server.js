import express from 'express'
import dotenv from 'dotenv'
import webpack from 'webpack'
import helmet from 'helmet'
import React from 'react';
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { renderRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router-dom'
import serverRoutes from '../frontend/routes/serverRoutes'
import reducer from '../frontend/reducers/index';
import initialState from '../frontend/initialState'
import getManifest from './getManifest'

//Calling from .env
dotenv.config()
const { ENV, PORT } = process.env

const app = express();

if (ENV === 'development') {
    console.log('Development config perrooo')
    const webpackConfig = require('../../webpack.config')
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')

    const compiler = webpack(webpackConfig)
    const serverConfig = { port: PORT, hot: true }
    app.use(webpackDevMiddleware(compiler, serverConfig))
    app.use(webpackHotMiddleware(compiler))
} else {
    //Express Middleware
    app.use((req, res, next) => {
        if (!req.hashManifest) req.hashManifest = getManifest()
        next()
    })
    //This setup is for production
    app.use(express.static(`${__dirname}/public`))
    //Security with helmet
    app.use(helmet())
    app.use(helmet.permittedCrossDomainPolicies())
    app.disable('x-powered-by') //Hiden info about our server for prod
}

const setResponse = (html, preloadedState, manifest) => {
    const mainStyles = manifest ? manifest['main.css'] : 'assets/app.css'
    const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js'
    const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js'

    return (`
    <!DOCTYPE html>
        <html>
            <head>
                <link rel="stylesheet" href="${mainStyles}" type="text/css">
                <title>Brown Video</title>
            </head>
            <body>
                <div id="app">${html}</div>
                <script> 
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')} 
                </script>
                <script src="${mainBuild}" type="text/javascript"></script>
                <script src="${vendorBuild}" type="text/javascript"></script>
            </body>
        </html>
    `)
}

const renderApp = (req, res) => {
    const store = createStore(reducer, initialState)
    const preloadedState = store.getState()
    const html = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                {renderRoutes(serverRoutes)}
            </StaticRouter>
        </Provider>,
    )
    res.send(setResponse(html, preloadedState, req.hashManifest))
}

app.get('*', renderApp)

//Listener
app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Server is running on: ${PORT}  Yeah!`)
    }
})