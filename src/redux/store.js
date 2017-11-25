import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
// import { autoRehydrate } from "redux-persist";
import { loadState } from "./loadStateLocal";

import reducers from "./reducers";

const middlewares = [thunk, promiseMiddleware()];

if (process.env.NODE_ENV === "development") {
  middlewares.push(createLogger());
}

export default createStore(
  reducers,
  loadState(),
  compose(applyMiddleware(...middlewares))
);
