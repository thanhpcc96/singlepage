import React, { Component } from "react";
import FormUser from "./components/FormNhanVien";
import { DateTimePicker, DropdownList } from "react-widgets";
import momentLocalizer from "react-widgets-moment";
import { connect } from "react-redux";
import moment from "../../i18n/timeZone";
import Dropzone from "react-dropzone";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button,
  Alert
} from "react-bootstrap";
import { postCreateUser, getListUserAction } from "./action";

moment.locale("vi");
momentLocalizer();

class ThemNV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      isFullnameError: false,
      email: "",
      isEmailError: false,
      username: "",
      isUsernameError: false,
      passport: "",
      isPassportError: false,
      phone: "",
      isPhoneError: false,
      address: "",
      password: "",
      isPasswordError: false,
      role: 2,
      dateofbirth: null,
      gender: null,
      isDisableButton: true,
      isShowAlert: false,
      isErrorCreate: false,
      errorMessage: "",
      
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('================aaaaaaa====================');
    console.log(event);
    console.log('====================================');
    const {
      email,
      fullname,
      username,
      passport,
      phone,
      address,
      password,
      isFullnameError,
      isEmailError,
      isPassportError,
      isPhoneError,
      isPasswordError,
      role,
      dateofbirth,
      gender,
      isUsernameError
    } = this.state;
    if (
      isFullnameError === false &&
      isEmailError === false &&
      isPassportError === false &&
      isPhoneError === false &&
      isPasswordError === false &&
      this.state.dateofbirth !== null &&
      this.state.gender !== null
    ) {
      this.props.postCreateUser({
        email,
        fullname,
        address,
        passport,
        phone,
        password,
        role,
        dateofbirth,
        gender,
        username
      });
    }
    /**createUser: ["email", 'fullname','lastname','address','passport','phone','gender','dateofbirth'], */
  }
  handleAlertDismiss(){ this.setState({ isErrorCreate: false})}
  componentWillReceiveProps(nextProps) {
    /**
     * 
      isLoadingCreate: false,
      usernew: null,
      errorcreate: null
     */
    if (nextProps.manageruser.isLoadingCreate === true) {
      this.setState({
        isDisableButton: true
      });
    } else {
      this.setState({
        isDisableButton: false
      });
    }
    if (nextProps.manageruser.usernew !== null) {
      this.props.history.goBack();
    }
    if (nextProps.manageruser.errorcreate !== null) {
      this.setState({
        isErrorCreate: true,
        errorMessage: "Tạo tài khoản nhân viên thất bại!"
      });
    } else {
      this.setState({
        isErrorCreate: false,
        errorMessage: ""
      });
    }
  }
  _checkValidateEnableButton() {
    const {
      isFullnameError,
      isEmailError,
      isPassportError,
      isPhoneError,
      isPasswordError,
      isUsernameError
    } = this.state;
    if (
      isFullnameError === false &&
      isEmailError === false &&
      isPassportError === false &&
      isPhoneError === false &&
      isPasswordError === false &&
      this.state.dateofbirth !== null &&
      this.state.gender !== null
    ) {
      this.setState({
        isDisableButton: false
      });
    } else {
      this.setState({
        isDisableButton: true
      });
    }
  }
  render() {
    console.log("====================================");
    console.log(this.state);
    console.log("====================================");
    return (
      <section className="content">
        <div className="wraper container-fluid">
          <div className="page-title">
            <h3 className="title">Thêm nhân viên</h3>
            <span className="tp_rht">
              <button
                onClick={() => this.props.history.goBack()}
                data-toggle="tooltip"
                className="btn btn-default"
                data-original-title="Back"
              >
                <i className="fa fa-reply" />
              </button>
            </span>
          </div>{" "}
          {/*end pagetitle */}
          <div className="row">
            <div className="col-sm-12">
              <div className="panel panel-default">
                <div className="panel-body">
                  {this.state.isErrorCreate === true ? (
                    <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss.bind(this)}>
                      <h4>Xuất hiện Lỗi</h4>
                      <p>
                        Xuất hiện lỗi trong quá trình thực hiện hành động tạo
                        nhân viên. Có thể nhân viên này đã tồn tại trên hệ
                        thống, hoặc thông tin nhân viên đã được sử dụng bởi nhân
                        viên khác
                      </p>
                    </Alert>
                  ) : (
                    undefined
                  )}
                  <div className=" form">
                    <form
                      className="cmxform form-horizontal tasi-form"
                      onSubmit={this.handleSubmit.bind(this)}
                    >
                      <FormGroup
                        controlId="formValidationNull"
                        validationState={
                          this.state.isFullnameError === true ? "warning" : null
                        }
                        bsClass="form-group"
                      >
                        <ControlLabel bsClass="control-label col-lg-2">
                          Họ Tên
                        </ControlLabel>
                        <div className="col-lg-10">
                          <FormControl
                            bsClass="form-control"
                            type="text"
                            placeholder="Nhập họ tên"
                            onChange={this._inputFullname.bind(this)}
                          />
                          <FormControl.Feedback />
                        </div>
                      </FormGroup>
                      <FormGroup
                        controlId="formValidationNull"
                        validationState={null}
                        bsClass="form-group"
                      >
                        <ControlLabel bsClass="control-label col-lg-2">
                          Ngày sinh
                        </ControlLabel>
                        <div className="col-lg-10">
                          <DateTimePicker
                            className="form-control"
                            placeholder={"Nhấn để chọn Năm (bắt buộc)"}
                            defaultValue={new Date("1990-01-01")}
                            max={new Date("1998/12/30")}
                            time={false}
                            onSelect={data =>
                              this.setState({ dateofbirth: data })
                            }
                          />
                        </div>
                      </FormGroup>
                      <FormGroup
                        controlId="formValidationNull"
                        validationState={null}
                        bsClass="form-group"
                      >
                        <ControlLabel bsClass="control-label col-lg-2">
                          Giới tính
                        </ControlLabel>
                        <div className="col-lg-10">
                          <DropdownList
                            className="form-control"
                            data={gioitinh}
                            valueField={"id"}
                            textField={"value"}
                            placeholder={"nhấn để chọn giới tính(bắt buộc"}
                            onSelect={data =>
                              this.setState({ gender: data.id })
                            }
                          />
                        </div>
                      </FormGroup>
                      <FormGroup
                        controlId="formValidationNull"
                        validationState={
                          this.state.isEmailError === true ? "error" : null
                        }
                        bsClass="form-group"
                      >
                        <ControlLabel bsClass="control-label col-lg-2">
                          Email
                        </ControlLabel>
                        <div className="col-lg-10">
                          <FormControl
                            bsClass="form-control"
                            type="text"
                            placeholder="Nhập email"
                            onChange={this._inputEmail.bind(this)}
                          />
                          {this.state.isEmailError === true ? (
                            <HelpBlock>Email không hợp lệ</HelpBlock>
                          ) : (
                            undefined
                          )}
                          <FormControl.Feedback />
                        </div>
                      </FormGroup>
                      <FormGroup
                        controlId="formValidationNull"
                        validationState={null}
                        bsClass="form-group"
                      >
                        <ControlLabel bsClass="control-label col-lg-2">
                          Username
                        </ControlLabel>
                        <div className="col-lg-10">
                          <FormControl
                            bsClass="form-control"
                            type="text"
                            placeholder="Nhập username"
                            onChange={this._inputUsername.bind(this)}
                          />
                        </div>
                      </FormGroup>
                      <FormGroup
                        controlId="formValidationNull"
                        validationState={
                          this.state.isPassportError === true ? "error" : null
                        }
                        bsClass="form-group"
                      >
                        <ControlLabel bsClass="control-label col-lg-2">
                          Số chứng minh nhân dân
                        </ControlLabel>
                        <div className="col-lg-10">
                          <FormControl
                            bsClass="form-control"
                            type="text"
                            placeholder="Nhập số chứng minh nhân dân"
                            onChange={this._inputPassport.bind(this)}
                          />
                          {this.state.isPassportError === true ? (
                            <HelpBlock>Số chứng minh thư là số</HelpBlock>
                          ) : (
                            undefined
                          )}
                          <FormControl.Feedback />
                        </div>
                      </FormGroup>
                      <FormGroup
                        controlId="formValidationNull"
                        validationState={
                          this.state.isPhoneError === true ? "error" : null
                        }
                        bsClass="form-group"
                      >
                        <ControlLabel bsClass="control-label col-lg-2">
                          Số điện thoại
                        </ControlLabel>
                        <div className="col-lg-10">
                          <FormControl
                            bsClass="form-control"
                            type="text"
                            placeholder="Nhập số điện thoại"
                            onChange={this._inputPhone.bind(this)}
                          />
                          {this.state.isPhoneError === true ? (
                            <HelpBlock>Số điện thoại không hợp lệ</HelpBlock>
                          ) : (
                            undefined
                          )}
                          <FormControl.Feedback />
                        </div>
                      </FormGroup>
                      <FormGroup
                        controlId="formValidationNull"
                        validationState={null}
                        bsClass="form-group"
                      >
                        <ControlLabel bsClass="control-label col-lg-2">
                          Địa chỉ
                        </ControlLabel>
                        <div className="col-lg-10">
                          <FormControl
                            bsClass="form-control"
                            type="text"
                            placeholder="Nhập địa chỉ"
                            onChange={this._inputAddress.bind(this)}
                          />
                        </div>
                      </FormGroup>
                      <FormGroup
                        controlId="formValidationNull"
                        validationState={
                          this.state.isPasswordError === true ? "error" : null
                        }
                        bsClass="form-group"
                      >
                        <ControlLabel bsClass="control-label col-lg-2">
                          Mật khẩu
                        </ControlLabel>
                        <div className="col-lg-10">
                          <FormControl
                            bsClass="form-control"
                            type="password"
                            placeholder="Nhập Mật khẩu"
                            onChange={this._inputPassword.bind(this)}
                          />
                          {this.state.isPasswordError === true ? (
                            <HelpBlock>Mật khẩu phải dài hơn 6 ký tự</HelpBlock>
                          ) : (
                            undefined
                          )}
                          <FormControl.Feedback />
                        </div>
                      </FormGroup>
                      <FormGroup
                        controlId="formValidationNull"
                        validationState={null}
                        bsClass="form-group"
                      >
                        <ControlLabel bsClass="control-label col-lg-2">
                          Chức Vụ
                        </ControlLabel>
                        <div className="col-lg-10">
                          <DropdownList
                            className="form-control"
                            data={chucvu}
                            valueField="id"
                            textField="value"
                            defaultValue={2}
                            onSelect={data => this.setState({ role: data.id })}
                          />
                        </div>
                      </FormGroup>

                      <div className="form-group">
                        <div className="col-lg-offset-2 col-lg-10">
                          <Button
                            type="submit"
                            disabled={this.state.isDisableButton}
                            bsClass=" btn btn-info col-md-4 col-sm-6 col-xs-12"
                          >
                            {" "}
                            Tạo nhân viên{" "}
                          </Button>
                          <Button
                            type="reset"
                            bsClass=" btn col-md-4 col-sm-6 col-xs-12"
                          >
                            {" "}
                            Hủy bỏ{" "}
                          </Button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  _inputFullname(event) {
    if (event.target.value.toString().length > 3) {
      this.setState({
        fullname: event.target.value,
        isFullnameError: false
      });
    } else {
      this.setState({
        isFullnameError: true,
        fullname: ""
      });
    }
    this._checkValidateEnableButton();
  }
  _inputEmail(event) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(event.target.value) === true) {
      this.setState({
        email: event.target.value,
        isEmailError: false
      });
    } else {
      this.setState({
        email: "",
        isEmailError: true
      });
    }
    this._checkValidateEnableButton();
  }
  _inputUsername(event) {
    if (event.target.value === "") {
      this.setState({
        isUsernameError: true,
        username: ""
      });
    } else {
      this.setState({
        isUsernameError: false,
        username: event.target.value
      });
    }
    this._checkValidateEnableButton();
  }
  _inputPassport(event) {
    const chuan = /^[0-9-+]+$/;
    if (chuan.test(event.target.value)) {
      this.setState({
        passport: event.target.value,
        isPassportError: false
      });
    } else {
      this.setState({
        passport: "",
        isPassportError: true
      });
    }
    this._checkValidateEnableButton();
  }
  _inputPhone(event) {
    const chuan = /^[0-9-+]+$/;
    if (chuan.test(event.target.value)) {
      this.setState({
        phone: event.target.value,
        isPhoneError: false
      });
    } else {
      this.setState({
        phone: "",
        isPhoneError: true
      });
    }
    this._checkValidateEnableButton();
  }
  _inputAddress(event) {
    this.setState({
      address: event.target.value
    });
    this._checkValidateEnableButton();
  }
  _inputPassword(event) {
    if (event.target.value.toString().length >= 6) {
      this.setState({
        password: event.target.value,
        isPasswordError: false
      });
    } else {
      this.setState({
        password: "",
        isPasswordError: true
      });
    }
    this._checkValidateEnableButton();
  }
}
export default connect(
  state => ({
    manageruser: state.manageruser
  }),
  {
    postCreateUser,
    getListUserAction
  }
)(ThemNV);

const chucvu = [
  //{ id: 1, value:"QUẢN LÝ" },
  { id: 2, value: "Lái xe" },
  { id: 3, value: "Phụ xe" },
  { id: 4, value: "Kiểm soát viên" }
];
const gioitinh = [
  { id: "NAM", value: "Nam" },
  { id: "NU", value: "Nữ" },
  { id: "KHAC", value: "Khác" }
];
