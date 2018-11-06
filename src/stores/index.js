import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import createLogger from 'redux-logger'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware } from 'redux'

import rootReducers from '../reducers'

export const history = createHistory()

const historyRouterMiddleware = routerMiddleware(history)

const store = createStore(
  connectRouter(history)(rootReducers),
  applyMiddleware(thunk, historyRouterMiddleware, createLogger)
)

export default store
