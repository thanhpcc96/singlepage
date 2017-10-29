import React, { Component } from "react";
import { Link } from "react-router-dom";

const Root = () => (
  <div>
    <h1> App root</h1>
    <Link to="/login">Login</Link>
  </div>
);
export default Root;
