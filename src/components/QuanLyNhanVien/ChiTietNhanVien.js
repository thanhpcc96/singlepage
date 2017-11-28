import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { DateTimePicker, DropdownList } from "react-widgets";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";
import { connect } from "react-redux";
import {
  Modal,
  Button,
  Image,
  Grid,
  Row,
  Col,
  Thumbnail,
  FormGroup,
  ControlLabel,
  HelpBlock,
  Table,
  FormControl
} from "react-bootstrap";
import { updateInfo, postUploadUserAction } from "./action";
class ChiTietUserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBtnUpdateDisable: true,
      file: "",
      imagePreviewUrl: "",
      haveFile: false,
      isUploading: false,
      fullname: undefined,
      isFullnameError: false,
      email: undefined,
      isEmailError: false,
      passport: undefined,
      isPassportError: false,
      phone: undefined,
      isPhoneError: false,
      address: undefined,
      role: 2,
      gender: undefined,
      username: undefined,
      dateofbirth: undefined,
      isDisableButton: true
    };
  }
  _checkValidateEnableButton() {
    const {
      isFullnameError,
      isEmailError,
      isPassportError,
      isPhoneError,
      isPasswordError
    } = this.state;
    if (
      isFullnameError === false &&
      isEmailError === false &&
      isPassportError === false &&
      isPhoneError === false &&
      this.state.dateofbirth !== null
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

  onImageDrop(files) {
    let file = files[0];
    this.setState({
      file: file,
      //imagePreviewUrl: reader.result,
      isUploading: true
    });
    let formdata = new FormData();
    formdata.append("profile", this.state.file);
    formdata.append("id", this.props.data._id);

    this.props.postupload(formdata);
  }

  _handleNoData() {
    if (this.props.data === null) {
      alert("Khong co du lieu de xem thong tin chi tiet");
      this.props.onHide;
      return;
    }
    const {
      fullname,
      email,
      phone,
      address,
      username,
      gender,
      role,
      dateofbirth,
      passport
    } = this.props.data;
    this.setState({
      fullname,
      email,
      phone,
      address,
      username,
      gender,
      role,
      dateofbirth,
      passport
    });

    //this.props.getDetailUserAction(this.props.data._id);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.manageruser.uploaddata !== null) {
      try {
        let reader = new FileReader();
        reader.readAsDataURL(this.state.file);
        reader.onloadend = () => {
          this.setState({
            isUploading: false,
            imagePreviewUrl: reader.result
          });
        };
      } catch (error) {}
    }
    if (nextProps.manageruser.uploaderror !== null) {
      this.setState({
        isUploading: false
      });
      alert("Upload that bai");
    }
    if(nextProps.manageruser.uploaddata!==null){
      alert('Update thanh cong, refesh lai table nhe!')
    }
    if(nextProps.manageruser.updateerror!==null){
      alert('Update that bai')
    }
  }
  _changeFullname(event) {
    this.setState({
      isFullnameError: false,
      fullname: event.target.value
    });
  }
  _changeFullname(event) {
    if (event.target.value.toString().lenght > 3) {
      this.setState({
        isFullnameError: false,
        fullname: event.target.value
      });
    } else {
      this.setState({
        isFullnameError: true,
        fullname: null
      });
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    const {
      fullname,
      email,
      phone,
      address,
      username,
      gender,
      role,
      dateofbirth,
      passport
    } = this.state;
    /**
     * firstname: Joi.string(),
      lastname: Joi.string(),
      address: Joi.string(),
      dateofbirth: Joi.date(),
      phone: Joi.string().regex(/^[0-9-+]+$/),
     */
    this.props.updateInfo({
      iduser: this.props.data._id,
      fullname,
      email,
      phone,
      address,
      username,
      gender,
      role,
      dateofbirth,
      passport
    });
  }
  render() {
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
        restoreFocus
        onShow={() => this._handleNoData()}
        onEnter={() => this._handleNoData()}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">
            Thông tin chi tiết
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Grid>
            <Row>
              <Col xs={6} md={3}>
                <Thumbnail
                  href="#"
                  alt="135x180"
                  src={this.state.imagePreviewUrl}
                />
                {this.state.isBtnUpdateDisable === false &&
                this.state.isUploading === false ? (
                  <div
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    {" "}
                    <Dropzone
                      multiple={false}
                      accept="image/*"
                      onDrop={this.onImageDrop.bind(this)}
                      disablePreview={false}
                    >
                      <p>Kéo ảnh vào đây hoặc bấm vào đây để chọn ảnh</p>
                    </Dropzone>
                  </div>
                ) : (
                  undefined
                )}
              </Col>
              <Col xs={9} md={6}>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <Table striped bordered condensed hover>
                    <tbody>
                      <tr>
                        <td>Họ tên</td>
                        <td>
                          <FormGroup
                            controlId="formValidationSuccess1"
                            validationState={
                              this.state.isFullnameError === true
                                ? "warning"
                                : null
                            }
                          >
                            <FormControl
                              disabled={this.state.isBtnUpdateDisable}
                              onChange={this._changeFullname.bind(this)}
                              type="text"
                              value={
                                this.props.data
                                  ? this.state.fullname
                                  : "Chua chon doi tuong hien thi"
                              }
                            />
                            {this.state.isFullnameError === true ? (
                              <HelpBlock>Tên phải dài 1 tý</HelpBlock>
                            ) : (
                              undefined
                            )}
                            <FormControl.Feedback />
                          </FormGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Ngày sinh</td>
                        <td>
                          <FormGroup
                            controlId="formValidationSuccess1"
                            validationState="null"
                          >
                            <DateTimePicker
                              className="form-control"
                              disabled={this.state.isBtnUpdateDisable}
                              defaultValue={
                                this.props.data
                                  ? new Date("1990-01-01")
                                  : new Date("1990-01-01")
                              }
                              max={new Date("1998/12/30")}
                              time={false}
                              onSelect={data =>
                                this.setState({ dateofbirth: data })
                              }
                            />
                          </FormGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Giới tính</td>
                        <td>
                          <FormGroup
                            controlId="formValidationSuccess1"
                            validationState="null"
                          >
                            <FormControl
                              disabled={true}
                              type="text"
                              value={
                                this.props.data
                                  ? this.state.gender
                                  : "Chua chon doi tuong hien thi"
                              }
                            />
                          </FormGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Số chứng minh nhân dân</td>
                        <td>
                          <FormGroup
                            controlId="formValidationSuccess1"
                            validationState={
                              this.state.isPassportError === true
                                ? "error"
                                : undefined
                            }
                          >
                            <ControlLabel />
                            <FormControl
                              disabled={this.state.isBtnUpdateDisable}
                              type="text"
                              onChange={this._inputPassport.bind(this)}
                              value={
                                this.props.data
                                  ? this.state.passport
                                  : "Chua chon doi tuong hien thi"
                              }
                            />
                            {this.state.isPassportError === true ? (
                              <HelpBlock>
                                Số chứng minh thư phải là số
                              </HelpBlock>
                            ) : (
                              undefined
                            )}
                            <FormControl.Feedback />
                          </FormGroup>
                        </td>
                      </tr>
                      {/*<tr>
                        <td>Giới tính</td>
                        <td>
                          <FormGroup controlId="formControlsSelect">
                            <FormControl
                              componentClass="select"
                              placeholder="select"
                              disabled={this.state.isBtnUpdateDisable}
                            >
                              <option value="NAM">Nam</option>
                              <option value="NU">Nữ</option>
                              <option value="KHAC">Khác</option>
                            </FormControl>
                          </FormGroup>
                        </td>
                      </tr>
                      */}
                      <tr>
                        <td>Username</td>
                        <td>
                          {" "}
                          <FormGroup
                            controlId="formValidationSuccess1"
                            validationState="null"
                          >
                            <ControlLabel />
                            <FormControl
                              disabled={true}
                              type="text"
                              value={
                                this.props.data
                                  ? this.props.data.username
                                  : "Chua chon doi tuong hien thi"
                              }
                            />
                          </FormGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Số điện thoại</td>
                        <td>
                          {" "}
                          <FormGroup
                            controlId="formValidationSuccess1"
                            validationState={
                              this.state.isPhoneError === true ? "error" : null
                            }
                          >
                            <ControlLabel />
                            <FormControl
                              disabled={this.state.isBtnUpdateDisable}
                              type="text"
                              onChange={this._inputPhone.bind(this)}
                              value={
                                this.props.data
                                  ? this.state.phone
                                  : "Chua chon doi tuong hien thi"
                              }
                            />
                            {this.state.isPhoneError === true ? (
                              <HelpBlock>Số điện thoại phải là số</HelpBlock>
                            ) : (
                              undefined
                            )}
                            <FormControl.Feedback />
                          </FormGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>
                          {" "}
                          <FormGroup
                            controlId="formValidationSuccess1"
                            validationState={
                              this.state.isEmailError === true ? "error" : null
                            }
                          >
                            <ControlLabel />
                            <FormControl
                              type="email"
                              onChange={this._inputEmail.bind(this)}
                              value={
                                this.props.data
                                  ? this.state.email
                                  : "Chua chon doi tuong hien thi"
                              }
                              disabled={this.state.isBtnUpdateDisable}
                            />
                            {this.state.isEmailError === true ? (
                              <HelpBlock>Email không đúng định dạng</HelpBlock>
                            ) : (
                              undefined
                            )}
                            <FormControl.Feedback />
                          </FormGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Địa chỉ</td>
                        <td>
                          <FormGroup
                            controlId="formValidationSuccess1"
                            validationState="null"
                          >
                            <ControlLabel />
                            <FormControl
                              type="text"
                              onChange={this._inputAddress.bind(this)}
                              value={
                                this.props.data
                                  ? this.state.address
                                  : "Chua chon doi tuong hien thi"
                              }
                              disabled={this.state.isBtnUpdateDisable}
                            />
                          </FormGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Chức vụ</td>
                        <td>
                          {" "}
                          <FormGroup
                            controlId="formValidationSuccess1"
                            validationState="null"
                          >
                            <ControlLabel />
                            <DropdownList
                              data={chucvu}
                              disabled={this.state.isBtnUpdateDisable}
                              className="form-control"
                              valueField={"id"}
                              textField={"value"}
                              defaultValue={
                                this.props.data ? this.props.data.role : 5
                              }
                              onSelect={value =>
                                this.setState({ role: value.id })
                              }
                              placeholder={"nhấn để chọn giới tính(bắt buộc"}
                            />
                          </FormGroup>
                        </td>
                      </tr>
                      <tr>
                        <td />
                        <td>
                          {this.state.isBtnUpdateDisable === false ? (
                            <div>
                              <Button
                                bsStyle="danger"
                                onClick={() =>
                                  this.setState({ isBtnUpdateDisable: true })
                                }
                              >
                                Hủy{" "}
                              </Button>
                              <Button
                                type="submit"
                                bsStyle="info"
                                disabled={
                                  this.props.manageruser.isLoadingUpdate
                                }
                              >
                                Lưu
                              </Button>
                            </div>
                          ) : (
                            undefined
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </form>
              </Col>
            </Row>
          </Grid>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Đóng</Button>
          {this.state.isBtnUpdateDisable === true ? (
            <Button
              bsStyle="info"
              onClick={() => this.setState({ isBtnUpdateDisable: false })}
            >
              Cập nhật thông tin
            </Button>
          ) : (
            undefined
          )}
        </Modal.Footer>
      </Modal>
    );
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
        email: null,
        isEmailError: true
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
        passport: null
        // isPassportError: true
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
        phone: null,
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
}
export default connect(
  state => ({
    manageruser: state.manageruser
  }),
  {
    postupload: postUploadUserAction,
    updateInfo
  }
)(ChiTietUserModal);

const chucvu = [
  { id: 2, value: "Lái xe" },
  { id: 3, value: "Phụ xe" },
  { id: 4, value: "Kiểm soát viên" }
];
