import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Link } from "react-router-dom";
class Lichsugiaodich extends Component {
  render() {
    return (
      <section className="content">
        <div className="wraper container-fluid">
          {/*start wraper container-fluid */}
          <div className="page-title">
            <h3 className="title">Lịch sử giao dịch</h3>
          </div>
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
                                  Tên khách hàng
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="">
                                  Tổng tiền
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="">
                                  Chuyến xe
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="">
                                  Vé
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="">
                                  Lộ trình
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="">
                                  Loại giao dịch
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="">
                                  Trạng thái thanh toán
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="">
                                  Thời gian giao dịch
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="">
                                  Chi tiết
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
        {/*start wraper container-fluid */}
      </section>
    );
  }
}
export default Lichsugiaodich;
