import React, { Component } from "react";
import { getListChuyenXeAction } from "./action";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

import moment from '../../i18n/timeZone';

moment.locale('vi');

class Quanlychuyenxe extends Component {
  constructor(props) {
    super(props);
    this.props.getListChuyenXeAction();
    this.state = {
      data: [],
      rowSelect: null,
      isDisableChitiet: true
    };
  }
  onRowSelect(row, isSelected, e) {
    if (isSelected === true) {
      this.state.data.forEach(chuyen => {
        if (chuyen._id === row._id) {
          this.setState({
            dataSelect: chuyen,
            isDisableChitiet: false
          });
          return;
        }
      });
    }
    if (isSelected === false) {
      this.setState({
        dataSelect: null,
        isDisableChitiet: true
      });
    }
  }
  _XuLyData(listChuyenXe) {
    const result = [];
    listChuyenXe.forEach(chuyen => {
      const chuyenmoi = {
        tenchuyen: chuyen.tenchuyen,
        choNgoi: chuyen.choNgoi,
        dadat: chuyen.dadat,
        loai: chuyen.loai,
        timeStart: moment(chuyen.timeStart).format('L, LT'),
        _id: chuyen._id,
        danhgia: chuyen.danhgia
      };
      result.push(chuyenmoi);
    });
    this.setState({
      data: result
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.managerChuyen.listChuyenXe !== null) {
      this._XuLyData(nextProps.managerChuyen.listChuyenXe.result);
    }
  }
  render() {
    const selectRowProp = {
      mode: "radio",
      bgColor: "#4DD0E1", // you should give a bgcolor, otherwise, you can't regonize which row has been selected
      // hideSelectColumn: true, // enable hide selection column.
      clickToSelect: true, // you should enable clickToSelect, otherwise, you can't select column.
      onSelect: this.onRowSelect.bind(this)
    };
    return (
      <section className="content">
        <div className="wraper container-fluid">
          <div className="page-title">
            <h3 className="title">
              Quản lý chuyến xe<span style={{ color: "red", fontSize: 15 }}>
                <span />
              </span>
            </h3>
            <span className="tp_rht">
              <Button
                disabled={this.state.isDisableChitiet}
                bsStyle="info"
                onClick={() =>
                  this.props.history.push({
                    pathname: "/manager/chuyen/detail",
                    // search: '?chuyen=' + this.state.rowSelect,
                    state: { idChuyen: this.state.rowSelect }
                  })
                }
              >
                Chi tiết
              </Button>&nbsp;
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
                              data={this.state.data}
                              search={true}
                              multiColumnSearch={true}
                              options={{
                                noDataText: "Không có dữ liệu của bất kỳ chuyến xe nào",
                                exportCSVText: "Trích xuất ra excel",
                                csvFileName: "Danhsachnhanvien.csv"
                              }}
                              striped
                              hover
                              condensed
                              exportCSV
                              selectRow={selectRowProp}
                            >
                              <TableHeaderColumn dataField="_id" isKey hidden>
                                {" "}
                                Số chuyến
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="tenchuyen">
                                Tên chuyến
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="timeStart">
                                Thời gian bắt đầu
                              </TableHeaderColumn>

                              <TableHeaderColumn dataField="choNgoi">
                                Số chỗ ngồi
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="dadat">
                                Số chỗ ngồi đã đặt
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="loai">
                                Chiều di chuyển
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
    managerChuyen: state.managerchuyen
  }),
  {
    getListChuyenXeAction
  }
)(Quanlychuyenxe);
