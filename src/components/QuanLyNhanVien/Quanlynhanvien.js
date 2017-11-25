import React, { Component} from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Modal, Button, Image } from "react-bootstrap";

import { getListUserAction } from "./action";

let countRow = 0;

class QuanLyNhanVien extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      idSelect: "",
      lgShow: false
    };
    this.props.getListUserAction();
  }
  onRowSelect(row, isSelected, e) {
    this.setState({
      idSelect: null
    });
    countRow++;
    if (isSelected === true && countRow === 1) {
      this.setState({
        idSelect: row._id
      });
    }
    if (isSelected && countRow > 1) {
      alert("Chưa hỗ trợ chọn nhiều hàng!");
      return false;
    }
    if (isSelected === false) {
      countRow = 0;
    }
  }

  _mapingData(data) {
    const result = [];
    data.forEach(user => {
      const newUser = {
        _id: user._id,
        email: user.email,
        username: user.username,
        status: user.status,
        role: user.role,
        fullname: user.info.fullname,
        passport: user.info.passportNumber,
        address: user.info.address,
        phone: user.info.phoneNumber,
        gender: user.info.gender,
        chucvu:
          user.role === 2
            ? "Lai xe"
            : user.role === 3 ? "Phu xe" : "Kiem soat vien"
      };
      result.push(newUser);
    });
    this.setState({
      data: result
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.manageruser.listuser !== null) {
      this._mapingData(nextProps.manageruser.listuser.result);
    }
  }
  render() {
    let lgClose = () => this.setState({ lgShow: false });
    const selectRowProp = {
      mode: "checkbox",
      bgColor: "#4DD0E1", // you should give a bgcolor, otherwise, you can't regonize which row has been selected
      hideSelectColumn: true, // enable hide selection column.
      clickToSelect: true, // you should enable clickToSelect, otherwise, you can't select column.
      onSelect: this.onRowSelect.bind(this)
    };
    return (
      <section className="content">
        <div className="wraper container-fluid">
          {/* start wraper container-fluid */}
          <div className="page-title">
            {/* start page-title */}
            <h3 className="title">Quản lý nhân viên</h3>
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
              <button onClick={() => this.setState({ lgShow: true })}>
                TESTSSSS
              </button>
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
                                data={this.state.data}
                                search={true}
                                multiColumnSearch={true}
                                options={{
                                  noDataText: "Khong co du lieu de Nhan vien",
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
                                  ID
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="username">
                                  Tên tài khoản
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="email">
                                  Email
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="fullname">
                                  Ho Ten
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="address">
                                  Địa chỉ
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="passport">
                                  Số CMND
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="phone">
                                  Số điện thoại
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField="chucvu">
                                  Chuc vu
                                </TableHeaderColumn>
                              </BootstrapTable>
                              <MyLargeModal
                                show={this.state.lgShow}
                                onHide={lgClose}
                              />
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

export default connect(
  state => ({
    manageruser: state.manageruser
  }),
  {
    getListUserAction
  }
)(QuanLyNhanVien);
class MyLargeModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">
            <h4>Thông tin chi tiết</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
