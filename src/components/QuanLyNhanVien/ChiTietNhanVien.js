import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
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
class ChiTietUserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBtnUpdateDisable: true,
      file: "",
      imagePreviewUrl: ""
    };
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    let reader = new FileReader();
    let file = files[0];
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    //this.handleImageUpload(files[0]);
  }

  render() {
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
        onHide={() => this.setState({ isBtnUpdateDisable: true })}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">
            <h4>Thông tin chi tiết</h4>
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
                {this.state.isBtnUpdateDisable === false ? (
                  <div
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    {" "}
                    <Dropzone
                      multiple={false}
                      accept="image/*"
                      onDrop={this.onImageDrop.bind(this)}
                    >
                      <p>Kéo ảnh vào đây hoặc bấm vào đây để chọn ảnh</p>
                    </Dropzone>
                    <Button
                      bsStyle="danger"
                      onClick={() => this.setState({ imagePreviewUrl: "" })}
                    >
                      Hủy
                    </Button>
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
                              value={"Chieu"}
                            />
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
                            <ControlLabel />
                            <FormControl
                              disabled={this.state.isBtnUpdateDisable}
                              type="text"
                              value={"25/26/1996"}
                            />
                          </FormGroup>
                        </td>
                      </tr>
                      <tr>
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
                              disabled={this.state.isBtnUpdateDisable}
                              type="text"
                              value={"ChieuBD"}
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
                              value={"Chieu@aaaa@gmail.com"}
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
                              value={"Sơn La"}
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
                              value={"Lai xe "}
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
export default ChiTietUserModal;
