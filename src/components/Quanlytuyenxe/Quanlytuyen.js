import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { getListTuyenXeAction } from "./action";
import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
class Quanlytuyenxe extends Component {
  constructor(props) {
    super(props);
    this.props.getListTuyenXeAction();
    this.state = {
      data: [],
      rowSelect: null,
      isDisableChitiet: true
    };
    this.onRowSelect = this.onRowSelect.bind(this);
  }
  onRowSelect(row, isSelected, e) {
    if (isSelected === true) {
      this.setState({
        rowSelect: row._id,
        isDisableChitiet: false
      });
    } else {
      this.setState({
        rowSelect: null,
        isDisableChitiet: true
      });
    }
  }
  _XuLyData(listTuyen) {
    const result = [];
    listTuyen.forEach(element => {
      let lotrinh = " ";
      element.routeOfTrip.lotrinh.forEach(lt => {
        lotrinh = lotrinh + lt;
      });
      let vitri = " ";
      element.vitriChotKT.forEach(vt => {
        vitri = vitri + vt;
      });

      const tuyenmoi = {
        tentuyen: element.routeOfTrip.from + " " + element.routeOfTrip.to,
        diembatdau: element.routeOfTrip.from,
        diemcuoi: element.routeOfTrip.to,
        lotrinh: lotrinh,
        thoigianvanchuyen: element.thoigianvanchuyen,
        vitriChotKT: vitri,
        xetronglotrinh: element.xetronglotrinh.length
      };
      result.push(tuyenmoi);
    });
    this.setState({
      data: result
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.managertuyen.listTuyen !== null) {
      console.log("============================================");
      console.log("=", nextProps.managertuyen.listTuyen.result);
      console.log("============================================");
      this._XuLyData(nextProps.managertuyen.listTuyen.result);
    }
  }

  render() {
    const selectRowProp = {
      mode: "radio",
      clickToSelect: true,
      onSelect: this.onRowSelect
      // onSelectAll: onSelectAll
    };
    return (
      <section className="content">
        <div className="wraper container-fluid">
          <div className="page-title">
            <h3 className="title">Quản lý tuyến xe</h3>
            <span className="tp_rht">
              {/* <Link
                to={process.env.PUBLIC_URL + "/manager/user/add"}
                data-toggle="tooltip"
                className="btn btn-primary add_btn"
                data-original-title="Thêm nhân viên"
              >
                <i className="fa fa-plus" />
              </Link>
            */}
              <Button
                disabled={this.state.isDisableChitiet}
                bsStyle="info"
                onClick={() =>
                  this.props.history.push("/manager/tuyen/chitiettuyen")
                }
              >
                Chi tiết
              </Button>
              <Button
                bsStyle="warning"
                onClick={() => this.props.history.push("/manager/tuyen/add")}
              >
                +
              </Button>
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
                            <BootstrapTable
                              pagination
                              search={true}
                              multiColumnSearch={true}
                              data={this.state.data}
                              selectRow={selectRowProp}
                            >
                              <TableHeaderColumn dataField="_id" isKey hidden>
                                {" "}
                                Tên lộ trình
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="tentuyen">
                                Tên tuyến
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="diembatdau">
                                Điểm bắt đầu
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="diemcuoi">
                                Điểm cuối
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="lotrinh">
                                Lộ trình
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="thoigianvanchuyen">
                                Thời gian
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="vitriChotKT">
                                Vị trí trạm kiểm tra
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="xetronglotrinh">
                                Xe phân công
                              </TableHeaderColumn>
                            </BootstrapTable>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <div
                              className="dataTables_info"
                              id="datatable_info"
                              role="status"
                              aria-live="polite"
                            />
                          </div>
                          <div className="col-sm-6">
                            <div
                              className="dataTables_paginate paging_simple_numbers"
                              id="datatable_paginate"
                            >
                              <ul className="pagination">
                                <li
                                  className="paginate_button previous disabled"
                                  aria-controls="datatable"
                                  tabIndex={0}
                                  id="datatable_previous"
                                >
                                  <a>Previous</a>
                                </li>
                                <li
                                  className="paginate_button active"
                                  aria-controls="datatable"
                                  tabIndex={0}
                                >
                                  <a>1</a>
                                </li>
                                <li
                                  className="paginate_button next disabled"
                                  aria-controls="datatable"
                                  tabIndex={0}
                                  id="datatable_next"
                                >
                                  <a>Next</a>
                                </li>
                              </ul>
                            </div>
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
  { getListTuyenXeAction }
)(Quanlytuyenxe);
