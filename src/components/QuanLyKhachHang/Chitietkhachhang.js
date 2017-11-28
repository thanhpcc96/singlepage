import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { getDetailKhachhang } from "./action";
import { connect } from "react-redux";

class Chitietkhachhang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.props.getDetailKhachhang(this.props.location.state.idClient);
  }
  _mapingData(data) {
    const khachhang = {
      _id: data._id,
      ten: data.info.fullname,
      email: data.local.email,
      password: data.local.password,
      phone: data.phone,
      sodu: data.acount_payment.balance,
      trangthai: data.status
      //   phone: khachhang.phone,
      //   status: khachhang.status,
      //   email: khachhang.local.email,
      //   photo: khachhang.local.photo,
      //   fullname: khachhang.info.fullname,
      //   balance: khachhang.acount_payment.balance
      // };
      // this.setState({
      //   data: loc
      // });
    };
    this.setState({
      data: khachhang
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.managerclient.userdetail !== null) {
      this._mapingData(nextProps.managerclient.userdetail);
    }
  }
  render() {
    console.log("============================================");
    console.log("========== tenlog               ===========", this.state);
    console.log("============================================");
    return (
      <section className="content">
        <div className="wraper container-fluid">
          <div className="page-title">
            <h3 className="title">
              Chi tiết khách hàng<span style={{ color: "red", fontSize: 15 }}>
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
                                  <th>Thông tin</th>
                                  <th>Chi tiết</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Họ tên</td>
                                  <td>
                                    {this.state.data
                                      ? this.state.data.ten
                                      : "Vui lòng chọn khách hàng"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Email</td>
                                  <td>
                                    {this.state.data
                                      ? this.state.data.email
                                      : "Vui lòng chọn khách hàng"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Số điện thoại</td>
                                  <td>
                                    {this.state.data
                                      ? this.state.data.phone
                                      : "Vui lòng chọn khách hàng"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Số dư</td>
                                  <td>
                                    {this.state.data
                                      ? this.state.data.sodu
                                      : "Vui lòng chọn khách hàng"}
                                  </td>
                                </tr>

                                <tr>
                                  <td>Trạng thái</td>
                                  <td>
                                    {this.state.data
                                      ? this.state.data.trangthai
                                      : "Vui lòng chọn khách hàng"}
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
export default connect(
  state => ({
    managerclient: state.managerclient
  }),
  {
    getDetailKhachhang
  }
)(Chitietkhachhang);
