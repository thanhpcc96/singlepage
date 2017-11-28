import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { getListKhachHang } from "./action";

//let countRow = 0;

class QuanLyKhachHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      rowSelect: null,
      isDisableChitiet: true,
      idSelect: null
    };
    this.props.getListKhachHang();
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

  _mapingData(data) {
    const loc = [];
    data.forEach(khachhang => {
      const client = {
        _id: khachhang._id,
        phone: khachhang.phone,
        status: khachhang.status,
        email: khachhang.local.email,
        photo: khachhang.local.photo,
        fullname: khachhang.info.fullname,
        balance: khachhang.acount_payment.balance
      };
      loc.push(client);
    });
    this.setState({
      data: loc
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.managerclient.listkhachhang !== null) {
      this._mapingData(nextProps.managerclient.listkhachhang);
    }
  }
  render() {
    const selectRowProp = {
      mode: "radio",
      bgColor: "#4DD0E1", // you should give a bgcolor, otherwise, you can't regonize which row has been selected
      hideSelectColumn: true, // enable hide selection column.
      clickToSelect: true, // you should enable clickToSelect, otherwise, you can't select column.
      onSelect: this.onRowSelect
    };
    return (
      <section className="content">
        <div className="wraper container-fluid">
          {/* start wraper container-fluid */}
          <div className="page-title">
            {/* start page-title */}
            <h3 className="title">Quản lý khách hàng</h3>
            <span className="tp_rht">
              <Button
                bsStyle="info"
                onClick={
                  () =>
                    this.props.history.push({
                      pathname: "/manager/client/chitiet",
                      state: { idClient: this.state.rowSelect }
                    })


                  // this.props.history.push("/manager/client/chitiet")
                }
              >
                Chi tiết
              </Button>&nbsp;
              {/*<Button
                bsStyle="warning"
                onClick={() => this.props.history.push("/manager/client/add")}
              >
                +
              </Button>*/}
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

                      <div className="col-md-12 col-sm-12 col-xs-12 mobtbl">
                        {/* start col-md-12 col-sm-12 col-xs-12 mobtbl */}
                        <div
                          id="datatable_wrapper"
                          className="dataTables_wrapper form-inline dt-bootstrap no-footer"
                        >
                          <div className="row">{/* start row */}</div>
                          {/* end row */}
                          <div className="row">
                            {/* start row */}
                            <div className="col-sm-12" />
                            <BootstrapTable
                              pagination
                              data={this.state.data}
                              search={true}
                              multiColumnSearch={true}
                              options={{
                                noDataText: "Khong co du lieu khach hang",
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
                                id
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="fullname">
                                Họ tên
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="email">
                                Email
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="phone">
                                Số điện thoại
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="balance">
                                Số dư
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="status">
                                Trạng thái
                              </TableHeaderColumn>
                            </BootstrapTable>
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
export default connect(
  state => ({
    managerclient: state.managerclient
  }),
  {
    getListKhachHang
  }
)(QuanLyKhachHang);
