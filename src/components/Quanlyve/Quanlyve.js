import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { getListVeAction } from "./action";
import { connect } from "react-redux";
import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
class Quanlyve extends Component {
  constructor(props) {
    super(props);
    this.props.getListVeAction();
    this.state = {
      data: []
    };
  }
  //hàm xử lý các data từ server trả về
  _XuLyData(listVe) {
    const result = [];
    listVe.forEach(element => {
      const vemoi = {
        Customer: element.Customer,
        codeTicket: element.codeTicket,
        chuyenxe: element.inChuyenXe,
        hieuluc: element.isAvaiable === false ? "Vé còn giá trị" : "Vé đã hủy",
        kiemtra: element.isDoneCheck === true ? "Đã kiểm tra" : "Chưa kiểm tra",
        thanhtoan:
          element.isPayed === true ? "Đã thanh toán" : "Chưa thanh toán",
        gia: element.price,
        diemlen: element.routeOfTicket.from,
        diemxuong: element.routeOfTicket.to,
        loaive: element.typeTicket === "GIUCHO" ? "Giữ chỗ" : " Đặt chỗ"
      };
      result.push(vemoi);
    });
    this.setState({
      data: result
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.managerve.listVe !== null) {
      this._XuLyData(nextProps.managerve.listVe.result);
    }
  }
  render() {
    return (
      <section className="content">
        <div className="wraper container-fluid">
          <div className="page-title">
            <h3 className="title">
              Quản lý vé<span style={{ color: "red", fontSize: 15 }}>
                <span />
              </span>
            </h3>
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
                            >
                              <TableHeaderColumn dataField="_id" isKey hidden>
                                {" "}
                                Mã vé
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="Customer">
                                Khách hàng
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="codeTicket">
                                Mã vé
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="gia">
                                Giá vé
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="diemlen">
                                Điểm bắt đầu
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="diemxuong">
                                Điểm xuống
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="chuyenxe">
                                Thuộc chuyến xe
                              </TableHeaderColumn>

                              <TableHeaderColumn dataField="hieuluc">
                                Trạng thái hủy
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="loaive">
                                Loại vé
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="thanhtoan">
                                Thanh toán
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="kiemtra">
                                Kiểm tra
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
    // map state từ store vào props của component
    managerve: state.managerve
  }),
  {
    //map dispatch vào props
    getListVeAction
  }
)(
  //component muốn kết nối với state của store
  Quanlyve
);
