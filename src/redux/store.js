import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducers from "./reducers";
const middlewares = [thunk, promiseMiddleware()];

if (process.env.NODE_ENV === "development") {
  middlewares.push(createLogger());
}

export default createStore(
  reducers,
  undefined,
  applyMiddleware(...middlewares)
);
