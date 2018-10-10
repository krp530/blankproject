import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { helloSaga } from './sagas'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'
import createSagaMiddleware from 'redux-saga'

export const history = createHistory()

const sagaMiddleware = createSagaMiddleware()
const enhancers = []

const middleware = [
  sagaMiddleware,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  connectRouter(history)(rootReducer),
  composedEnhancers
)

sagaMiddleware.run(helloSaga)
const action = type => store.dispatch({type})

export default store
