import React, { Component } from "react";
class Profile extends Component {
  render() {
    return (
      <section className="content">
        <div className="wraper container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div
                className="bg-picture"
                style={{ backgroundImage: 'url("../uploads/admin/cover.jpg")' }}
              >
                <span className="bg-picture-overlay" />
                {/* overlay */}
                {/* meta */}
                <div className="box-layout meta bottom">
                  <div className="col-sm-6 clearfix">
                    <span className="img-wrapper pull-left m-r-15">
                      <img
                        src={process.env.PUBLIC_URL + "/assets/img/user.png"}
                        style={{ width: 64 }}
                        className="br-radius"
                      />
                    </span>
                    <div className="media-body">
                      <h3 className="text-white mb-2 m-t-10 ellipsis">
                        Apporio
                      </h3>
                      <h5 className="text-white">Gurugram</h5>
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
                  <ul className="nav nav-tabs profile-tabs">
                    <li className="active">
                      <a data-toggle="tab">About Me</a>
                    </li>
                    <li className>
                      <a data-toggle="tab">Edit Personal info</a>
                    </li>
                    <li className>
                      <a data-toggle="tab">Edit Address</a>
                    </li>
                    <li className>
                      <a data-toggle="tab">Social Media</a>
                    </li>
                  </ul>
                  <div className="tab-content m-0">
                    <div id="aboutme" className="tab-pane active">
                      <div className="profile-desk">
                        <h1>Apporio&nbsp;Infolabs</h1>
                        <span className="designation" />
                        <table className="table table-condensed">
                          <thead>
                            <tr>
                              <th colSpan={3}>
                                <h3>Contact Information</h3>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <b>Phone</b>
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
                                <a className="ng-binding">hello@apporio.com</a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <b>Skype</b>
                              </td>
                              <td className="ng-binding">apporio</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Facebook</b>
                              </td>
                              <td>
                                <a className="ng-binding">
                                  https://www.facebook.com/apporio/
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
                      </div>
                      {/* end profile-desk */}
                    </div>
                    {/* settings */}
                    <div id="personal" className="tab-pane">
                      <div className="user-profile-content">
                        <form
                          role="form"
                          method="post"
                          onsubmit="return validatelogin()"
                        >
                          <div className="form-group">
                            <label>First Name</label>
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
                            <label>Last Name</label>
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
                            <label>Phone Number</label>
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
                            <label>Email Address</label>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email Address"
                              defaultValue="hello@apporio.com"
                              name="admin_email"
                              id="admin_email"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>Skype Id</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Skype Id"
                              defaultValue="apporio"
                              name="admin_skype"
                              id="admin_skype"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label>Description</label>
                            <textarea
                              style={{ height: 125 }}
                              id="admin_desc"
                              name="admin_desc"
                              className="form-control"
                              defaultValue={
                                "Apporio Infolabs Pvt. Ltd. is an ISO certified mobile application and web application development company in India. We provide end to end solution from designing to development of the software. "
                              }
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
                      </div>
                    </div>
                    <div id="address" className="tab-pane">
                      <div className="user-profile-content">
                        <form
                          role="form"
                          method="post"
                          onsubmit="return validatelogin()"
                        >
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
                      </div>
                    </div>
                    <div id="social" className="tab-pane">
                      <div className="user-profile-content">
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
export default Profile;
