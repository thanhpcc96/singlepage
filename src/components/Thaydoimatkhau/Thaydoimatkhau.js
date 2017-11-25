import React, { Component } from "react";

class Changepassword extends Component {
  render() {
    return (
      <section className="content">
        <div className="wraper container-fluid">
          <div className="page-title">
            <h3 className="title">Thay đổi mật khẩu</h3>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <form>
                <div className="form-group">
                  <label>Mật khẩu cũ</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Mật khẩu cũ"
                    defaultValue
                    name="opwd"
                    id
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Mật khẩu mới</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Mật khẩu mới"
                    defaultValue
                    name="npwd"
                    id
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Nhập lại mật khẩu mới</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Nhập lại mật khẩu mới"
                    defaultValue
                    name="cpwd"
                    id="admin_password"
                    required
                  />
                </div>
                <button
                  className="btn btn-primary"
                  id="changepass"
                  name="changepass"
                  type="submit"
                >
                  Lưu
                </button>
              </form>
            </div>
            {/* .form */}
          </div>
        </div>
      </section>
    );
  }
}
export default Changepassword;
