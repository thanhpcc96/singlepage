import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
class Quanlytuyenxe extends Component {
  render() {
    return (
      <section className="content">
        <div className="wraper container-fluid">
          <div className="page-title">
            <h3 className="title">
              Quản lý tuyến xe<span style={{ color: "red", fontSize: 15 }}>
                <span />
              </span>
            </h3>
            <span className="tp_rht">
              <a
                data-toggle="tooltip"
                title
                className="btn btn-primary add_btn"
                data-original-title="Add A Admin"
              >
                <i className="fa fa-plus" />
              </a>
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
                            >
                              <TableHeaderColumn dataField="_id" isKey hidden>
                                {" "}
                                Tên lộ trình
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="">
                                Điểm xuất phát
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="">
                                Điểm dừng
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="">
                                Lộ trình
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="">
                                Thời gian di chuyển
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="">
                                Tên trạm kiểm tra
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="">
                                Vị trí trạm
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="">
                                Xe phân công trong tuyến
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
                            >
                              Showing 1 to 22 of 22 entries
                            </div>
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
export default Quanlytuyenxe;