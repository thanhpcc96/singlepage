import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import Datepicker from "react-datepicker";
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
import { getDetailUserAction, postUploadUserAction } from "./action";
class ChiTietUserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBtnUpdateDisable: true,
      file: "",
      imagePreviewUrl: "",
      haveFile: false,
      isUploading: false
    };
  }

  onImageDrop(files) {
    let file = files[0];
    console.log('====================================');
    console.log(file);
    console.log('====================================');
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
    if (this.props.data !== undefined) {
      this.setState({
        imagePreviewUrl: this.props.data.photo
      });
    } else {
      this.setState({
        imagePreviewUrl: ""
      });
    }
    //this.props.getDetailUserAction(this.props.data._id);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.manageruser.uploaddata !== null) {
      let reader = new FileReader();
      reader.readAsDataURL(this.state.file);
      reader.onloadend = () => {
        this.setState({
          isUploading: false,
          imagePreviewUrl: reader.result
        });
      };
    }
    if (nextProps.manageruser.uploaderror !== null) {
      this.setState({
        isUploading: false
      });
      alert("Upload that bai");
    }
  }
  render() {
    console.log("===============data==modal===================");
    console.log(this.props.data);
    console.log("====================================");
    // _id: user._id,
    //     email: user.email,
    //     username: user.username,
    //     status: user.status,
    //     role: user.role,
    //     fullname: user.info.fullname,
    //     passport: user.info.passportNumber,
    //     address: user.info.address,
    //     phone: user.info.phoneNumber,
    //     gender: user.info.gender,
    //     chucvu:
    //       user.role === 2
    //         ? "Lai xe"
    //         : user.role === 3 ? "Phu xe" : "Kiem soat vien"
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
        restoreFocus
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
                <form>
                  <Table striped bordered condensed hover>
                    <tbody>
                      <tr>
                        <td>Họ tên</td>
                        <td>
                          <FormGroup
                            controlId="formValidationSuccess1"
                            validationState="null"
                          >
                            <ControlLabel />
                            <FormControl
                              disabled={this.state.isBtnUpdateDisable}
                              type="text"
                              value={
                                this.props.data
                                  ? this.props.data.fullname
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
                            validationState="null"
                          >
                            <ControlLabel />
                            <FormControl
                              disabled={this.state.isBtnUpdateDisable}
                              type="text"
                              value={
                                this.props.data
                                  ? this.props.data.passport
                                  : "Chua chon doi tuong hien thi"
                              }
                            />
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
                            validationState="null"
                          >
                            <ControlLabel />
                            <FormControl
                              disabled={true}
                              type="text"
                              value={
                                this.props.data
                                  ? this.props.data.phone
                                  : "Chua chon doi tuong hien thi"
                              }
                            />
                          </FormGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>
                          {" "}
                          <FormGroup
                            controlId="formValidationSuccess1"
                            validationState="null"
                          >
                            <ControlLabel />
                            <FormControl
                              type="email"
                              value={
                                this.props.data
                                  ? this.props.data.email
                                  : "Chua chon doi tuong hien thi"
                              }
                              disabled={this.state.isBtnUpdateDisable}
                            />
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
                              value={
                                this.props.data
                                  ? this.props.data.address
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
                            <FormControl
                              type="text"
                              value={
                                this.props.data
                                  ? this.props.data.chucvu
                                  : "Chua chon doi tuong hien thi"
                              }
                              disabled={this.state.isBtnUpdateDisable}
                            />
                          </FormGroup>
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
            <div>
              <Button
                bsStyle="danger"
                onClick={() => this.setState({ isBtnUpdateDisable: true })}
              >
                Hủy{" "}
              </Button>
              <Button bsStyle="info" onClick={this.props.onHide}>
                Lưu
              </Button>
            </div>
          )}
        </Modal.Footer>
      </Modal>
    );
  }
}
export default connect(
  state => ({
    manageruser: state.manageruser
  }),
  {
    postupload: postUploadUserAction
  }
)(ChiTietUserModal);
