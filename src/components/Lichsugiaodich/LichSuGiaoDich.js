import React, { Component } from "react";
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
            {/*start row content */}
            <div className="col-md-12">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="row">
                    {/*start row */}
                    <div className="col-md-12 col-sm-12 col-xs-12 mobtbl">
                      <div
                        id="datatable_wrapper"
                        className="dataTables_wrapper form-inline dt-bootstrap no-footer"
                      >
                        <div className="row">
                          {/*start row */}
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
                                Dòng
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
                        {/*end row */}
                        <div className="row">
                          {/*start row */}
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
                                    className="sorting_asc"
                                    tabIndex={0}
                                    aria-controls="datatable"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-sort="ascending"
                                    aria-label="User Name: activate to sort column descending"
                                    style={{ width: "71.0087px" }}
                                  >
                                    Tên khách hàng
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="datatable"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Total Amount: activate to sort column ascending"
                                    style={{ width: "49.0087px" }}
                                  >
                                    Tổng tiền
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="datatable"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Company Cut: activate to sort column ascending"
                                    style={{ width: "60.0087px" }}
                                  >
                                    Chuyến xe
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="datatable"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Driver Cut: activate to sort column ascending"
                                    style={{ width: "48.0087px" }}
                                  >
                                    Vé
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="datatable"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Waiting Charges: activate to sort column ascending"
                                    style={{ width: "51.0087px" }}
                                  >
                                    Lộ trình
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="datatable"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Time Charges: activate to sort column ascending"
                                    style={{ width: "51.0087px" }}
                                  >
                                    Loại giao dịch
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="datatable"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Payment Mode: activate to sort column ascending"
                                    style={{ width: "56.0087px" }}
                                  >
                                    Trạng thái thanh toán
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="datatable"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Payment Date: activate to sort column ascending"
                                    style={{ width: "69.0087px" }}
                                  >
                                    Thời gian giao dịch
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="datatable"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Full Details: activate to sort column ascending"
                                    style={{ width: 46 }}
                                  >
                                    Chi tiết
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr role="row" className="odd">
                                  <td className="sorting_1">???? ????? .</td>
                                  <td>سعید</td>
                                  <td>223</td>
                                  <td>22.30</td>
                                  <td>200.70</td>
                                  <td>0.00</td>
                                  <td>Cash</td>
                                  <td>04 Sep, 2017</td>
                                  <td>
                                    <label
                                      style={{ cursor: "pointer" }}
                                      className="label label-success"
                                      data-toggle="modal"
                                      data-target="#details991"
                                    >
                                      {" "}
                                      Full Details
                                    </label>
                                  </td>
                                </tr>
                                <tr role="row" className="even">
                                  <td className="sorting_1">???? ????? .</td>
                                  <td>Demo Driver</td>
                                  <td>223</td>
                                  <td>22.30</td>
                                  <td>200.70</td>
                                  <td>0.00</td>
                                  <td>Cash</td>
                                  <td>04 Sep, 2017</td>
                                  <td>
                                    <label
                                      style={{ cursor: "pointer" }}
                                      className="label label-success"
                                      data-toggle="modal"
                                      data-target="#details993"
                                    >
                                      {" "}
                                      Full Details
                                    </label>
                                  </td>
                                </tr>
                                <tr role="row" className="odd">
                                  <td className="sorting_1">???? ????? .</td>
                                  <td>سعید</td>
                                  <td>876</td>
                                  <td>87.60</td>
                                  <td>788.40</td>
                                  <td>0.00</td>
                                  <td>Cash</td>
                                  <td>04 Sep, 2017</td>
                                  <td>
                                    <label
                                      style={{ cursor: "pointer" }}
                                      className="label label-success"
                                      data-toggle="modal"
                                      data-target="#details994"
                                    >
                                      {" "}
                                      Full Details{" "}
                                    </label>
                                  </td>
                                </tr>
                                <tr role="row" className="even">
                                  <td className="sorting_1">Aamir .</td>
                                  <td>iosdriver</td>
                                  <td>80</td>
                                  <td>4.00</td>
                                  <td>76.00</td>
                                  <td>0.00</td>
                                  <td>Cash</td>
                                  <td>6 September 2017</td>
                                  <td>
                                    <label
                                      style={{ cursor: "pointer" }}
                                      className="label label-success"
                                      data-toggle="modal"
                                      data-target="#details1081"
                                    >
                                      {" "}
                                      Full Details{" "}
                                    </label>
                                  </td>
                                </tr>
                                <tr role="row" className="odd">
                                  <td className="sorting_1">Aamir .</td>
                                  <td>iosdriver</td>
                                  <td>80</td>
                                  <td>4.00</td>
                                  <td>76.00</td>
                                  <td>0.00</td>
                                  <td>Cash</td>
                                  <td>6 September 2017</td>
                                  <td>
                                    <label
                                      style={{ cursor: "pointer" }}
                                      className="label label-success"
                                      data-toggle="modal"
                                      data-target="#details1082"
                                    >
                                      {" "}
                                      Full Details{" "}
                                    </label>
                                  </td>
                                </tr>
                                <tr role="row" className="even">
                                  <td className="sorting_1">Aamir .</td>
                                  <td>iosdriver</td>
                                  <td>80</td>
                                  <td>4.00</td>
                                  <td>76.00</td>
                                  <td>0.00</td>
                                  <td>Cash</td>
                                  <td>6 September 2017</td>
                                  <td>
                                    <label
                                      style={{ cursor: "pointer" }}
                                      className="label label-success"
                                      data-toggle="modal"
                                      data-target="#details1083"
                                    >
                                      {" "}
                                      Full Details{" "}
                                    </label>
                                  </td>
                                </tr>
                                <tr role="row" className="odd">
                                  <td className="sorting_1">Aamir .</td>
                                  <td>iosdriver</td>
                                  <td>80</td>
                                  <td>4.00</td>
                                  <td>76.00</td>
                                  <td>0.00</td>
                                  <td>Cash</td>
                                  <td>6 September 2017</td>
                                  <td>
                                    <label
                                      style={{ cursor: "pointer" }}
                                      className="label label-success"
                                      data-toggle="modal"
                                      data-target="#details1084"
                                    >
                                      {" "}
                                      Full Details{" "}
                                    </label>
                                  </td>
                                </tr>
                                <tr role="row" className="even">
                                  <td className="sorting_1">Aamir .</td>
                                  <td>iosdriver</td>
                                  <td>80</td>
                                  <td>4.00</td>
                                  <td>76.00</td>
                                  <td>0.00</td>
                                  <td>Cash</td>
                                  <td>6 September 2017</td>
                                  <td>
                                    <label
                                      style={{ cursor: "pointer" }}
                                      className="label label-success"
                                      data-toggle="modal"
                                      data-target="#details1085"
                                    >
                                      {" "}
                                      Full Details{" "}
                                    </label>
                                  </td>
                                </tr>
                                <tr role="row" className="odd">
                                  <td className="sorting_1">Aamir .</td>
                                  <td>iosdriver</td>
                                  <td>80</td>
                                  <td>4.00</td>
                                  <td>76.00</td>
                                  <td>0.00</td>
                                  <td>Cash</td>
                                  <td>6 September 2017</td>
                                  <td>
                                    <label
                                      style={{ cursor: "pointer" }}
                                      className="label label-success"
                                      data-toggle="modal"
                                      data-target="#details1086"
                                    >
                                      {" "}
                                      Full Details{" "}
                                    </label>
                                  </td>
                                </tr>
                                <tr role="row" className="even">
                                  <td className="sorting_1">Aamir .</td>
                                  <td>iosdriver</td>
                                  <td>80</td>
                                  <td>4.00</td>
                                  <td>76.00</td>
                                  <td>0.00</td>
                                  <td>Cash</td>
                                  <td>6 September 2017</td>
                                  <td>
                                    <label
                                      style={{ cursor: "pointer" }}
                                      className="label label-success"
                                      data-toggle="modal"
                                      data-target="#details1087"
                                    >
                                      {" "}
                                      Full Details{" "}
                                    </label>
                                  </td>
                                </tr>
                                <tr role="row" className="odd">
                                  <td className="sorting_1">Aamir .</td>
                                  <td>iosdriver</td>
                                  <td>80</td>
                                  <td>4.00</td>
                                  <td>76.00</td>
                                  <td>0.00</td>
                                  <td>Cash</td>
                                  <td>6 September 2017</td>
                                  <td>
                                    <label
                                      style={{ cursor: "pointer" }}
                                      className="label label-success"
                                      data-toggle="modal"
                                      data-target="#details1088"
                                    >
                                      {" "}
                                      Full Details{" "}
                                    </label>
                                  </td>
                                </tr>
                                <tr role="row" className="even">
                                  <td className="sorting_1">Aamir .</td>
                                  <td>iosdriver</td>
                                  <td>80</td>
                                  <td>4.00</td>
                                  <td>76.00</td>
                                  <td>0.00</td>
                                  <td>Cash</td>
                                  <td>6 September 2017</td>
                                  <td>
                                    <label
                                      style={{ cursor: "pointer" }}
                                      className="label label-success"
                                      data-toggle="modal"
                                      data-target="#details1089"
                                    >
                                      {" "}
                                      Full Details{" "}
                                    </label>
                                  </td>
                                </tr>
                                <tr role="row" className="odd">
                                  <td className="sorting_1">Aamir .</td>
                                  <td>iosdriver</td>
                                  <td>80</td>
                                  <td>4.00</td>
                                  <td>76.00</td>
                                  <td>0.00</td>
                                  <td>Cash</td>
                                  <td>6 September 2017</td>
                                  <td>
                                    <label
                                      style={{ cursor: "pointer" }}
                                      className="label label-success"
                                      data-toggle="modal"
                                      data-target="#details1091"
                                    >
                                      {" "}
                                      Full Details{" "}
                                    </label>
                                  </td>
                                </tr>
                                <tr role="row" className="even">
                                  <td className="sorting_1">Aamir .</td>
                                  <td>iosdriver</td>
                                  <td>80</td>
                                  <td>4.00</td>
                                  <td>76.00</td>
                                  <td>0.00</td>
                                  <td>Cash</td>
                                  <td>6 September 2017</td>
                                  <td>
                                    <label
                                      style={{ cursor: "pointer" }}
                                      className="label label-success"
                                      data-toggle="modal"
                                      data-target="#details1092"
                                    >
                                      {" "}
                                      Full Details{" "}
                                    </label>
                                  </td>
                                </tr>
                                <tr role="row" className="odd">
                                  <td className="sorting_1">Aamir .</td>
                                  <td>iosdriver</td>
                                  <td>80</td>
                                  <td>4.00</td>
                                  <td>76.00</td>
                                  <td>0.00</td>
                                  <td>Cash</td>
                                  <td>6 September 2017</td>
                                  <td>
                                    <label
                                      style={{ cursor: "pointer" }}
                                      className="label label-success"
                                      data-toggle="modal"
                                      data-target="#details1093"
                                    >
                                      {" "}
                                      Full Details{" "}
                                    </label>
                                  </td>
                                </tr>
                                <tr role="row" className="even">
                                  <td className="sorting_1">Aamir .</td>
                                  <td>iosdriver</td>
                                  <td>80</td>
                                  <td>4.00</td>
                                  <td>76.00</td>
                                  <td>0.00</td>
                                  <td>Cash</td>
                                  <td>6 September 2017</td>
                                  <td>
                                    <label
                                      style={{ cursor: "pointer" }}
                                      className="label label-success"
                                      data-toggle="modal"
                                      data-target="#details1094"
                                    >
                                      {" "}
                                      Full Details{" "}
                                    </label>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        {/*end row */}
                        <div className="row">
                          {/*start row */}
                          <div className="col-sm-6">
                            <div
                              className="dataTables_info"
                              id="datatable_info"
                              role="status"
                              aria-live="polite"
                            >
                              Hiển thị trang 1 đến 25 trong 1,546 giao dịch
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
                                  <a>62</a>
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
                        {/*end row */}
                      </div>
                    </div>
                  </div>
                  {/*end row */}
                </div>
                {/*end panel-body */}
              </div>
              {/*end panel panel-default */}
            </div>
          </div>
          {/*end row content */}
        </div>
        {/*start wraper container-fluid */}
      </section>
    );
  }
}
export default Lichsugiaodich;
