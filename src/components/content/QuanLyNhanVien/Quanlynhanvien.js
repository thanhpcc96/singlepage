import React, { Component } from "react";
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
              <a
                href="#"
                style={{ position: "relative" }}
                data-toggle="tooltip"
                title
                className="btn btn-pink"
                data-original-title="Pending Approvals"
              >
                <i className="fa fa-bell" aria-hidden="true" />
                Tài xế chờ phê duyệt
              </a>
              <span
                style={{ position: "absolute", top: 100, right: 75 }}
                className="badge"
              >
                005
              </span>
              <a
                href="home.php?pages=add-driver"
                data-toggle="tooltip"
                title
                className="btn btn-primary add_btn"
                data-original-title="Add Driver"
              >
                <i className="fa fa-plus" />
              </a>
              <span />
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
                      <form method="post">
                        <div className="col-md-2 col-sm-2 col-xs-12">
                          <select className="form-control" name="sear12">
                            <option value="driver_name">---Tìm kiếm---</option>
                            <option value="driver_name">Tên</option>
                            <option value="driver_email">Email</option>
                            <option value="driver_phone">SĐT</option>
                          </select>
                        </div>
                        <div className="col-md-2 col-xs-12 form-group ">
                          <div className="input-group">
                            <input
                              type="text"
                              id="first-name"
                              name="seain12"
                              placeholder="Tìm kiếm"
                              className="form-control col-md-12 col-xs-12"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-sm-2  col-xs-12 form-group ">
                          <button
                            className="btn btn-primary"
                            type="submit"
                            name="seabt12"
                          >
                            <span
                              className="glyphicon glyphicon-search"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </form>{" "}
                      {/* end form */}
                      <div className="col-sm-4" />
                      <div className="dt-buttons btn-group col-sm-2">
                        {/* start dt-buttons btn-group col-sm-2 */}
                        <a
                          className="btn btn-default buttons-csv buttons-html5 btn-sm"
                          onclick="alert('This is Demo Version.')"
                          style={{ width: 174, height: 33 }}
                          tabIndex={0}
                          aria-controls="datatable-buttons"
                          href="#"
                        >
                          <span>Xuất ra</span>
                        </a>
                      </div>{" "}
                      {/* end dt-buttons btn-group col-sm-2 */}
                      <div className="col-md-12 col-sm-12 col-xs-12 mobtbl">
                        {/* start col-md-12 col-sm-12 col-xs-12 mobtbl */}
                        <div
                          id="datatable_wrapper"
                          className="dataTables_wrapper form-inline dt-bootstrap no-footer"
                        >
                          <div className="row">
                            {/* start row */}
                            <div className="col-sm-6">
                              <div
                                className="dataTables_length"
                                id="datatable_length"
                              >
                                <label>
                                  Hiển thị
                                  <select
                                    name="datatable_length"
                                    aria-controls="datatable"
                                    className="form-control input-sm"
                                  >
                                    <option value={10}>10</option>
                                    <option value={25}>25</option>
                                    <option value={50}>50</option>
                                    <option value={100}>100</option>
                                  </select>{" "}
                                  dòng
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div
                                id="datatable_filter"
                                className="dataTables_filter"
                              >
                                <label>
                                  Tìm kiếm:
                                  <input
                                    type="search"
                                    className="form-control input-sm"
                                    placeholder
                                    aria-controls="datatable"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                          {/* end row */}
                          <div className="row">
                            {/* start row */}
                            <div className="col-sm-12">
                              <table
                                id="datatable"
                                className="table table-striped table-bordered table-responsive dataTable no-footer"
                                role="grid"
                                aria-describedby="datatable_info"
                              >
                                <thead>
                                  <tr role="row">
                                    <th
                                      width="5%"
                                      className="sorting_asc"
                                      tabIndex={0}
                                      aria-controls="datatable"
                                      rowSpan={1}
                                      colSpan={1}
                                      aria-sort="ascending"
                                      aria-label="Id: activate to sort column descending"
                                      style={{ width: "13.0087px" }}
                                    >
                                      Id
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex={0}
                                      aria-controls="datatable"
                                      rowSpan={1}
                                      colSpan={1}
                                      aria-label="Company Name: activate to sort column ascending"
                                      style={{ width: "60.0087px" }}
                                    >
                                      Tên công ty
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex={0}
                                      aria-controls="datatable"
                                      rowSpan={1}
                                      colSpan={1}
                                      aria-label="Driver Name: activate to sort column ascending"
                                      style={{ width: "37.0087px" }}
                                    >
                                      Tài xế
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex={0}
                                      aria-controls="datatable"
                                      rowSpan={1}
                                      colSpan={1}
                                      aria-label="Email Id: activate to sort column ascending"
                                      style={{ width: "166.009px" }}
                                    >
                                      Email
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex={0}
                                      aria-controls="datatable"
                                      rowSpan={1}
                                      colSpan={1}
                                      aria-label="Mobile No.: activate to sort column ascending"
                                      style={{ width: "50.0087px" }}
                                    >
                                      SĐT
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex={0}
                                      aria-controls="datatable"
                                      rowSpan={1}
                                      colSpan={1}
                                      aria-label="City Name.: activate to sort column ascending"
                                      style={{ width: "52.0087px" }}
                                    >
                                      Thành phố
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex={0}
                                      aria-controls="datatable"
                                      rowSpan={1}
                                      colSpan={1}
                                      aria-label="Register Date: activate to sort column ascending"
                                      style={{ width: "56.0087px" }}
                                    >
                                      Ngày đăng ký
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex={0}
                                      aria-controls="datatable"
                                      rowSpan={1}
                                      colSpan={1}
                                      aria-label="Trips: activate to sort column ascending"
                                      style={{ width: "31.0087px" }}
                                    >
                                      Lộ trình
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex={0}
                                      aria-controls="datatable"
                                      rowSpan={1}
                                      colSpan={1}
                                      aria-label="Earning: activate to sort column ascending"
                                      style={{ width: "48.0087px" }}
                                    >
                                      Tiền lương
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex={0}
                                      aria-controls="datatable"
                                      rowSpan={1}
                                      colSpan={1}
                                      aria-label="Rating: activate to sort column ascending"
                                      style={{ width: "41.0087px" }}
                                    >
                                      Rating
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex={0}
                                      aria-controls="datatable"
                                      rowSpan={1}
                                      colSpan={1}
                                      aria-label="Status: activate to sort column ascending"
                                      style={{ width: "81.0087px" }}
                                    >
                                      Trạng thái
                                    </th>
                                    <th
                                      className="sorting"
                                      tabIndex={0}
                                      aria-controls="datatable"
                                      rowSpan={1}
                                      colSpan={1}
                                      aria-label="Action: activate to sort column ascending"
                                      style={{ width: 132 }}
                                    >
                                      Thao tác
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr role="row" className="odd">
                                    <td className="sorting_1">
                                      <a
                                        href="#driverdetails873"
                                        data-toggle="modal"
                                      >
                                        <span className="badge bg-warning">
                                          1
                                        </span>
                                      </a>
                                    </td>
                                    <td>---</td>
                                    <td>Le*****</td>
                                    <td>****@gmail.com</td>
                                    <td>********65</td>
                                    <td>Dummy City</td>
                                    <td>Wednesday, Oct 25</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>Not Rate Yet</td>
                                    <td>
                                      <div
                                        className="row action_row"
                                        style={{ width: 100 }}
                                      >
                                        <a href="#" className title="Online">
                                          <label
                                            className="label label-warning"
                                            style={{
                                              width: 48,
                                              display: "inline-block"
                                            }}
                                          >
                                            Online
                                          </label>
                                        </a>
                                        <a href="#" className title="Active">
                                          <label
                                            className="label label-success"
                                            style={{
                                              width: 48,
                                              display: "inline-block"
                                            }}
                                          >
                                            Active
                                          </label>
                                        </a>
                                      </div>
                                      <div
                                        className="row action_row"
                                        style={{ width: 100 }}
                                      >
                                        <label
                                          className="label label-warning"
                                          style={{
                                            width: 48,
                                            display: "inline-block"
                                          }}
                                        >
                                          Login
                                        </label>
                                        <label
                                          className="label label-info"
                                          style={{
                                            width: 48,
                                            display: "inline-block"
                                          }}
                                        >
                                          Free
                                        </label>
                                        <br />
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        className="row action_row"
                                        style={{ width: 150 }}
                                      >
                                        <span
                                          data-target="#edit873"
                                          data-toggle="modal"
                                        >
                                          <a
                                            data-original-title="Edit"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            className="btn menu-icon btn_edit"
                                          >
                                            <i className="fa fa-pencil" />
                                          </a>
                                        </span>
                                        <a
                                          data-original-title="Logout"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          className="btn menu-icon btn_eye_dis"
                                          href="#"
                                        >
                                          <i className="fa fa-eye-slash" />
                                        </a>
                                        <a
                                          data-original-title="Inactive"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          className="btn menu-icon btn_eye_dis"
                                          href="#"
                                        >
                                          <i className="fa fa-eye-slash" />
                                        </a>
                                        {/*<span data-target="#delete"
                                                                          data-toggle="modal"><a data-original-title="Delete"
                                                                                                 data-toggle="tooltip"
                                                                                                 data-placement="top"
                                                                                                 class="btn menu-icon btn_delete"> <i
                                                                                    class="fa fa-trash"></i> </a></span>*/}
                                      </div>
                                    </td>
                                  </tr>
                                  <tr role="row" className="even">
                                    <td className="sorting_1">
                                      <a
                                        href="#driverdetails869"
                                        data-toggle="modal"
                                      >
                                        <span className="badge bg-warning">
                                          2
                                        </span>
                                      </a>
                                    </td>
                                    <td>---</td>
                                    <td>we*****</td>
                                    <td>****@gmail.com</td>
                                    <td>********83</td>
                                    <td>Gurugram</td>
                                    <td>Tuesday, Oct 24</td>
                                    <td>2</td>
                                    <td>192</td>
                                    <td>
                                      <img src="star@13.png" alt="Whole Star" />
                                      <img src="star@13.png" alt="Whole Star" />
                                      <img src="star@13.png" alt="Whole Star" />
                                      <img src="star@13.png" alt="Whole Star" />
                                      <img src="star@13.png" alt="Whole Star" />
                                    </td>
                                    <td>
                                      <div
                                        className="row action_row"
                                        style={{ width: 100 }}
                                      >
                                        <a href="#" className title="Online">
                                          <label
                                            className="label label-warning"
                                            style={{
                                              width: 48,
                                              display: "inline-block"
                                            }}
                                          >
                                            Online
                                          </label>
                                        </a>
                                        <a href="#" className title="Active">
                                          <label
                                            className="label label-success"
                                            style={{
                                              width: 48,
                                              display: "inline-block"
                                            }}
                                          >
                                            Active
                                          </label>
                                        </a>
                                      </div>
                                      <div
                                        className="row action_row"
                                        style={{ width: 100 }}
                                      >
                                        <label
                                          className="label label-warning"
                                          style={{
                                            width: 48,
                                            display: "inline-block"
                                          }}
                                        >
                                          Login
                                        </label>
                                        <label
                                          className="label label-info"
                                          style={{
                                            width: 48,
                                            display: "inline-block"
                                          }}
                                        >
                                          Free
                                        </label>
                                        <br />
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        className="row action_row"
                                        style={{ width: 150 }}
                                      >
                                        <span
                                          data-target="#edit869"
                                          data-toggle="modal"
                                        >
                                          <a
                                            data-original-title="Edit"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            className="btn menu-icon btn_edit"
                                          >
                                            <i className="fa fa-pencil" />
                                          </a>
                                        </span>
                                        <a
                                          data-original-title="Logout"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          className="btn menu-icon btn_eye_dis"
                                          href="#"
                                        >
                                          <i className="fa fa-eye-slash" />
                                        </a>
                                        <a
                                          data-original-title="Inactive"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          className="btn menu-icon btn_eye_dis"
                                          href="#"
                                        >
                                          <i className="fa fa-eye-slash" />
                                        </a>
                                        {/*<span data-target="#delete"
                                                                                      data-toggle="modal"><a data-original-title="Delete"
                                                                                                             data-toggle="tooltip"
                                                                                                             data-placement="top"
                                                                                                             class="btn menu-icon btn_delete"> <i
                                                                                                class="fa fa-trash"></i> </a></span>*/}
                                      </div>
                                    </td>
                                  </tr>
                                  <tr role="row" className="odd">
                                    <td className="sorting_1">
                                      <a
                                        href="#driverdetails868"
                                        data-toggle="modal"
                                      >
                                        <span className="badge bg-warning">
                                          3
                                        </span>
                                      </a>
                                    </td>
                                    <td>---</td>
                                    <td>we*****</td>
                                    <td>****@gmail.com</td>
                                    <td>********51</td>
                                    <td>Gurugram</td>
                                    <td>Tuesday, Oct 24</td>
                                    <td>1</td>
                                    <td>115.2</td>
                                    <td>Not Rate Yet</td>
                                    <td>
                                      <div
                                        className="row action_row"
                                        style={{ width: 100 }}
                                      >
                                        <a href="#" className title="Online">
                                          <label
                                            className="label label-warning"
                                            style={{
                                              width: 48,
                                              display: "inline-block"
                                            }}
                                          >
                                            Online
                                          </label>
                                        </a>
                                        <a href="#" className title="Active">
                                          <label
                                            className="label label-success"
                                            style={{
                                              width: 48,
                                              display: "inline-block"
                                            }}
                                          >
                                            Active
                                          </label>
                                        </a>
                                      </div>
                                      <div
                                        className="row action_row"
                                        style={{ width: 100 }}
                                      >
                                        <label
                                          className="label label-warning"
                                          style={{
                                            width: 48,
                                            display: "inline-block"
                                          }}
                                        >
                                          Login
                                        </label>
                                        <label
                                          className="label label-info"
                                          style={{
                                            width: 48,
                                            display: "inline-block"
                                          }}
                                        >
                                          Free
                                        </label>
                                        <br />
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        className="row action_row"
                                        style={{ width: 150 }}
                                      >
                                        <span
                                          data-target="#edit868"
                                          data-toggle="modal"
                                        >
                                          <a
                                            data-original-title="Edit"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            className="btn menu-icon btn_edit"
                                          >
                                            <i className="fa fa-pencil" />
                                          </a>
                                        </span>
                                        <a
                                          data-original-title="Logout"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          className="btn menu-icon btn_eye_dis"
                                          href="#"
                                        >
                                          <i className="fa fa-eye-slash" />
                                        </a>
                                        <a
                                          data-original-title="Inactive"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          className="btn menu-icon btn_eye_dis"
                                          href="#"
                                        >
                                          <i className="fa fa-eye-slash" />
                                        </a>
                                        {/*<span data-target="#delete"
                                                                                  data-toggle="modal"><a data-original-title="Delete"
                                                                                                         data-toggle="tooltip"
                                                                                                         data-placement="top"
                                                                                                         class="btn menu-icon btn_delete"> <i
                                                                                            class="fa fa-trash"></i> </a></span>*/}
                                      </div>
                                    </td>
                                  </tr>
                                  <tr role="row" className="even">
                                    <td className="sorting_1">
                                      <a
                                        href="#driverdetails866"
                                        data-toggle="modal"
                                      >
                                        <span className="badge bg-warning">
                                          4
                                        </span>
                                      </a>
                                    </td>
                                    <td>---</td>
                                    <td>Lu*****</td>
                                    <td>****@demo.com</td>
                                    <td>********12</td>
                                    <td>Dummy City</td>
                                    <td>Monday, Oct 23</td>
                                    <td>1</td>
                                    <td>621</td>
                                    <td>Not Rate Yet</td>
                                    <td>
                                      <div
                                        className="row action_row"
                                        style={{ width: 100 }}
                                      >
                                        <a href="#" className title="Online">
                                          <label
                                            className="label label-warning"
                                            style={{
                                              width: 48,
                                              display: "inline-block"
                                            }}
                                          >
                                            Online
                                          </label>
                                        </a>
                                        <a href="#" className title="Active">
                                          <label
                                            className="label label-success"
                                            style={{
                                              width: 48,
                                              display: "inline-block"
                                            }}
                                          >
                                            Active
                                          </label>
                                        </a>
                                      </div>
                                      <div
                                        className="row action_row"
                                        style={{ width: 100 }}
                                      >
                                        <label
                                          className="label label-warning"
                                          style={{
                                            width: 48,
                                            display: "inline-block"
                                          }}
                                        >
                                          Login
                                        </label>
                                        <label
                                          className="label label-info"
                                          style={{
                                            width: 48,
                                            display: "inline-block"
                                          }}
                                        >
                                          Free
                                        </label>
                                        <br />
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        className="row action_row"
                                        style={{ width: 150 }}
                                      >
                                        <span
                                          data-target="#edit866"
                                          data-toggle="modal"
                                        >
                                          <a
                                            data-original-title="Edit"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            className="btn menu-icon btn_edit"
                                          >
                                            <i className="fa fa-pencil" />
                                          </a>
                                        </span>
                                        <a
                                          data-original-title="Logout"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          className="btn menu-icon btn_eye_dis"
                                          href="#"
                                        >
                                          <i className="fa fa-eye-slash" />
                                        </a>
                                        <a
                                          data-original-title="Inactive"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          className="btn menu-icon btn_eye_dis"
                                          href="#"
                                        >
                                          <i className="fa fa-eye-slash" />
                                        </a>
                                        {/*<span data-target="#delete"
                                                                                  data-toggle="modal"><a data-original-title="Delete"
                                                                                                         data-toggle="tooltip"
                                                                                                         data-placement="top"
                                                                                                         class="btn menu-icon btn_delete"> <i
                                                                                            class="fa fa-trash"></i> </a></span>*/}
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
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
                                Hiển thị 1 đến 25 trong 602 nhân viên
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
                                    <a href="#">Trang trước</a>
                                  </li>
                                  <li
                                    className="paginate_button active"
                                    aria-controls="datatable"
                                    tabIndex={0}
                                  >
                                    <a href="#">1</a>
                                  </li>
                                  <li
                                    className="paginate_button "
                                    aria-controls="datatable"
                                    tabIndex={0}
                                  >
                                    <a href="#">2</a>
                                  </li>
                                  <li
                                    className="paginate_button "
                                    aria-controls="datatable"
                                    tabIndex={0}
                                  >
                                    <a href="#">3</a>
                                  </li>
                                  <li
                                    className="paginate_button "
                                    aria-controls="datatable"
                                    tabIndex={0}
                                  >
                                    <a href="#">4</a>
                                  </li>
                                  <li
                                    className="paginate_button "
                                    aria-controls="datatable"
                                    tabIndex={0}
                                  >
                                    <a href="#">5</a>
                                  </li>
                                  <li
                                    className="paginate_button disabled"
                                    aria-controls="datatable"
                                    tabIndex={0}
                                    id="datatable_ellipsis"
                                  >
                                    <a href="#">…</a>
                                  </li>
                                  <li
                                    className="paginate_button "
                                    aria-controls="datatable"
                                    tabIndex={0}
                                  >
                                    <a href="#">25</a>
                                  </li>
                                  <li
                                    className="paginate_button next"
                                    aria-controls="datatable"
                                    tabIndex={0}
                                    id="datatable_next"
                                  >
                                    <a href="#">Trang sau</a>
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
