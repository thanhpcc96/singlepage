import React, { Component } from "react";
class ThongBao extends Component {
  render() {
    return (
      <section class="content">
        <div className="wraper container-fluid">
          <div className="page-title">
            <h3 className="title">Send Push Notification</h3>
            <br />
          </div>
          <div className="row">
            <div className="col-sm-12">
              <ul className="nav-tabs navi navi_tabs">
                <li className="active">
                  <a data-toggle="tab" href="#all" aria-expanded="true">
                    <i className="fa fa-users" aria-hidden="true" />
                    <b>All</b>
                  </a>
                </li>
                <li className>
                  <a data-toggle="tab" href="#city" aria-expanded="false">
                    <i className="fa fa-building" aria-hidden="true" />
                    <b>City</b>
                  </a>
                </li>
                <li className>
                  <a data-toggle="tab" href="#single" aria-expanded="false">
                    <i className="fa fa-user" aria-hidden="true" />
                    <b>Single</b>
                  </a>
                </li>
              </ul>
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="tab-content m-0">
                    <div id="all" className="tab-pane active">
                      <div className="form">
                        <form
                          className="cmxform form-horizontal tasi-form"
                          method="post"
                          encType="multipart/form-data"
                          onsubmit="return validate1()"
                        >
                          <div className="form-group ">
                            <label className="control-label col-lg-2">
                              Message Heading
                            </label>
                            <div className="col-lg-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message Heading"
                                name="push_message_heading"
                                id="push_message_heading"
                              />
                            </div>
                          </div>
                          <div className="form-group ">
                            <label className="control-label col-lg-2">
                              Message
                            </label>
                            <div className="col-lg-6">
                              <textarea
                                className="form-control"
                                placeholder="Message"
                                name="messageAll"
                                id="messageAll"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          {/* <div class="form-group ">
                                        <label class="control-label col-lg-2">Upload Image</label>
                                        <div class="col-lg-6">
                                            <input type="file" class="form-control" placeholder="Upload Image" name="push_image" id="push_image">
                                        </div>
                                    </div> */}
                          <div className="form-group ">
                            <label className="control-label col-lg-2">
                              Message Web Url
                            </label>
                            <div className="col-lg-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message Web Url"
                                name="push_web_url"
                                id="push_web_url"
                              />
                            </div>
                          </div>
                          <div className="form-group ">
                            <label className="control-label col-lg-2">To</label>
                            <div className="col-lg-6">
                              <select
                                className="form-control"
                                name="appAll"
                                id="appAll"
                              >
                                <option value>--Please Select--</option>
                                <option value={1}>All Customers</option>
                                <option value={2}>All Drivers</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-lg-offset-2 col-lg-10">
                              <input
                                type="submit"
                                className=" btn btn-info col-md-4 col-sm-6 col-xs-12"
                                id="save"
                                name="sendAll"
                                defaultValue="Send Notification"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* .form */}
                    {/*CITY*/}
                    <div id="city" className="tab-pane">
                      <div className="form">
                        <form
                          className="cmxform form-horizontal tasi-form"
                          method="post"
                          encType="multipart/form-data"
                          onsubmit="return validate2()"
                        >
                          <div className="form-group ">
                            <label className="control-label col-lg-2">
                              Message Heading
                            </label>
                            <div className="col-lg-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message Heading"
                                name="push_message_heading"
                                id="push_message_heading"
                              />
                            </div>
                          </div>
                          <div className="form-group ">
                            <label className="control-label col-lg-2">
                              Message
                            </label>
                            <div className="col-lg-6">
                              <textarea
                                className="form-control"
                                placeholder="Message"
                                name="messageCity"
                                id="messageCity"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="form-group ">
                            <label className="control-label col-lg-2">
                              Message Web Url
                            </label>
                            <div className="col-lg-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message Web Url"
                                name="push_web_url"
                                id="push_web_url"
                              />
                            </div>
                          </div>
                          <div className="form-group ">
                            <label className="control-label col-lg-2">
                              City
                            </label>
                            <div className="col-lg-6">
                              <select
                                className="form-control"
                                name="city"
                                id="city_id"
                              >
                                <option value>--Please Select--</option>
                                <option value={3}>Dummy City</option>
                                <option value={56}>Gurugram</option>
                                <option value={57}>Delhi</option>
                                <option value={71}>Florida</option>
                                <option value={77}>Bur</option>
                                <option value={78}>Lagos</option>
                                <option value={79}>Riyadh</option>
                                <option value={80}>Dammam</option>
                                <option value={108}>Arifwala</option>
                                <option value={83}>North Miami Beach</option>
                                <option value={84}>Paris</option>
                                <option value={107}>Dhaka</option>
                                <option value={86}>Distrito de Lima</option>
                                <option value={87}>Oujda</option>
                                <option value={105}>Marrakech</option>
                                <option value={89}>Distrito de Lima</option>
                                <option value={91}>Phoenix</option>
                                <option value={104}>Nairobi</option>
                                <option value={103}>ياسوج</option>
                                <option value={106}>Nairobi</option>
                                <option value={97}>Karachi</option>
                                <option value={98}>Ibadan</option>
                                <option value={102}>México</option>
                                <option value={100}>Rawalpindi</option>
                                <option value={101}>Nakuru</option>
                                <option value={109}>Johannesburg</option>
                                <option value={110}>Chandigarh</option>
                                <option value={111}>New York</option>
                                <option value={112}>Khartoum</option>
                                <option value={113}>Patna</option>
                                <option value={114}>Chiclayo</option>
                                <option value={115}>Malerkotla</option>
                                <option value={116}>Patiala</option>
                                <option value={118}>Kanpur</option>
                                <option value={120}>Accra</option>
                                <option value={121}>Guangzhou</option>
                                <option value={122}>Salt Lake City</option>
                                <option value={123}>San Justo</option>
                                <option value={124}>Baghdad</option>
                                <option value={125}>Lubuklinggau</option>
                                <option value={126}>Buffalo</option>
                                <option value={127}>Islamabad</option>
                                <option value={128}>Baghdad</option>
                                <option value={129}>Bogotá</option>
                                <option value={130}>test</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-lg-offset-2 col-lg-10">
                              <input
                                type="submit"
                                className=" btn btn-info col-md-4 col-sm-6 col-xs-12"
                                id="save"
                                name="sendCity"
                                defaultValue="Send Notification"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* .form */}
                    {/*SINGLE*/}
                    <div id="single" className="tab-pane">
                      <div className="form">
                        <form
                          className="cmxform form-horizontal tasi-form"
                          method="post"
                          onsubmit="return validate3()"
                        >
                          <div className="form-group ">
                            <label className="control-label col-lg-2">
                              Message Heading
                            </label>
                            <div className="col-lg-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message Heading"
                                name="push_message_heading"
                                id="push_message_heading"
                              />
                            </div>
                          </div>
                          <div className="form-group ">
                            <label className="control-label col-lg-2">
                              Message
                            </label>
                            <div className="col-lg-6">
                              <textarea
                                className="form-control"
                                placeholder="Message"
                                name="messageSingle"
                                id="messageSingle"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="form-group ">
                            <label className="control-label col-lg-2">
                              Message Web Url
                            </label>
                            <div className="col-lg-6">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Message Web Url"
                                name="push_web_url"
                                id="push_web_url"
                              />
                            </div>
                          </div>
                          <div className="form-group ">
                            <label className="control-label col-lg-2">
                              Type
                            </label>
                            <div className="col-lg-6">
                              <select
                                className="form-control"
                                name="appSingle"
                                id="appSingle"
                                onchange="getId(this.value);"
                              >
                                <option value>--Please Select--</option>
                                <option value={1}>Customer</option>
                                <option value={2}>Driver</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group ">
                            <label className="control-label col-lg-2">To</label>
                            <div className="col-lg-6">
                              <select
                                className="form-control"
                                name="person"
                                id="person"
                              >
                                <option value>--Please Select--</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-lg-offset-2 col-lg-10">
                              <input
                                type="submit"
                                className=" btn btn-info col-md-4 col-sm-6 col-xs-12"
                                id="save"
                                name="sendSingle"
                                defaultValue="Send Notification"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
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
export default ThongBao;
