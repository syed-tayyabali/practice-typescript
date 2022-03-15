import { combineReducers } from "redux";
import start from './start/reducer'
import shop from './Shop/reducers'

const rootReducer = combineReducers({
    start,
    shop
})

export default rootReducer