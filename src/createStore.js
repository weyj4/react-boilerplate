import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers/index'

const middlewares = [ thunkMiddleware ]

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

const store = createStoreWithMiddleware(reducers)

export default store
