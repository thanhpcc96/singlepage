import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  HomePage,
  ThemAdmin,
  ThemNhanVien,
  Lichsugiaodich,
  Login,
  QuanLyAdmin,
  Profile,
  Quanlykhachhang,
  Chitietkhachhang,
  QuanLyNhanVien,
  TongQuan,
  QuanLyChuyenXe,
  Quanlytuyen,
  Chitiettuyen,
  ThemtuyenXe,
  Quanlyve,
  Quanlyxe,
  Chitietxe,
  Themxe,
  Report
} from "./components";
import UserRoute from "./routers/UserRoute";
const baseURL = process.env.PUBLIC_URL;
const App = ({ location, isLogin }) => (
  <div>
    <Route
      path={`${baseURL}/`}
      exact
      component={HomePage}
      exact
      location={location}
    />
    <Route
      path={baseURL + "/login"}
      exact
      component={Login}
      exact
      location={location}
    />

    <UserRoute
      location={location}
      path={baseURL + "/dashboard"}
      exact
      component={TongQuan}
    />
    <UserRoute
      location={location}
      path={baseURL + "/manager/admin"}
      exact
      component={QuanLyAdmin}
    />
    <UserRoute
      location={location}
      path={baseURL + "/manager/admin/add"}
      exact
      component={ThemAdmin}
    />
    <UserRoute
      location={location}
      path={baseURL + "/manager/user"}
      exact
      component={QuanLyNhanVien}
    />
    <UserRoute
      location={location}
      path={baseURL + "/manager/user/add"}
      exact
      component={ThemNhanVien}
    />
    <UserRoute
      location={location}
      path={baseURL + "/manager/client"}
      exact
      component={Quanlykhachhang}
    />
    <UserRoute
      location={location}
      path={baseURL + "/manager/client/chitiet"}
      exact
      component={Chitietkhachhang}
    />
    <UserRoute
      location={location}
      path={baseURL + "/manager/transaction"}
      exact
      component={Lichsugiaodich}
    />
    <UserRoute location={location} path="/profile" exact component={Profile} />
    <UserRoute
      location={location}
      path={baseURL + "/manager/chuyenxe"}
      exact
      component={QuanLyChuyenXe}
    />
    <UserRoute
      location={location}
      path={baseURL + "/manager/tuyen"}
      exact
      component={Quanlytuyen}
    />
    <UserRoute
      location={location}
      path={baseURL + "/manager/tuyen/chitiettuyen"}
      exact
      component={Chitiettuyen}
    />
    <UserRoute
      location={location}
      path={baseURL + "/manager/tuyen/add"}
      exact
      component={ThemtuyenXe}
    />
    <UserRoute
      location={location}
      path={baseURL + "/manager/ticket"}
      exact
      component={Quanlyve}
    />
    <UserRoute
      location={location}
      path={baseURL + "/manager/coach"}
      exact
      component={Quanlyxe}
    />
    <UserRoute
      location={location}
      path={baseURL + "/manager/coach/detail"}
      exact
      component={Chitietxe}
    />
    <UserRoute
      location={location}
      path={baseURL + "/manager/coach/add"}
      exact
      component={Themxe}
    />
    <UserRoute
      location={location}
      path={baseURL + "/report"}
      exact
      component={Report}
    />
  </div>
);
App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isLogin: PropTypes.bool.isRequired
};

export default connect(state => ({
  isLogin: state.user.isLogin
}))(App);
