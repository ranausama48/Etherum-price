import { combineReducers } from 'redux'
import errorReducer from './errorReducer'
import authReducer from './authReducer';
import blogReducer from "./blogReducer";
import tradeRaducer from "./tradeReducer"
import stockReducer from './StockIssueReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    error: errorReducer,
    blogs:blogReducer,
    trade: tradeRaducer,
    stockIssue:stockReducer
})

export default rootReducer;