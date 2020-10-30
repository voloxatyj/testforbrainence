import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { dataReducer } from './reducers/dataReducer'
import { uiReducer } from './reducers/uiReducer'

const initialState={}

const middleware = [
	applyMiddleware(...[thunk] || [window.thunk.default]),
	...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : [])
]

const reducers = combineReducers({
	data: dataReducer,
	ui: uiReducer
})

const store = createStore(
	reducers,
	initialState,
	compose(...middleware)
)

export default store