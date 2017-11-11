import React, { Component } from "react";
class TongQuan extends Component {
  render() {
    return (
      <section class="content">
        <div className="wraper container-fluid">
          {/*page title */}
          <div className="page-title">
            <h3 className="title">Manual Taxi Dispatch</h3>
            <select
              id="type"
              onchange="filterMarkers(this.value);"
              style={{ height: 50, width: 177, float: "right" }}
            >
              <option value>All Driver</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="On Ride">On Ride</option>
            </select>
          </div>
          {/*end page title */}
          {/* panel-body */}
          <div className="panel-body">
            <form
              method="post"
              encType="multipart/form-data"
              onsubmit="return validatelogin()"
            >
              <div className="col-sm-5">
                <div className="col-md-4 col-sm-4 col-xs-12 form-group has-feedback">
                  <input
                    className="form-control"
                    style={{ height: 30 }}
                    id="country"
                    name="country"
                    placeholder="Country"
                    type="text"
                  />
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 form-group has-feedback">
                  <input
                    className="form-control"
                    id="userphone"
                    name="userphone"
                    style={{ height: 30 }}
                    placeholder="Phone Number"
                    type="text"
                  />
                  <input
                    type="hidden"
                    id="user_id"
                    name="user_id"
                    defaultValue
                  />
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 form-group has-feedback">
                  <button
                    type="button"
                    id="get_details"
                    style={{ height: 30 }}
                    className="btn btn-success col-md-12"
                  >
                    Get Details
                  </button>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 form-group has-feedback">
                  <input
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Username"
                    style={{ height: 30 }}
                    type="text"
                  />
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 form-group has-feedback">
                  <input
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    style={{ height: 30 }}
                    name="email"
                    type="email"
                  />
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 form-group has-feedback">
                  <select
                    className="form-control"
                    id="ride_now"
                    style={{ height: 30 }}
                    name="ride_now"
                    onchange="setId(this.value);"
                  >
                    <option value>Select Ride Type</option>
                    <option value={1}>Ride Now</option>
                    <option value={2}>Ride Later</option>
                  </select>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                  <input
                    className="form-control hasDatepicker"
                    id="datetimepicker1"
                    name="datepicker"
                    style={{ height: 30 }}
                    placeholder="Select Date"
                    type="text"
                  />
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                  <input
                    className="form-control hasWickedpicker"
                    id="timepicker"
                    name="timepicker"
                    style={{ height: 30 }}
                    placeholder="Select Time"
                    type="text"
                    onkeypress="return false;"
                    aria-showingpicker="false"
                    tabIndex={0}
                  />
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                  <input
                    className="form-control"
                    id="origin-input"
                    name="origin-input"
                    style={{ height: 30 }}
                    placeholder="Pick up Location"
                    type="text"
                    autoComplete="off"
                  />
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                  <input
                    className="form-control"
                    id="destination-input"
                    name="destination-input"
                    style={{ height: 30 }}
                    placeholder="Drop off Location"
                    type="text"
                    autoComplete="off"
                  />
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                  <select
                    className="form-control"
                    id="car_type"
                    name="car_type"
                    style={{ height: 30 }}
                    onchange="getId(this.value);"
                  >
                    <option value>Select Vehicle type</option>
                    <option value={2}>HATCHBACK</option>
                    <option value={3}>LUXURY</option>
                    <option value={4}>Mini</option>
                  </select>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                  <select
                    className="form-control"
                    name="coupon_code"
                    id="coupon_code"
                    style={{ height: 30 }}
                  >
                    <option value>Apply Coupon</option>
                    <option value={123456}>123456(100)</option>
                    <option value={20}>20(20)</option>
                  </select>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 form-group has-feedback">
                  <div className="checkbox">
                    <label>
                      <input
                        defaultValue={1}
                        type="checkbox"
                        id="checkMe"
                        name="checkMe"
                        onclick="disableMyText()"
                      />{" "}
                      Auto Assign Driver
                    </label>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2 col-xs-12 form-group has-feedback">
                  <h4>
                    <b>OR</b>
                  </h4>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                  <select
                    className="form-control"
                    name="driver"
                    style={{ height: 30 }}
                    id="driver"
                  >
                    <option value>Select Driver</option>
                  </select>
                </div>
                <div className="clearfix" />
                <br />
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <input
                    type="submit"
                    className="btn btn-success"
                    id="save"
                    style={{ height: 30 }}
                    name="save"
                    defaultValue="Book Now"
                  />
                </div>
                <div className="clear" />
              </div>
            </form>
            <div className="col-sm-7">
              <div className="col-sm-12">
                <div className="row" />
              </div>
            </div>
          </div>
          {/*end panel-body */}
          <div className="row">
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
                          >
                            <label>
                              Show
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
                              entries
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div
                            id="datatable_filter"
                            className="dataTables_filter"
                          >
                            <label>
                              Search:
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
                      <div className="row">
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
                                  width={5}
                                  className="sorting_asc"
                                  tabIndex={0}
                                  aria-controls="datatable"
                                  rowSpan={1}
                                  colSpan={1}
                                  aria-sort="ascending"
                                  aria-label="Sr.No: activate to sort column descending"
                                  style={{ width: 34 }}
                                >
                                  Sr.No
                                </th>
                                <th
                                  width={5}
                                  className="sorting"
                                  tabIndex={0}
                                  aria-controls="datatable"
                                  rowSpan={1}
                                  colSpan={1}
                                  aria-label="Ride Id: activate to sort column ascending"
                                  style={{ width: 28 }}
                                >
                                  Ride Id
                                </th>
                                <th
                                  width={5}
                                  className="sorting"
                                  tabIndex={0}
                                  aria-controls="datatable"
                                  rowSpan={1}
                                  colSpan={1}
                                  aria-label="Rider Details: activate to sort column ascending"
                                  style={{ width: 53 }}
                                >
                                  Rider Details
                                </th>
                                <th
                                  width={5}
                                  className="sorting"
                                  tabIndex={0}
                                  aria-controls="datatable"
                                  rowSpan={1}
                                  colSpan={1}
                                  aria-label="Driver Details: activate to sort column ascending"
                                  style={{ width: 51 }}
                                >
                                  Driver Details
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex={0}
                                  aria-controls="datatable"
                                  rowSpan={1}
                                  colSpan={1}
                                  aria-label="Pickup Address: activate to sort column ascending"
                                  style={{ width: 137 }}
                                >
                                  Pickup Address
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex={0}
                                  aria-controls="datatable"
                                  rowSpan={1}
                                  colSpan={1}
                                  aria-label="Drop Address: activate to sort column ascending"
                                  style={{ width: 164 }}
                                >
                                  Drop Address
                                </th>
                                <th
                                  width
                                  className="sorting"
                                  tabIndex={0}
                                  aria-controls="datatable"
                                  rowSpan={1}
                                  colSpan={1}
                                  aria-label="Payment Mode: activate to sort column ascending"
                                  style={{ width: 55 }}
                                >
                                  Payment Mode
                                </th>
                                <th
                                  width="10%"
                                  className="sorting"
                                  tabIndex={0}
                                  aria-controls="datatable"
                                  rowSpan={1}
                                  colSpan={1}
                                  aria-label="Ride booked time: activate to sort column ascending"
                                  style={{ width: 68 }}
                                >
                                  Ride booked time
                                </th>
                                <th
                                  width="5%"
                                  className="sorting"
                                  tabIndex={0}
                                  aria-controls="datatable"
                                  rowSpan={1}
                                  colSpan={1}
                                  aria-label="Current Status: activate to sort column ascending"
                                  style={{ width: 46 }}
                                >
                                  Current Status
                                </th>
                                <th
                                  width="8%"
                                  className="sorting"
                                  tabIndex={0}
                                  aria-controls="datatable"
                                  rowSpan={1}
                                  colSpan={1}
                                  aria-label="Ride Action: activate to sort column ascending"
                                  style={{ width: 47 }}
                                >
                                  Ride Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr role="row" className="odd">
                                <td className="sorting_1"> 1</td>
                                <td>
                                  <a>
                                    <span
                                      title="Full Details"
                                      className="bookind-id"
                                    >
                                      {" "}
                                      4607{" "}
                                    </span>
                                  </a>
                                </td>
                                <td>
                                  De*****<br />
                                  Us********<br />
                                  ********
                                </td>
                                <td>
                                  De*****<br />
                                  **********<br />
                                  de********
                                </td>
                                <td>
                                  Calle Respaldo San Rafael, Santo Domingo,
                                  Dominican Republic
                                </td>
                                <td>Configurarsupuntodeentrega</td>
                                <td>Cash</td>
                                <td>Wednesday, Oct 25,03:10:34</td>
                                <td>
                                  Accepted by Driver <br />
                                  03:10:38 AM
                                </td>
                                <td align="center">
                                  <span
                                    data-target="#cancel4607"
                                    data-toggle="modal"
                                  >
                                    <a
                                      data-original-title="Cancel Ride"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      className="btn menu-icon btn_delete"
                                    >
                                      <i className="fa fa-times" />
                                    </a>
                                  </span>
                                  <a
                                    data-original-title="Track"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    className="btn menu-icon btn_edit"
                                  >
                                    <i className="ion-android-locate" />
                                  </a>
                                </td>
                              </tr>
                              <tr role="row" className="even">
                                <td className="sorting_1"> 2</td>
                                <td>
                                  <a>
                                    <span
                                      title="Full Details"
                                      className="bookind-id"
                                    >
                                      {" "}
                                      4598{" "}
                                    </span>
                                  </a>
                                </td>
                                <td>
                                  Pr*****<br />
                                  +9********<br />
                                  ********
                                </td>
                                <td>
                                  <h4 style={{ color: "red" }}>Not Assign</h4>
                                </td>
                                <td>
                                  322B, Sohna Rd, Sector 49, Gurugram, Haryana
                                  122018, India
                                </td>
                                <td>
                                  3115, Vikas Marg, Sector 46, Gurugram, Haryana
                                  122022, India
                                </td>
                                <td>Cash</td>
                                <td>Tuesday, Oct 24,13:45:50</td>
                                <td>
                                  New Booking <br />
                                  01:45:50 PM
                                </td>
                                <td align="center">
                                  <span
                                    data-target="#cancel4598"
                                    data-toggle="modal"
                                  >
                                    <a
                                      data-original-title="Cancel Ride"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      className="btn menu-icon btn_delete"
                                    >
                                      <i className="fa fa-times" />
                                    </a>
                                  </span>
                                </td>
                              </tr>
                              <tr role="row" className="odd">
                                <td className="sorting_1"> 3</td>
                                <td>
                                  <a>
                                    <span
                                      title="Full Details"
                                      className="bookind-id"
                                    >
                                      {" "}
                                      4584{" "}
                                    </span>
                                  </a>
                                </td>
                                <td>
                                  De*****<br />
                                  Us********<br />
                                  ********
                                </td>
                                <td>
                                  el*****<br />
                                  22********<br />
                                  de********
                                </td>
                                <td>
                                  Blvrd Héroes del 5 de Mayo 3002, Mártires del
                                  Trabajo, 72260 Puebla, Pue., Mexico
                                </td>
                                <td>Plaza Dorada</td>
                                <td>Cash</td>
                                <td>Tuesday, Oct 24,01:40:38</td>
                                <td>
                                  Driver Arrived <br />
                                  01:40:57 AM
                                </td>
                                <td align="center">
                                  <span
                                    data-target="#cancel4584"
                                    data-toggle="modal"
                                  >
                                    <a
                                      data-original-title="Cancel Ride"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      className="btn menu-icon btn_delete"
                                    >
                                      <i className="fa fa-times" />
                                    </a>
                                  </span>
                                  <a
                                    target="_blank"
                                    data-original-title="Track"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    className="btn menu-icon btn_edit"
                                  >
                                    <i className="ion-android-locate" />
                                  </a>
                                </td>
                              </tr>
                              <tr role="row" className="even">
                                <td className="sorting_1"> 4</td>
                                <td>
                                  <a>
                                    <span
                                      title="Full Details"
                                      className="bookind-id"
                                    >
                                      {" "}
                                      4581{" "}
                                    </span>
                                  </a>
                                </td>
                                <td>
                                  De*****<br />
                                  Us********<br />
                                  ********
                                </td>
                                <td>
                                  <h4 style={{ color: "red" }}>Not Assign</h4>
                                </td>
                                <td>Colmado Paniagua</td>
                                <td>INVERSIONES GLOBAL MEJIA</td>
                                <td>Cash</td>
                                <td>Monday, Oct 23,23:59:40</td>
                                <td>
                                  New Booking <br />
                                  11:59:40 PM
                                </td>
                                <td align="center">
                                  <span
                                    data-target="#cancel4581"
                                    data-toggle="modal"
                                  >
                                    <a
                                      data-original-title="Cancel Ride"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      className="btn menu-icon btn_delete"
                                    >
                                      <i className="fa fa-times" />
                                    </a>
                                  </span>
                                </td>
                              </tr>
                              <tr role="row" className="odd">
                                <td className="sorting_1"> 5</td>
                                <td>
                                  <a>
                                    <span
                                      title="Full Details"
                                      className="bookind-id"
                                    >
                                      {" "}
                                      4572{" "}
                                    </span>
                                  </a>
                                </td>
                                <td>
                                  De*****<br />
                                  Us********<br />
                                  ********
                                </td>
                                <td>
                                  sa*****<br />
                                  sa********<br />
                                  sa********
                                </td>
                                <td>
                                  Mahja Ibn Salih, Badr 46354, Saudi Arabia
                                </td>
                                <td>بدر</td>
                                <td>Cash</td>
                                <td>Monday, Oct 23,11:59:39</td>
                                <td>
                                  Driver Arrived <br />
                                  12:00:21 PM
                                </td>
                                <td align="center">
                                  <span
                                    data-target="#cancel4572"
                                    data-toggle="modal"
                                  >
                                    <a
                                      data-original-title="Cancel Ride"
                                      data-toggle="tooltip"
                                      data-placement="top"
                                      className="btn menu-icon btn_delete"
                                    >
                                      <i className="fa fa-times" />
                                    </a>
                                  </span>
                                  <a
                                    target="_blank"
                                    data-original-title="Track"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    className="btn menu-icon btn_edit"
                                  >
                                    <i className="ion-android-locate" />
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
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
                            Showing 1 to 25 of 669 entries
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
                                <a>27</a>
                              </li>
                              <li
                                className="paginate_button next"
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
      </section>
    );
  }
}
export default TongQuan;
