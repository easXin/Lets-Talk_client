// 中间件
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers'

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

// create reducer
// use reducer to create a store
// user store to get state of data

// when user interact with item, store dispatch an event to change our state
