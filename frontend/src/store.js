import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

const intialstate = {};

const middleware = [thunk];

const store = createStore(
  rootReducers,
  intialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
