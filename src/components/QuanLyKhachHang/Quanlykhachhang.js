import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
class QuanLy extends Component {
  render() {
    return (
      <section className="content">
        <div className="wraper container-fluid">
          {/* start wraper container-fluid */}
          <div className="page-title">
            {/* start page-title */}
            <h3 className="title">Quản lý khách hàng</h3>
          </div>
          {/* end page-title */}
          <div className="row">
            {" "}
            {/* start row content */}
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="row">
                    <div className="col-md-12">
                      {/* end form */}
                      <div className="col-sm-4" />

                      <div className="col-md-12 col-sm-12 col-xs-12 mobtbl">
                        {/* start col-md-12 col-sm-12 col-xs-12 mobtbl */}
                        <div
                          id="datatable_wrapper"
                          className="dataTables_wrapper form-inline dt-bootstrap no-footer"
                        >
                          <div className="row">
                            {/* start row */}
                          </div>
                          {/* end row */}
                          <div className="row">
                            {/* start row */}
                            <div className="col-sm-12" />
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
                          {/* end row */}
                          <div className="row">
                            {/* start row */}
                            <div className="col-sm-6">
                              <div
                                className="dataTables_info"
                                id="datatable_info"
                                role="status"
                                aria-live="polite"
                              >
                                Hiển thị 1 đến 25 trong 602 khách hàng
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
                                    <a>Trang trước</a>
                                  </li>
                                  <li
                                    className="paginate_button active"
                                    aria-controls="datatable"
                                    tabIndex={0}
                                  >
                                    <a>1</a>
                                  </li>
                                  <li
                                    className="paginate_button "
                                    aria-controls="datatable"
                                    tabIndex={0}
                                  >
                                    <a>2</a>
                                  </li>
                                  <li
                                    className="paginate_button "
                                    aria-controls="datatable"
                                    tabIndex={0}
                                  >
                                    <a>3</a>
                                  </li>
                                  <li
                                    className="paginate_button "
                                    aria-controls="datatable"
                                    tabIndex={0}
                                  >
                                    <a>4</a>
                                  </li>
                                  <li
                                    className="paginate_button "
                                    aria-controls="datatable"
                                    tabIndex={0}
                                  >
                                    <a>5</a>
                                  </li>
                                  <li
                                    className="paginate_button disabled"
                                    aria-controls="datatable"
                                    tabIndex={0}
                                    id="datatable_ellipsis"
                                  >
                                    <a>…</a>
                                  </li>
                                  <li
                                    className="paginate_button "
                                    aria-controls="datatable"
                                    tabIndex={0}
                                  >
                                    <a>25</a>
                                  </li>
                                  <li
                                    className="paginate_button next"
                                    aria-controls="datatable"
                                    tabIndex={0}
                                    id="datatable_next"
                                  >
                                    <a>Trang sau</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/* end row */}
                        </div>
                      </div>
                      {/* end col-md-12 col-sm-12 col-xs-12 mobtbl */}
                    </div>
                  </div>
                </div>{" "}
                {/* end panel-body */}
              </div>
              {/* end panel panel-default */}
            </div>
          </div>
          {/* end row content */}
        </div>
      </section>
    );
  }
}
export default QuanLy;
