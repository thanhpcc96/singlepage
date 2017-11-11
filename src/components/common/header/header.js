import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logOut } from "../../Login/action";
class Header extends Component {
  handleLogout() {
    this.props.logOut();
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
              <span className="nav-label">HAIAU</span>
            </Link>
          </div>
          <nav className="navigation">
            <ul className="list-unstyled">
              {/* Dashboard Start */}
              <li className="has-submenu  ">
                <Link to="/dashboard">
                  <i className="fa fa-home" aria-hidden="true" />
                  <span className="nav-label">Tổng quan</span>
                  <span className="selected" />
                </Link>
              </li>
              {/* Giam sat lo trinh */}
              <li className="has-submenu ">
                <Link to="/tracking">
                  <i className="fa fa-user-secret" aria-hidden="true" />
                  <span className="nav-label">Giám sát lộ trình</span>
                  <span className="selected" />
                </Link>
              </li>
              {/* Manage Sub-Admin */}
              <li className="has-submenu ">
                <Link to="/manager/user">
                  <i className="fa fa-user-secret" aria-hidden="true" />
                  <span className="nav-label">Quản lý nhân viên</span>
                  <span className="selected" />
                </Link>
              </li>
              {/* Report*/}
              <li className="has-submenu">
                <Link to="/manager/client">
                  <i className="fa fa-user-secret" aria-hidden="true" />
                  <span className="nav-label">Quản lý khách hàng</span>
                  <span className="selected" />
                </Link>
              </li>
              {/* Dashboard Start */}
              <li className="has-submenu ">
                <Link to="/manager/chuyenxe">
                  <i className="fa fa-user-secret" aria-hidden="true" />
                  <span className="nav-label">Quản lý chuyến xe</span>
                  <span className="selected" />
                </Link>
              </li>
              {/* Manage Sub-Admin */}
              <li className="has-submenu ">
                <Link to="/manager/tuyen">
                  <i className="fa fa-user-secret" aria-hidden="true" />
                  <span className="nav-label">Quản lý tuyến</span>
                  <span className="selected" />
                </Link>
              </li>
              {/* Manage Sub-Admin */}
              <li className="has-submenu ">
                <Link to="/manager/coach">
                  <i className="fa fa-user-secret" aria-hidden="true" />
                  <span className="nav-label">Quản lý xe</span>
                  <span className="selected" />
                </Link>
              </li>
              {/* Manage Sub-Admin */}
              <li className="has-submenu ">
                <Link to="/manager/transaction">
                  <i className="fa fa-user-secret" aria-hidden="true" />
                  <span className="nav-label">Lịch sử giao dịch</span>
                  <span className="selected" />
                </Link>
              </li>
              {/* Report*/}
              <li className="has-submenu" id="languagetab">
                <a>
                  <i className="fa fa-bar-chart" aria-hidden="true" />
                  <span className="nav-label">Báo cáo thống kê</span>
                  <span className="selected" />
                </a>
              </li>
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
                    alt
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
                    <a>
                      <i className="fa fa-user" aria-hidden="true" /> Thông tin
                      tài khoản
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa fa-key" aria-hidden="true" /> Thay đổi
                      mật khẩu
                    </a>
                  </li>
                  <li>
                    <a onClick={() => this.handleLogout()}>
                      <i className="fa fa-sign-out" /> Đăng xuất
                    </a>
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
