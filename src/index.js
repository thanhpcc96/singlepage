/**
 * Created by admin on 10/27/17.
 */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import decode from "jwt-decode";

import { logedIn } from "./components/Login/action";
import { setAuthHeader } from "./API/api";
import App from "./App";
import store from "./redux/store";

if (localStorage.HaiAuToken) {
  const payload = decode(localStorage.HaiAuToken);
  const user = {
    token: localStorage.HaiAuToken,
    email: payload.email,
    _id: payload.id
  };
  setAuthHeader(localStorage.HaiAuToken);
  store.dispatch(logedIn(user));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
