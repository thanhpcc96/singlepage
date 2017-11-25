import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
class ChitietAdmin extends Component {
  render() {
    return (
      <section className="content">
        <div className="wraper container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div
                className="bg-picture"
                // style={{ backgroundImage: 'url("../uploads/admin/cover.jpg")' }}
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL
                  }/assets/img/cover.jpg)`
                }}
              >
                {" "}
                <span className="bg-picture-overlay" />
                {/* overlay */}
                {/* meta */}
                <div className="box-layout meta bottom">
                  <div className="col-sm-6 clearfix">
                    {" "}
                    <span className="img-wrapper pull-left m-r-15">
                      {" "}
                      <img
                        src={process.env.PUBLIC_URL + "/assets/img/user.png"}
                        style={{ width: 64 }}
                        className="br-radius"
                      />
                    </span>
                    <div className="media-body">
                      <h3 className="text-white mb-2 m-t-10 ellipsis">
                        HẢI ÂU
                      </h3>
                      <h5 className="text-white">Hảo Nguyễn</h5>
                    </div>
                  </div>
                </div>
                {/*/ meta */}
              </div>
            </div>
          </div>
          <div className="row m-t-30">
            <div className="col-sm-12">
              <div className="panel panel-default p-0">
                <div className="panel-body p-0">
                  <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Thông tin">
                      <table className="table table-condensed">
                        <thead>
                          <tr>
                            <th colSpan={3}>
                              <h3>Thông tin liên lạc</h3>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <b>Số điện thoại</b>
                            </td>
                            <td>
                              <a className="ng-binding">9560506619</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Email</b>
                            </td>
                            <td>
                              <a className="ng-binding">hello@gmail.com</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Skype</b>
                            </td>
                            <td className="ng-binding">------</td>
                          </tr>
                          <tr>
                            <td>
                              <b>Facebook</b>
                            </td>
                            <td>
                              <a className="ng-binding">
                                https://www.facebook.com/hao.63/
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Twitter</b>
                            </td>
                            <td>
                              <a className="ng-binding">------</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Google +</b>
                            </td>
                            <td>
                              <a className="ng-binding">------</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Instagram</b>
                            </td>
                            <td>
                              <a className="ng-binding">------</a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b>Dribble</b>
                            </td>
                            <td>
                              <a className="ng-binding">------</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Tab>
                    <Tab eventKey={2} title="Sửa thông tin">
                      <form>
                        <div className="form-group">
                          <label>Họ tên</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            defaultValue="Apporio"
                            name="admin_fname"
                            id="admin_fname"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label>Số cmt</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            defaultValue="Infolabs"
                            name="admin_lname"
                            id="admin_lname"
                          />
                        </div>
                        <div className="form-group">
                          <label>Số điện thoại</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            defaultValue={9560506619}
                            name="admin_phone"
                            id="admin_phone"
                          />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                            defaultValue="hello@gmail.com"
                            name="admin_email"
                            id="admin_email"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label>Miêu tả</label>
                          <textarea
                            style={{ height: 125 }}
                            id="admin_desc"
                            name="admin_desc"
                            className="form-control"
                            defaultValue={"Thông tin "}
                          />
                        </div>
                        <button
                          className="btn btn-primary"
                          id="personal"
                          name="personal"
                          type="submit"
                        >
                          Save
                        </button>
                      </form>
                    </Tab>
                    {/*<Tab eventKey={3} title="Chỉnh sửa địa chỉ">
                      <form>
                        <div className="form-group">
                          <label>Address</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Address"
                            defaultValue="#467, Spaze iTech Park"
                            name="admin_add"
                            id="admin_add"
                          />
                        </div>
                        <div className="form-group">
                          <label>Country</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Country"
                            defaultValue="India"
                            name="admin_country"
                            id="admin_country"
                          />
                        </div>
                        <div className="form-group">
                          <label>State</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="State"
                            defaultValue="Haryana"
                            name="admin_state"
                            id="admin_state"
                          />
                        </div>
                        <div className="form-group">
                          <label>City</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="City"
                            defaultValue="Gurugram"
                            name="admin_city"
                            id="admin_city"
                          />
                        </div>
                        <div className="form-group">
                          <label>Zip Code</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Zip Code"
                            defaultValue={122018}
                            name="admin_zip"
                            id="admin_zip"
                          />
                        </div>
                        <button
                          className="btn btn-primary"
                          name="address"
                          id="address"
                          type="submit"
                        >
                          Save
                        </button>
                      </form>
                    </Tab>
                    <Tab eventKey={4} title="Liên kết mạng xã hội">
                      <form
                        role="form"
                        method="post"
                        onsubmit="return validatelogin()"
                      >
                        <div className="form-group">
                          <label>Facebook</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Facebook"
                            defaultValue="https://www.facebook.com/apporio/"
                            name="admin_fb"
                            id="admin_fb"
                          />
                        </div>
                        <div className="form-group">
                          <label>Twitter</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Twitter"
                            defaultValue
                            name="admin_tw"
                            id="admin_tw"
                          />
                        </div>
                        <div className="form-group">
                          <label>Google Plus</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="State"
                            defaultValue
                            name="admin_goo"
                            id="admin_goo"
                          />
                        </div>
                        <div className="form-group">
                          <label>Instagram</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Instagram"
                            defaultValue
                            name="admin_insta"
                            id="admin_insta"
                          />
                        </div>
                        <div className="form-group">
                          <label>Dribble</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Dribble"
                            defaultValue
                            name="admin_dribble"
                            id="admin_dribble"
                          />
                        </div>
                        <button
                          className="btn btn-primary"
                          name="social"
                          id="social"
                          type="submit"
                        >
                          Save
                        </button>
                      </form>
                          </Tab>*/}
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ChitietAdmin;
