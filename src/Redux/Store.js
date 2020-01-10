import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducers/rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

// const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  // initialState,
  compose(
    applyMiddleware(...middleware, logger),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
