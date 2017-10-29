import React from "react";
import { Route } from "react-router-dom";
import Root from "./components/Root";

const App = () => (
  <div>
    <Route path="/" exact component={Root} />
  </div>
);

export default App;
