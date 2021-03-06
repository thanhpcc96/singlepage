import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { getListTuyenInfo } from "./action";
import { connect } from "react-redux";

class Chitiettuyen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.props.getListTuyenInfo(this.props.location.state.idTuyen);
  }
  _mapingData(tuyeninfo) {
    let lotrinh = " ";
    tuyeninfo.routeOfTrip.lotrinh.forEach(lt => {
      lotrinh = lotrinh + lt;
    });
    const tuyen = {
      _id: tuyeninfo._id,
      ten: tuyeninfo.routeOfTrip.from + " " + tuyeninfo.routeOfTrip.to,
      diembatdau: tuyeninfo.routeOfTrip.from,
      diemcuoi: tuyeninfo.routeOfTrip.to,
      lotrinh: lotrinh,
      thoigianvanchuyen: tuyeninfo.thoigianvanchuyen,
      vitriChotKT: tuyeninfo.vitriChotKT,
      xetronglotrinh: tuyeninfo.xetronglotrinh.length
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
      data: tuyen
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.managertuyen.tuyeninfo !== null) {
      this._mapingData(nextProps.managertuyen.tuyeninfo);
    }
  }
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
                                  <td>
                                    {this.state.data
                                      ? this.state.data.ten
                                      : "Vui lòng chọn khách hàng"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Điểm bắt đầu</td>
                                  <td>
                                    {this.state.data
                                      ? this.state.data.diembatdau
                                      : "Vui lòng chọn khách hàng"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Điểm cuối</td>
                                  <td>
                                    {this.state.data
                                      ? this.state.data.diemcuoi
                                      : "Vui lòng chọn khách hàng"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Lộ trình</td>
                                  <td>
                                    {this.state.data
                                      ? this.state.data.lotrinh
                                      : "Vui lòng chọn khách hàng"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Thời gian</td>
                                  <td>
                                    {this.state.data
                                      ? this.state.data.thoigianvanchuyen
                                      : "Vui lòng chọn khách hàng"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Vị trí trạm kiểm tra</td>
                                  <td>
                                    {this.state.data
                                      ? this.state.data.vitriChotKT
                                      : "Vui lòng chọn khách hàng"}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Xe trong tuyến</td>
                                  <td>
                                    {this.state.data
                                      ? this.state.data.xetronglotrinh
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
    managertuyen: state.managertuyen
  }),
  {
    getListTuyenInfo
  }
)(Chitiettuyen);
