import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
class Admin extends Component {
  render() {
    const data = [
      {
        _id: "5a0371a21d09e53d814a226a",
        __v: 0,
        email: "Dee_Kub98@yahoo.com",
        username: "Vida.Emmerich57",
        password: "1234567891!",
        status: "ACTIVE",
        role: 2,
        info: {
          fullname: "Jamarcus Brakus",
          passportNumber: "bdae25bb-9c2c-4758-bd98-875853f15110",
          address: "Macao",
          phoneNumber: "649.514.7458 x61761",
          photoProfile: [],
          gender: "KHAC"
        }
      },
      {
        _id: "5a0371a21d09e53d814a226b",
        __v: 0,
        email: "Manuel.Gorczany@gmail.com",
        username: "August_Treutel89",
        password: "1234567891!",
        status: "ACTIVE",
        role: 2,
        info: {
          fullname: "Ella Bergnaum",
          passportNumber: "aa6492e6-8a1c-4146-bb95-9334b161b5cf",
          address: "Belarus",
          phoneNumber: "995-462-5070 x335",
          photoProfile: [],
          gender: "KHAC"
        }
      },
      {
        _id: "5a0371a21d09e53d814a226c",
        __v: 0,
        email: "Mark59@hotmail.com",
        username: "Hannah22",
        password: "1234567891!",
        status: "ACTIVE",
        role: 2,
        info: {
          fullname: "Alice Barton",
          passportNumber: "9c14f1ba-1363-43f9-825d-e94da97a4e5f",
          address: "Turkey",
          phoneNumber: "(651) 706-0157 x482",
          photoProfile: [],
          gender: "KHAC"
        }
      },
      {
        _id: "5a0371a21d09e53d814a226d",
        __v: 0,
        email: "Brice_Harber80@hotmail.com",
        username: "Ethelyn_Schuster2",
        password: "1234567891!",
        status: "ACTIVE",
        role: 2,
        info: {
          fullname: "Amparo Collier",
          passportNumber: "b83f6bd4-3eca-41b7-af8f-57ce1fd434bf",
          address: "Puerto Rico",
          phoneNumber: "1-572-320-2129 x6351",
          photoProfile: [],
          gender: "KHAC"
        }
      },
      {
        _id: "5a0371a21d09e53d814a226e",
        __v: 0,
        email: "Joy_Koch@hotmail.com",
        username: "Pansy89",
        password: "1234567891!",
        status: "ACTIVE",
        role: 2,
        info: {
          fullname: "Linnie Cartwright",
          passportNumber: "d0f4892b-85d0-4ee3-a30a-61b1f2d75814",
          address: "Bolivia",
          phoneNumber: "560.579.9824",
          photoProfile: [],
          gender: "KHAC"
        }
      }
    ];
    return (
      <section className="content">
        <div className="wraper container-fluid">
          <div className="page-title">
            <h3 className="title">
              Quản lý Admin{" "}
              <span style={{ color: "red", fontSize: 15 }}>
                <span />
              </span>
            </h3>
            <span className="tp_rht">
              <Link
                to="/manager/admin/add"
                data-toggle="tooltip"
                title
                className="btn btn-primary add_btn"
                data-original-title="Add A Admin"
              >
                <i className="fa fa-plus" />
              </Link>
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
                              data={data}
                              pagination
                              search={true}
                              multiColumnSearch={true}
                            >
                              <TableHeaderColumn dataField="_id" isKey hidden>
                                ID
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="fullname">
                                Họ tên
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="username">
                                Username
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="phoneNumber">
                                Số điện thoại
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="gender">
                                Giới tính
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="address">
                                Địa chỉ
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="passportNumber">
                                Số chứng nhân dân
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
export default Admin;
