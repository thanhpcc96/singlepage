import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <aside
          className="left-panel"
          style={{ overflow: "hidden", outline: "none" }}
          tabIndex={5000}
        >
          <div className="logo">
            <a href="home.php?pages=ride-now" className="logo-expanded">
              <img src="img/logo.png" alt="logo" />
              <span className="nav-label">Apporio</span>
            </a>
          </div>
          <nav className="navigation">
            <ul className="list-unstyled">
              {/* Dashboard Start */}
              <li className="has-submenu active ">
                <a href="index.html">
                  <i className="fa fa-home" aria-hidden="true" />
                  <span className="nav-label">Tổng quan</span>
                  <span className="selected" />
                </a>
              </li>
              {/* Manage Sub-Admin */}
              <li className="has-submenu ">
                <a href="tracking.html">
                  <i className="fa fa-user-secret" aria-hidden="true" />
                  <span className="nav-label">Giám sát lộ trình</span>
                  <span className="selected" />
                </a>
              </li>
              {/* Manage Sub-Admin */}
              <li className="has-submenu ">
                <a href="SendPushNotification.html">
                  <i className="fa fa-bell" aria-hidden="true" />
                  <span className="nav-label">Gửi thông báo</span>
                  <span className="selected" />
                </a>
              </li>
              {/* Manage Sub-Admin */}
              <li className="has-submenu ">
                <a href="manager-drive.html">
                  <i className="fa fa-user-secret" aria-hidden="true" />
                  <span className="nav-label">Quản lý nhân viên</span>
                  <span className="selected" />
                </a>
              </li>
              {/* Report*/}
              <li className="has-submenu">
                <a href>
                  <i className="fa fa-user-secret" aria-hidden="true" />
                  <span className="nav-label">Quản lý khách hàng</span>
                  <span className="selected" />
                </a>
              </li>
              {/* Dashboard Start */}
              <li className="has-submenu ">
                <a href="#">
                  <i className="fa fa-user-secret" aria-hidden="true" />
                  <span className="nav-label">Quản lý chuyến xe</span>
                  <span className="selected" />
                </a>
              </li>
              {/* Manage Sub-Admin */}
              <li className="has-submenu ">
                <a href="#">
                  <i className="fa fa-user-secret" aria-hidden="true" />
                  <span className="nav-label">Quản lý tuyến</span>
                  <span className="selected" />
                </a>
              </li>
              {/* Manage Sub-Admin */}
              <li className="has-submenu ">
                <a href="#">
                  <i className="fa fa-user-secret" aria-hidden="true" />
                  <span className="nav-label">Quản lý xe</span>
                  <span className="selected" />
                </a>
              </li>
              {/* Manage Sub-Admin */}
              <li className="has-submenu ">
                <a href="transactions.html">
                  <i className="fa fa-user-secret" aria-hidden="true" />
                  <span className="nav-label">Lịch sử giao dịch</span>
                  <span className="selected" />
                </a>
              </li>
              {/* Report*/}
              <li className="has-submenu" id="languagetab">
                <a href="report.html">
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
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img alt className="img-circle" src="img/user.png" />
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
                    <a href="home.php?pages=profile">
                      <i className="fa fa-user" aria-hidden="true" /> Thông tin
                      tài khoản
                    </a>
                  </li>
                  <li>
                    <a href="home.php?pages=change-password">
                      <i className="fa fa-key" aria-hidden="true" /> Thay đổi
                      mật khẩu
                    </a>
                  </li>
                  <li>
                    <a href="home.php?pages=logout">
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
export default Header;
