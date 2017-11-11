import React, { Component } from "react";
class Admin extends Component {
  render() {
    return (
      <section className="content">
        <div className="wraper container-fluid">
          <div className="page-title">
            <h3 className="title">Thêm tài khoản quản trị</h3>
            <span className="tp_rht">
              <a
                data-toggle="tooltip"
                title
                className="btn btn-default"
                data-original-title="Back"
              >
                <i className="fa fa-reply" />
              </a>
            </span>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="form">
                    <form
                      className="cmxform form-horizontal tasi-form"
                      method="post"
                      onsubmit="return validatelogin()"
                    >
                      <div className="form-group ">
                        <label className="control-label col-lg-2">
                          First Name *
                        </label>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            name="admin_fname"
                            id="admin_fname"
                          />
                        </div>
                      </div>
                      <div className="form-group ">
                        <label className="control-label col-lg-2">
                          Last Name *
                        </label>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            name="admin_lname"
                            id="admin_lname"
                          />
                        </div>
                      </div>
                      <div className="form-group ">
                        <label className="control-label col-lg-2">
                          Email *
                        </label>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            name="admin_email"
                            id="admin_email"
                          />
                        </div>
                      </div>
                      <div className="form-group ">
                        <label className="control-label col-lg-2">
                          Phone *
                        </label>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="phone"
                            name="admin_phone"
                            id="admin_phone"
                          />
                        </div>
                      </div>
                      <div className="form-group ">
                        <label className="control-label col-lg-2">
                          Login Username *
                        </label>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Login Username"
                            name="admin_username"
                            id="admin_username"
                          />
                        </div>
                      </div>
                      <div className="form-group ">
                        <label className="control-label col-lg-2">
                          Password *
                        </label>
                        <div className="col-lg-6">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="admin_password"
                            id="admin_password"
                          />
                        </div>
                      </div>
                      <div className="form-group ">
                        <label className="control-label col-lg-2">
                          Group *
                        </label>
                        <div className="col-lg-6">
                          <select
                            className="form-control"
                            name="admin_role"
                            id="admin_role"
                          >
                            <option value>-- Select --</option>
                            <option value={1}>Super Administrator</option>
                            <option value={2}>Dispatcher Admin</option>
                            <option value={3}>Billing Admin</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-lg-offset-2 col-lg-10">
                          <input
                            type="submit"
                            className=" btn btn-info col-md-4 col-sm-6 col-xs-12 black-background white"
                            id="save"
                            name="save"
                            defaultValue="Save"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* .form */}
                </div>
                {/* panel-body */}
              </div>
              {/* panel */}
            </div>
            {/* col */}
          </div>
          {/* End row */}
        </div>
      </section>
    );
  }
}
export default Admin;
