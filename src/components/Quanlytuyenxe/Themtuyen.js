import React, { Component } from "react";
class ThemTuyen extends Component {
  render() {
    console.log("============================================");
    console.log(this.props);
    console.log("============================================");
    return (
      <section className="content">
        <div className="wraper container-fluid">
          <div className="page-title">
            <h3 className="title">Thêm tuyến</h3>
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
                          Điểm bắt đầu
                        </label>
                        <div className="col-lg-10">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Điểm bắt đầu"
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
                          Điểm cuối
                        </label>
                        <div className="col-lg-10">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Điểm cuối"
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
                          Lộ trình
                        </label>
                        <div className="col-lg-10">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Lộ trình"
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
                          Thời gian dự kiến
                        </label>
                        <div className="col-lg-10">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Thời gian dự kiến"
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
                          Vị trí trạm kiểm tra
                        </label>
                        <div className="col-lg-10">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Vị trí trạm kiểm tra"
                            name="driver_password"
                            id="driver_password"
                          />
                        </div>
                      </div>
                      <div className="form-group ">
                        <label
                          htmlFor="lastname"
                          className="control-label col-lg-2"
                        >
                          Xe phân công
                        </label>
                        <div className="col-lg-10">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Xe phân công"
                            name="xephancong"
                            id="xephancong"
                          />
                        </div>
                      </div>
                      <div className="form-group ">
                        <label className="control-label col-lg-2">
                          Tỉnh/Thành phố
                        </label>
                        <div className="col-lg-10">
                          <select
                            className="form-control"
                            name="city_id"
                            id="city_id"
                          >
                            <option value>--Select City Of Driver--</option>
                            <option value={1}>An Giang</option>
                            <option value={2}>Bà Rịa - Vũng Tàu</option>
                            <option value={3}>Bắc Kạn</option>
                            <option value={4}>Bắc Giangn</option>
                            <option value={5}>Bạc Liêu</option>
                            <option value={6}>Bắc Ninh</option>
                            <option value={7}>Bến Tre</option>
                            <option value={8}>Bình Dương</option>
                            <option value={9}>Bình Định</option>
                            <option value={10}>Bình Phước</option>
                            <option value={11}>Bình Thuận</option>
                            <option value={12}>Cà Mau</option>
                            <option value={13}>Cần Thơ</option>
                            <option value={14}>Cao Bằng</option>
                            <option value={15}>Đà Nẵng</option>
                            <option value={16}>Đắk Lắk</option>
                            <option value={17}>Đắk Nông</option>
                            <option value={18}>Điện Biên</option>
                            <option value={19}>Đồng Nai</option>
                            <option value={20}>Đồng Tháp</option>
                            <option value={21}>Gia Lai</option>
                            <option value={22}>Hà Giang</option>
                            <option value={23}>Hà Nam</option>
                            <option value={24}>Hà Nội</option>
                            <option value={25}>Hà Tĩnh</option>
                            <option value={26}>Hải Dương</option>
                            <option value={27}>Hải Phòng</option>
                            <option value={28}>Hậu Giang</option>
                            <option value={29}>Hồ Chí Minh</option>
                            <option value={30}>Hòa Bình</option>
                            <option value={31}>Hưng Yên</option>
                            <option value={32}>Khánh Hòa</option>
                            <option value={33}>Kiên Giang</option>
                            <option value={34}>Kon Tum</option>
                            <option value={35}>Lai Châu</option>
                            <option value={36}>Lâm Đồng</option>
                            <option value={37}>Lạng Sơn</option>
                            <option value={38}>Lào Cai</option>
                            <option value={39}>Long An</option>
                            <option value={40}>Nam Định</option>
                            <option value={41}>Nghệ An</option>
                            <option value={42}>Ninh Bình</option>
                            <option value={43}>Ninh Thuận</option>
                            <option value={44}>Phú Thọ</option>
                            <option value={45}>Phú Yên</option>
                            <option value={46}>Quảng Bình</option>
                            <option value={47}>Quảng Nam</option>
                            <option value={48}>Quảng Ngãi</option>
                            <option value={49}>Quảng Ninh</option>
                            <option value={50}>Quảng Trị</option>
                            <option value={51}>Sóc Trăng</option>
                            <option value={52}>Sơn La</option>
                            <option value={53}>Tây Ninh</option>
                            <option value={54}>Thái Bình</option>
                            <option value={55}>Thái Nguyên</option>
                            <option value={56}>Thanh Hóa</option>
                            <option value={57}>Thừa Thiên Huế</option>
                            <option value={58}>Tiền Giang</option>
                            <option value={59}>Trà Vinh</option>
                            <option value={60}>Tuyên Quang</option>
                            <option value={61}>Vĩnh Long</option>
                            <option value={62}>Vĩnh Phúc</option>
                            <option value={63}>Yên Bái</option>
                          </select>
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
export default ThemTuyen;
