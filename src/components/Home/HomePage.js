import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div id="wrapper">
          <header className="header">
            <div className="navigation-row">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-3">
                    <strong className="logo">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/assets/img/haiaulogo.png"
                        }
                        width={143}
                        height={50}
                      />
                    </strong>
                  </div>
                  <div className="col-md-9 col-sm-9 col-xs-9">
                    <div className="topbar">
                      <ul className="top-listed">
                        <li className="hidden-xs" />
                        <li className>
                          <span className="top_bcmdri_btn">
                            <Link to="/tracking">
                              <button>Login</button>
                            </Link>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <section>
            <div className="top-banner">
              <div className>
                <div
                  className="banner"
                  style={{
                    backgroundImage:
                      `url(${process.env.PUBLIC_URL}/assets/img/banner_custom.jpg)`
                  }}
                >
                  <center className="bnr_top">
                    <h1 className="bnr_title">TỰ DO LỰA CHỌN</h1>
                    <p className="bnr_desc">
                      Hải Âu mang đến những dịch vụ vận chuyển tối ưu cho mọi
                      nhu cầu di chuyển của bạn
                    </p>
                  </center>
                  <div className="overlay" />
                  <div className="overlay-left" />
                  <div className="container bnr_outer" />
                </div>
              </div>
            </div>
          </section>
          <div className="clear" />
          <section>
            <div className="category-container">
              <div className="section-container ola-fleet max-width">
                <h2 className="section-heading">
                  An toàn, thuận tiện và thoải mái
                </h2>
                <label className="section-sub-heading">
                  Hải Âu đồng hành với thế hệ những người tự tin làm chủ cuộc
                  sống, bắt đầu từ cách di chuyển!
                </label>
                <div className="ola-fleet-options" id="awesome-fleet">
                  <div className="slider-nav slick-initialized slick-slider">
                    <div aria-live="polite" className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{
                          opacity: 1,
                          width: 296,
                          transform: "translate3d(0px, 0px, 0px)"
                        }}
                        role="listbox"
                      >
                        <div
                          className="indiv-fleet slick-slide slick-current slick-active"
                          data-tab={2}
                          style={{ width: 123 }}
                          data-slick-index={0}
                          aria-hidden="false"
                          tabIndex={-1}
                          role="option"
                          aria-describedby="slick-slide10"
                        >
                          <div className="img-holder">
                            <img
                              src={process.env.PUBLIC_URL+'/assets/img/xe khach.svg'}
                              className="ola-fleet-icon-active"
                            />
                          </div>
                          <label>XE KHÁCH</label>
                          <div className="triangle-up">
                            <img src="http://apporiotaxi.com/webstatic/img/triangle-up-active.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* slick */}
              <div className="fleet-tab-content">
                <div className="max-width fleet-tab-wrapper">
                  <div className="fleet-indiv-list slider-for slick-initialized slick-slider">
                    <div aria-live="polite" className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{ opacity: 1, width: 2400 }}
                        role="listbox"
                      >
                        <div
                          className="single-content slick-slide slick-current slick-active"
                          id={2}
                          data-slick-index={0}
                          aria-hidden="false"
                          style={{
                            width: 1200,
                            position: "relative",
                            left: 0,
                            top: 0,
                            zIndex: 999,
                            opacity: 1
                          }}
                          tabIndex={-1}
                          role="option"
                          aria-describedby="slick-slide00"
                        >
                          <div className="ft-comm-content">
                            <div className="wd-60 left-content">
                              <img src={process.env.PUBLIC_URL+'/assets/img/haiau.jpg'} className="position-1" />
                            </div>
                            <div className="wd-40">
                              <div className="right-content">
                                <h4 className="heading">Hải Âu</h4>
                                <div className="sub-title">
                                  {" "}
                                  Hiện đại và đáng tin cậy{" "}
                                </div>
                                <div className="info">
                                  Luôn bảo vệ quyền lợi hành khách. Loại bỏ
                                  những rắc rối của chờ đợi và gian lận về giá
                                  cả. Một cách thuận tiện khi di chuyển đường
                                  dài.{" "}
                                </div>
                                <div className="feature-img">
                                  <div
                                    className="img-holder"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Eco-Friendly Ride"
                                  >
                                    <img
                                      className="option-img"
                                      src="http://apporiotaxi.com/webstatic/img/car-features/eco-friendly.svg"
                                    />
                                  </div>
                                  <div
                                    className="img-holder"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Value for Money"
                                  >
                                    <img
                                      className="option-img"
                                      src="http://apporiotaxi.com/webstatic/img/car-features/value-money.svg"
                                    />
                                  </div>
                                  <div
                                    className="img-holder"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Cashless Ride"
                                  >
                                    <img
                                      className="option-img"
                                      src="http://apporiotaxi.com/webstatic/img/car-features/cashless.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="clearfix" />
                          </div>
                        </div>
                        <div
                          className="single-content slick-slide"
                          id={4}
                          data-slick-index={1}
                          aria-hidden="true"
                          style={{
                            width: 1200,
                            position: "relative",
                            left: "-1200px",
                            top: 0,
                            zIndex: 998,
                            opacity: 0
                          }}
                          tabIndex={-1}
                          role="option"
                          aria-describedby="slick-slide01"
                        >
                          <div className="ft-comm-content">
                            <div className="wd-60 left-content">
                              <img
                                src="http://apporiotaxi.com/webstatic/img/fleet-image/mini.png"
                                className="position-1"
                              />
                            </div>
                            <div className="wd-40">
                              <div className="right-content">
                                <h4 className="heading">Mini</h4>
                                <div className="sub-title">
                                  {" "}
                                  Get an Mini at your doorstep{" "}
                                </div>
                                <div className="info">
                                  The all too familiar Mini, minus the hassle of
                                  waiting and haggling for price. A convenient
                                  way to travel everyday.{" "}
                                </div>
                                <div className="feature-img">
                                  <div
                                    className="img-holder"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Eco-Friendly Ride"
                                  >
                                    <img
                                      className="option-img"
                                      src="http://apporiotaxi.com/webstatic/img/car-features/eco-friendly.svg"
                                    />
                                  </div>
                                  <div
                                    className="img-holder"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Value for Money"
                                  >
                                    <img
                                      className="option-img"
                                      src="http://apporiotaxi.com/webstatic/img/car-features/value-money.svg"
                                    />
                                  </div>
                                  <div
                                    className="img-holder"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Cashless Ride"
                                  >
                                    <img
                                      className="option-img"
                                      src="http://apporiotaxi.com/webstatic/img/car-features/cashless.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="clearfix" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="prev-btn slick-arrow slick-disabled"
                    aria-disabled="true"
                    style={{}}
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    className="next-btn slick-arrow"
                    style={{}}
                    aria-disabled="false"
                  >
                    Next
                  </button>
                </div>
              </div>
              {/* End slick */}
            </div>
          </section>
          <section>
            <div className="section-container why-ola max-width">
              <h2 className="section-heading">
                Tại sao nên chọn dịch vụ của công ty Hải Âu
              </h2>
              <label className="section-sub-heading"> Đặt vé nhanh chóng</label>
              <div className="item-list-wrapper">
                <a className="indiv-item-list left col-md-6">
                  <div className="why_img">
                    <img src="http://apporiotaxi.com/webstatic/img/ola-article/why-ola-2.jpg" />
                  </div>
                  <div className="why_desc">
                    <h4 className="why_heading"> Nhanh gọn,tiện lợi</h4>
                    <div className="why_desc_p">
                      {" "}
                      Nhanh gọn,tiện lợi. Chỉ cần sử dụng ứng dụng trên điện
                      thoại là quý khách có thể đặt vé cho mình
                    </div>
                  </div>
                  <div className="clearfix" />
                </a>
                <a className="indiv-item-list left col-md-6">
                  <div className="why_img">
                    <img src="http://apporiotaxi.com/webstatic/img/ola-article/why-ola-3.jpg" />
                  </div>
                  <div className="why_desc">
                    <h4 className="why_heading">Chuyến đi an toàn </h4>
                    <div className="why_desc_p">
                      {" "}
                      Công ty cam kết không có tình trạng quá tải số người trên
                      xe để quý khách có một chuyến đi an toàn và thoải mái.
                    </div>
                  </div>
                  <div className="clearfix" />
                </a>
                <a className="indiv-item-list left col-md-6">
                  <div className="why_img">
                    <img src="http://apporiotaxi.com/webstatic/img/ola-article/why-ola-2.jpg" />
                  </div>
                  <div className="why_desc">
                    <h4 className="why_heading"> Lựa chọn kinh tế </h4>
                    <div className="why_desc_p">Giá vé hợp lý. </div>
                  </div>
                  <div className="clearfix" />
                </a>
                <a className="indiv-item-list left col-md-6">
                  <div className="why_img">
                    <img src="http://apporiotaxi.com/webstatic/img/ola-article/why-ola-3.jpg" />
                  </div>
                  <div className="why_desc">
                    <h4 className="why_heading">Đáng tin cậy</h4>
                    <div className="why_desc_p">
                      Luôn bảo vệ quyền lợi hành khách. Loại bỏ những rắc rối
                      của chờ đợi và gian lận về giá cả. Một cách thuận tiện khi
                      di chuyển đường dài.
                    </div>
                  </div>
                  <div className="clearfix" />
                </a>
                <div className="clearfix" />
              </div>
            </div>
          </section>
          <div className="product_footer_taxi">
            <div className="container">
              <div className="col-md-4 product_app">
                <h3 className="apporioh3">Hải Âu App</h3>
                <ul>
                  <li>
                    <a className="btn btn-app-download">
                      <i className="fa fa-apple" />AVAILABLE ON THE<strong>App Store</strong>
                    </a>
                  </li>
                  <li>
                    <a className="btn btn-app-download">
                      <i className="fa fa-play" />ANDROID APP ON<strong>Download App</strong>
                    </a>
                  </li>
                </ul>
                <div className="clear" />
              </div>
              <div className="col-md-4" />
              <div className="col-md-4" />
            </div>
          </div>
        </div>
        <footer className="footer1">
          <section className="bottom-section">
            <div className="container">
              <div className="row">
                <div className="col-md-10">
                  <nav className="footer-nav">
                    <ul>
                      <li>
                        <a>About Us</a>
                      </li>
                      <li>
                        <a>Contact Us</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-md-2">
                  <nav className="footer-nav">
                    <ul>
                      <li>
                        <a>
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-linkedin" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <center>
                    {" "}
                    <p style={{ color: "white" }}> © 2017 Hải Âu</p>
                  </center>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </div>
    );
  }
}
export default HomePage;
