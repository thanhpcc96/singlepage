import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Route, NavLink } from "react-router-dom";

import { logOut } from "../../Login/action";
const MenuLink = ({ label, to, acticeOnlyWhenExacr, icon }) => {
  return (
    <Route
      path={to}
      exact={acticeOnlyWhenExacr}
      children={({ match }) => {
        var active = match ? "active has-submenu" : "";
        return (
          <li className={active}>
            <NavLink to={to} className="has-submenu">
              <i className={icon} aria-hidden="true" />
              {label}
            </NavLink>
          </li>
        );
      }}
    />
  );
};

class Header extends Component {
  handleLogout() {
    this.props.logOut();
    console.log("============================================");
    console.log("==========                ===========", this.props);
    console.log("============================================");
  }

  render() {
    return (
      <div>
        <aside
          className="left-panel"
          style={{ overflow: "hidden", outline: "none" }}
          tabIndex={5000}
        >
          <div className="logo">
            <Link className="logo-expanded" to="/">
              <br />
              <span className="nav-label">HẢI ÂU</span>
            </Link>
          </div>
          <nav className="navigation">
            <ul className="list-unstyled">
              <MenuLink
                label="Tổng quan"
                to="/dashboard"
                acticeOnlyWhenExacr={true}
                icon={"fa fa-home"}
              />

              <MenuLink
                label="Xem lộ trình"
                to="/tracking"
                acticeOnlyWhenExacr={true}
                icon={"fa fa-map-marker"}
              />

              <MenuLink
                label="Quản lý Admin"
                to="/manager/admin"
                acticeOnlyWhenExacr={true}
                icon={"fa fa-user"}
              />

              <MenuLink
                label="Quản lý nhân viên"
                to="/manager/user"
                acticeOnlyWhenExacr={true}
                icon={"fa fa-user"}
              />

              <MenuLink
                label="Quản lý khách hàng"
                to="/manager/client"
                acticeOnlyWhenExacr={true}
                icon={"fa fa-user-o"}
              />

              <MenuLink
                label="Quản lý chuyến xe"
                to="/manager/chuyenxe"
                acticeOnlyWhenExacr={true}
                icon={"fa fa-truck"}
              />

              <MenuLink
                label="Quản lý tuyến"
                to="/manager/tuyen"
                acticeOnlyWhenExacr={true}
                icon={"fa fa-road"}
              />

              <MenuLink
                label="Quản lý xe"
                to="/manager/coach"
                acticeOnlyWhenExacr={true}
                icon={"fa fa-bus"}
              />
              <MenuLink
                label="Quản lý vé"
                to="/manager/ticket"
                acticeOnlyWhenExacr={true}
                icon={"fa fa-ticket"}
              />
              <MenuLink
                label="Lịch sử giao dịch"
                to="/manager/transaction"
                acticeOnlyWhenExacr={true}
                icon={"fa fa-user-secret"}
              />

              <MenuLink
                label="Báo cáo thống kê"
                to="/report"
                acticeOnlyWhenExacr={true}
                icon={"fa fa-bar-chart"}
              />
              {/* Dashboard Start */}
              {/*<li className="has-submenu">
                <Link to="/dashboard">
                  <i className="fa fa-home" aria-hidden="true" />
                  <span className="nav-label">Tổng quan</span>
                  <span className="selected" />
                  <MenuLink
                    label="Tong quan"
                    to="/"
                    acticeOnlyWhenExacr={true}
                  />
                </Link>
              </li>*/}
              {/* Giam sat lo trinh */}
              {/*<li className="has-submenu ">
                <Link to="/tracking">
                  <i className="fa fa-user-secret" aria-hidden="true" />
                  <span className="nav-label">Giám sát lộ trình</span>
                  <span className="selected" />
                </Link>
              </li>*/}
              {/* Manage Sub-Admin */}
              {/*<li className="has-submenu ">
                <Link to="/manager/user">
                  <i className="fa fa-user-secret" aria-hidden="true" />
                  <span className="nav-label">Quản lý nhân viên</span>
                  <span className="selected" />
                </Link>
              </li>*/}
              {/* Quan ly khach hang*/}
              {/*<li className="has-submenu">
                <Link to="/manager/client">
                  <i className="fa fa-user-secret" aria-hidden="true" />
                  <span className="nav-label">Quản lý khách hàng</span>
                  <span className="selected" />
                </Link>
              </li>*/}
              {/* Quan ly chuyen xe */}
              {/*<li className="has-submenu ">
                <Link to="/manager/chuyenxe">
                  <i className="fa fa-user-secret" aria-hidden="true" />
                  <span className="nav-label">Quản lý chuyến xe</span>
                  <span className="selected" />
                </Link>
              </li>*/}
              {/* quan ly tuyen xe */}
              {/*<li className="has-submenu ">
                <Link to="/manager/tuyen">
                  <i className="fa fa-user-secret" aria-hidden="true" />
                  <span className="nav-label">Quản lý tuyến</span>
                  <span className="selected" />
                </Link>
              </li>*/}
              {/* Quan ly xe */}
              {/*<li className="has-submenu ">
                <Link to="/manager/coach">
                  <i className="fa fa-user-secret" aria-hidden="true" />
                  <span className="nav-label">Quản lý xe</span>
                  <span className="selected" />
                </Link>
              </li>
              {/* lich su giao dich */}
              {/*<li className="has-submenu ">
                <Link to="/manager/transaction">
                  <i className="fa fa-user-secret" aria-hidden="true" />
                  <span className="nav-label">Lịch sử giao dịch</span>
                  <span className="selected" />
                </Link>
              </li>
              {/* Report*/}
              {/*<li className="has-submenu" id="languagetab">
                <Link to="/report">
                  <i className="fa fa-bar-chart" aria-hidden="true" />
                  <span className="nav-label">Báo cáo thống kê</span>
                  <span className="selected" />
                </Link>
              </li>*/}
            </ul>
            <ul className="list-unstyled" />
          </nav>
        </aside>
        <section className="content">
          <header id="header" className="top-header container-fluid">
            <button type="button" className="navbar-toggle pull-left">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <ul className="list-inline navbar-right top-menu top-right-menu">
              <div className="dropdown show">
                <a
                  className="btn btn-secondary dropdown-toggle"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    alt=""
                    className="img-circle"
                    src={process.env.PUBLIC_URL + "/assets/img/user.png"}
                  />
                  <span className="username username-hide-on-mobile">
                    {" "}
                    Hảo Nguyễn
                  </span>
                  <i className="fa fa-angle-down" />
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <Link to="./ChitietAdmin">
                      <i className="fa fa-user" aria-hidden="true" /> Thông tin
                      tài khoản
                    </Link>
                  </li>
                  <li>
                    <Link to="/changepass">
                      <i className="fa fa-key" aria-hidden="true" /> Thay đổi
                      mật khẩu
                    </Link>
                  </li>
                  <li>
                    <button onClick={() => this.handleLogout()}>
                      <i className="fa fa-sign-out" /> Đăng xuất
                    </button>
                  </li>
                </ul>
              </div>
            </ul>
          </header>
          {/* /header */}
        </section>
      </div>
    );
  }
}
export default connect(
  state => ({
    user: state.user
  }),
  {
    logOut
  }
)(Header);
