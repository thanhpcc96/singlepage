import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { postLoginAction, postForgotAction } from "./action";
import { connect } from "react-redux";

// @connect(
//   state => ({
//     isLoading: state.user.isLoading,
//     error: state.user.error
//   }),
//   {
//     postLoginAction
//   }
// )
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isVisible: false,
      errorMesage: "",
      error: false,
      isShowForgot: false,
      emailForgot: "",
      errorForgot: false
    };
    this._setEmailValue = this._setEmailValue.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._checkVisiableButton = this._checkVisiableButton.bind(this);
  }
  _validateEmail = value => {
    const chuan = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return chuan.test(value);
  };
  _setEmailValue = value => {
    this.setState({
      email: value
    });
    this._checkVisiableButton();
  };
  _setEmailForgotValue = value => {
    this.setState({
      emailForgot: value
    });
  };
  _setPasswordValue = value => {
    this.setState({
      password: value
    });
    this._checkVisiableButton();
  };
  _checkVisiableButton() {
    if (this.state.email.length > 1) {
      this.setState({
        isVisible: true
      });
    }
  }
  _handleSubmit(event) {
    if (this._validateEmail(this.state.email)) {
      this.props.postLoginAction(this.state.email, this.state.password);
      //alert("tien hanh login");
    } else {
      this.setState({
        error: true,
        errorMesage: " Email khong hop le"
      });
    }
    event.preventDefault();
  }
  _SubmitForgot(event) {
    if (this._validateEmail(this.state.emailForgot)) {
      this.props.postForgotAction(this.state.emailForgot);
    } else {
      this.setState({
        errorForgot: true,
        errorMesage: "Email khong hop le"
      });
    }
    event.preventDefault();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({
        error: true,
        errorMesage: "Dang nhap that bai"
      });
    }
    if (nextProps.errorforgot) {
      this.setState({
        errorForgot: true,
        errorMesage: "email khong ton tai!"
      });
    }
  }
  render() {
    console.log("====================================");
    console.log(this.props);
    console.log("====================================");
    if(this.props.user.isLogin===true){
      return <Redirect to="/dashboard" />
    }
    return (
      <div>
        <section className="container-fluid main_header">
          <div className="lft">
            <Link to="/">Trang chủ</Link>
          </div>
        </section>
        <div className="loginmain">
          <ul className="tabs">
            <li
              className="tab-link col-md-4 col-sm-4- col-xs-4 current"
              data-tab="tab-1"
            >
              Tài Khoản quản lý
            </li>
            <div className="clear" />
          </ul>
          <div id="tab-1" className="tab-content current">
            {this.state.isShowForgot === false ? (
              <form
                className="form-horizontal m-t-20"
                onSubmit={this._handleSubmit}
              >
                <div className="form-group ">
                  <div className="col-xs-12">
                    <input
                      className="form-control form-control-solid placeholder-no-fix"
                      type="text"
                      placeholder="Email"
                      onChange={event =>
                        this._setEmailValue(event.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="form-group ">
                  <div className="col-xs-12">
                    <input
                      className="form-control form-control-solid placeholder-no-fix"
                      type="password"
                      placeholder="Password"
                      onChange={event =>
                        this._setPasswordValue(event.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="form-group text-right">
                  <div className="col-xs-12">
                    {this.state.error && (
                      <label
                        className="label label-danger"
                        style={{ marginRight: 20, padding: 5 }}
                      >
                        {this.state.errorMesage}
                      </label>
                    )}
                    <button
                      className="login"
                      type="submit"
                      disabled={!this.state.isVisible}
                    >
                      Đăng nhập
                    </button>
                    &nbsp;
                    <button
                      className="login"
                      onClick={() =>
                        this.setState({
                          isShowForgot: true
                        })
                      }
                    >
                      Quên mật khẩu
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <form
                className="form-horizontal m-t-20"
                onSubmit={this._SubmitForgot}
              >
                <div className="form-group ">
                  <div className="col-xs-12">
                    <input
                      className="form-control form-control-solid placeholder-no-fix"
                      type="text"
                      placeholder="Email"
                      onChange={event =>
                        this._setEmailForgotValue(event.target.value)
                      }
                    />
                    {this.state.errorForgot === true ? (
                      <div className="col-xs-12">
                        <label
                          className="label label-danger"
                          style={{ marginRight: 20, padding: 5 }}
                        >
                          {this.state.errorMesage}
                        </label>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="form-group text-right">
                  <div className="col-xs-12">
                    <button
                      className="login"
                      onClick={() =>
                        this.setState({
                          isShowForgot: false
                        })
                      }
                    >
                      Đăng nhập
                    </button>&nbsp;
                    <button className="login" type="submit">
                      Khôi phục mật khẩu
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
        {/* end login*/}
      </div>
    );
  }
}
export default connect(
  state => ({
    error: state.user.error,
    user: state.user
  }),
  {
    postLoginAction,
    postForgotAction
  }
)(Login);
