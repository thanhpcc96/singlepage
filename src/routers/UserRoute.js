import React from "react";
import PropTypes, { bool } from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { Header } from "../components/common/header";
import { Footer } from "../components/common/footer";

const UserRoute = ({ isLogin, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLogin ? (
        <div>
          <Header />
          <Component {...props} />
          <Footer />
        </div>
      ) : (
        <Redirect to="/login" />
      )}
  />
);
UserRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired
};

export default connect(state => ({
  isLogin: !state.user.isLogin
}))(UserRoute);
