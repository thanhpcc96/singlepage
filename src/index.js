/**
 * Created by admin on 10/27/17.
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import decode from "jwt-decode";

import { logedIn } from "./components/Login/action";
import { setAuthHeader } from "./API/api";
import App from "./App";
import store from "./redux/store";

import "./assets/css/bootstrap.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/styles.css";
import "./assets/css/style.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/custom.css";
import "./assets/css/home.css";
import "./assets/css/helper.css";

// if (localStorage.HaiAuToken) {
// const a= localStorage.HaiAuToken.split(" ")[1];
// console.log('====================================');
// console.log(a);
// console.log('====================================');
// const payload = decode(a);
// const user = {
//   token: localStorage.HaiAuToken,
//   email: payload.email,
//   _id: payload.id
// };
// console.log('====================================');
// console.log(user);
// console.log('====================================');
//   setAuthHeader(localStorage.HaiAuToken);
//   store.dispatch(logedIn());
// }

import { persistStore } from "redux-persist";

persistStore(
  store,
  {
    storage: localStorage,
    whitelist: ["user"]
  }
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
