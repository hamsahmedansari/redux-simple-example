import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers";
import { createLogger } from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, createLogger()));
const store = createStore(allReducers, enhancer);
export default store;
