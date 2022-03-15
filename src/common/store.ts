import { compose, applyMiddleware, createStore } from "redux"
import thunk from 'redux-thunk'
import rootReducer from "."

let middleware = applyMiddleware(thunk)

export const store = createStore(rootReducer, compose(middleware));