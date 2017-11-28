import React, { Component } from "react";
class ThemXe extends Component {
  render() {
    console.log("============================================");
    console.log(this.props);
    console.log("============================================");
    return (
      <section className="content">
        <div className="wraper container-fluid">
          <div className="page-title">
            <h3 className="title">Thêm xe</h3>
            <span className="tp_rht">
              <button
                onClick={() => this.props.history.goBack()}
                data-toggle="tooltip"
                title
                className="btn btn-default"
                data-original-title="Back"
              >
                <i className="fa fa-reply" />
              </button>
            </span>
          </div>{" "}
          {/*end pagetitle */}
          <div className="row">
            <div className="col-sm-12">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className=" form">
                    <form className="cmxform form-horizontal tasi-form">
                      <div className="form-group ">
                        <label
                          htmlFor="lastname"
                          className="control-label col-lg-2"
                        >
                          Tên xe
                        </label>
                        <div className="col-lg-10">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Tên xe"
                            name="driver_name"
                            id="driver_name"
                          />
                        </div>
                      </div>
                      <div className="form-group ">
                        <label
                          htmlFor="lastname"
                          className="control-label col-lg-2"
                        >
                          Biển kiểm soát
                        </label>
                        <div className="col-lg-10">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Biển kiểm soát"
                            name="driver_email"
                            id="driver_email"
                          />
                        </div>
                      </div>
                      <div className="form-group ">
                        <label
                          htmlFor="lastname"
                          className="control-label col-lg-2"
                        >
                          Năm sản xuất
                        </label>
                        <div className="col-lg-10">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Năm sản xuất"
                            name="driver_phone"
                            id="driver_phone"
                          />
                        </div>
                      </div>
                      <div className="form-group ">
                        <label
                          htmlFor="lastname"
                          className="control-label col-lg-2"
                        >
                          Số chỗ ngồi
                        </label>
                        <div className="col-lg-10">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Số chỗ ngồi"
                            name="driver_cmt"
                            id="driver_cmt"
                          />
                        </div>
                      </div>
                      <div className="form-group ">
                        <label
                          htmlFor="lastname"
                          className="control-label col-lg-2"
                        >
                          Ngày mua
                        </label>
                        <div className="col-lg-10">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Ngày mua"
                            name="driver_password"
                            id="driver_password"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="col-lg-offset-2 col-lg-10">
                          <input
                            type="submit"
                            className=" btn btn-info col-md-4 col-sm-6 col-xs-12"
                            id="save"
                            name="save"
                            defaultValue="Save"
                          />
                        </div>
                      </div>
                    </form>
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
export default ThemXe;
