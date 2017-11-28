import React, { Component } from "react";
import { Table, ProgressBar, Well, Label } from "react-bootstrap";

class Chitiettuyen extends Component {
  render() {
    return (
      <section className="content">
        <div className="wraper container-fluid">
          <div className="page-title">
            <h3 className="title">
              Chi tiết tuyến xe<span style={{ color: "red", fontSize: 15 }}>
                <span />
              </span>
            </h3>
            <span className="tp_rht">
              <button
                onClick={() => this.props.history.goBack()}
                data-toggle="tooltip"
                title
                className="btn btn-default"
                data-original-title="Back"
              >
                <i className="fa fa-reply" />
              </button>
            </span>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 mobtbl">
                      <div
                        id="datatable_wrapper"
                        className="dataTables_wrapper form-inline dt-bootstrap no-footer"
                      >
                        <div className="row">
                          <div className="col-sm-6">
                            <div
                              className="dataTables_length"
                              id="datatable_length"
                            />
                          </div>
                          <div className="col-sm-6">
                            <div
                              id="datatable_filter"
                              className="dataTables_filter"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <Table bordered hover responsive>
                              <thead>
                                <tr>
                                  <th>Nội dung</th>
                                  <th>Kết quả</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Tên chuyến</td>
                                  <td />
                                </tr>
                                <tr>
                                  <td>Thời gian bắt đầu</td>
                                  <td>Jacob</td>
                                </tr>
                                <tr>
                                  <td>Số chỗ ngồi</td>
                                  <td />
                                </tr>
                                <tr>
                                  <td>Đã đặt</td>
                                  <td />
                                </tr>
                                <tr>
                                  <td>Tỉ lệ đăng ký</td>
                                  <td>
                                    <ProgressBar
                                      active
                                      now={50}
                                      striped
                                      bsStyle="info"
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td>Chiều di chuyển</td>
                                  <td>DI</td>
                                </tr>
                                <tr>
                                  <td>Thanh tra</td>
                                  <td />
                                </tr>
                                <tr>
                                  <td>Tình trạng</td>
                                  <td />
                                </tr>
                                <tr>
                                  <td>Vé trong chuyến</td>
                                  <td />
                                </tr>
                                <tr>
                                  <td colSpan="2">
                                    <div>
                                      <h4>
                                        <Label bsStyle="info">
                                          Nguoi dung A
                                        </Label>
                                      </h4>
                                      <p style={{ marginLeft: 20 }}>
                                        Nguoi dung a{" "}
                                      </p>
                                    </div>
                                    <div>
                                      <h4>
                                        <Label bsStyle="info">
                                          Nguoi dung A
                                        </Label>
                                      </h4>
                                      <p style={{ marginLeft: 20 }}>
                                        Nguoi dung a{" "}
                                      </p>
                                    </div>
                                    <div>
                                      <h4>
                                        <Label bsStyle="info">
                                          Nguoi dung A
                                        </Label>
                                      </h4>
                                      <p style={{ marginLeft: 20 }}>
                                        Nguoi dung a{" "}
                                      </p>
                                    </div>
                                    <div>
                                      <h4>
                                        <Label bsStyle="info">
                                          Nguoi dung A
                                        </Label>
                                      </h4>
                                      <p style={{ marginLeft: 20 }}>
                                        Nguoi dung a{" "}
                                      </p>
                                    </div>
                                    <div>
                                      <h4>
                                        <Label bsStyle="info">
                                          Nguoi dung A
                                        </Label>
                                      </h4>
                                      <p style={{ marginLeft: 20 }}>
                                        Nguoi dung a{" "}
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End row */}
        </div>
      </section>
    );
  }
}
export default Chitiettuyen;
