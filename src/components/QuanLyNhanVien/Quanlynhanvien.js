import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Link } from "react-router-dom";
class QuanLy extends Component {
  render() {
    return (
      <section className="content">
        <div className="wraper container-fluid">
          {/* start wraper container-fluid */}
          <div className="page-title">
            {/* start page-title */}
            <h3 className="title">Quản lý nhân viên</h3>
            <span className="tp_rht">
              <Link
                to="/manager/user/add"
                data-toggle="tooltip"
                title
                className="btn btn-primary add_btn"
                data-original-title="Thêm nhân viên"
              >
                <i className="fa fa-plus" />
              </Link>
            </span>
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

                      {/* end dt-buttons btn-group col-sm-2 */}
                      <div className="col-md-12 col-sm-12 col-xs-12 mobtbl">
                        {/* start col-md-12 col-sm-12 col-xs-12 mobtbl */}
                        <div
                          id="datatable_wrapper"
                          className="dataTables_wrapper form-inline dt-bootstrap no-footer"
                        >
                          {/* end row */}
                          <div className="row">
                            {/* start row */}
                            <div className="col-sm-12">
                              <BootstrapTable
                                pagination
                                search={true}
                                multiColumnSearch={true}
                              >
                                <TableHeaderColumn dataField="_id" isKey hidden>
                                  {" "}
                                  ID
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="">
                                  Tên tài khoản
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="">
                                  Email
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="">
                                  Password
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="">
                                  Họ đệm
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="">
                                  Tên
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="">
                                  Địa chỉ
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="">
                                  Số CMND
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="">
                                  Số điện thoại
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="">
                                  Ảnh cá nhân
                                </TableHeaderColumn>
                              </BootstrapTable>
                            </div>
                          </div>
                          {/* end row */}

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
