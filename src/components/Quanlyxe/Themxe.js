import React, { Component } from "react";
import { DropdownList, DateTimePicker, NumberPicker } from "react-widgets";
import { connect } from "react-redux";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button,
  Alert
} from "react-bootstrap";
import {
  getListPhuXePhanCong,
  getListLaiXeChuaPhanCong
} from "../QuanLyNhanVien/action";
import { postCreateXe } from "./action";
class ThemXe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPhuXe: [],
      dataLaiXe: [],
      isLoading: true,
      tenxe: null,
      isTenXeError: false,
      bienkiemsoat: null,
      isBienKiemSoatError: false,
      namsanxuat: null,
      sochongoi: null,
      ngaymuaxe: null,
      idLaiXe: null,
      idPhuXe: null,
      isChongoiError: false
    };
    this.props.getListLaiXeChuaPhanCong();
    this.props.getListPhuXePhanCong();
  }
  _mapData(data, typeUser) {
    console.log("====================================");
    console.log(data);
    console.log("====================================");
    const result = [];
    data.forEach(user => {
      const newuser = {
        id: user._id,
        name: user.info.fullname + " - " + user.username
      };
      result.push(newuser);
    });
    if (typeUser === "LAIXE") {
      this.setState({
        dataLaiXe: result
      });
    }
    if (typeUser === "PHUXE") {
      this.setState({
        dataPhuXe: result
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.listaixe !== null) {
      this._mapData(nextProps.listlaixe, "LAIXE");
      this.setState({
        isLoading: false
      });
    }
    if (nextProps.listphuxe !== null) {
      this._mapData(nextProps.listphuxe, "PHUXE");
      this.setState({
        isLoading: false
      });
    }
  }
  _handleSubmit(event) {
    event.preventDefault();
    // 'numberplate', 'seat', 'name', 'productiontime',"idlaixe","idphuxe"
    const numberplate = this.state.bienkiemsoat,
      seat = this.state.seat,
      name = this.state.tenxe,
      productiontime = this.state.namsanxuat,
      idlaixe = this.state.idLaiXe,
      idphuxe = this.state.idPhuXe;
    const data = { numberplate, seat, name, productiontime, idlaixe, idphuxe };
    if (
      (this.state.isBienKiemSoatError === false,
      this.state.isChongoiError === false,
      this.state.namsanxuat !== null,
      idlaixe !== null,
      idphuxe !== null)
    ) {
      this.props.postCreateXe(data);
    }
  }
  render() {
    return (
      <section className="content">
        <div className="wraper container-fluid">
          <div className="page-title">
            <h3 className="title">Thêm xe</h3>
            <span className="tp_rht">
              <button
                onClick={() => this.props.history.goBack()}
                data-toggle="tooltip"
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
                    <form
                      className="cmxform form-horizontal tasi-form"
                      onSubmit={this._handleSubmit}
                    >
                      <FormGroup
                        controlId="formValidationNull"
                        validationState={
                          this.state.isTenXeError === true ? "error" : null
                        }
                        bsClass="form-group"
                      >
                        <ControlLabel bsClass="control-label col-lg-2">
                          Tên xe
                        </ControlLabel>
                        <div className="col-lg-10">
                          <FormControl
                            bsClass="form-control"
                            type="text"
                            placeholder="Nhập tên xe"
                            onChange={this._inputTenXe.bind(this)}
                          />
                          {this.state.isTenXeError === true ? (
                            <HelpBlock> Tên xe dài dài 1 tý </HelpBlock>
                          ) : (
                            undefined
                          )}
                          <FormControl.Feedback />
                        </div>
                      </FormGroup>
                      <FormGroup
                        controlId="formValidationNull"
                        validationState={
                          this.state.isBienKiemSoatError === true
                            ? "error"
                            : null
                        }
                        bsClass="form-group"
                      >
                        <ControlLabel bsClass="control-label col-lg-2">
                          Biển kiểm soát
                        </ControlLabel>
                        <div className="col-lg-10">
                          <FormControl
                            bsClass="form-control"
                            type="text"
                            placeholder="Nhập tên xe"
                            onChange={this._inputBienKiemSOat.bind(this)}
                          />
                          {this.state.isBienKiemSoatError === true ? (
                            <HelpBlock> Biển dài dài 1 tý </HelpBlock>
                          ) : (
                            undefined
                          )}
                          <FormControl.Feedback />
                        </div>
                      </FormGroup>
                      <FormGroup
                        controlId="formValidationNull"
                        validationState={null}
                        bsClass="form-group"
                      >
                        <ControlLabel bsClass="control-label col-lg-2">
                          Năm sản xuất
                        </ControlLabel>
                        <div className="col-lg-10">
                          <DateTimePicker
                            time={false}
                            onSelect={data =>
                              this.setState({ namsanxuat: data })
                            }
                            defaultValue={new Date("01/01/2010")}
                          />
                          <FormControl.Feedback />
                        </div>
                      </FormGroup>
                      <FormGroup
                        controlId="formValidationNull"
                        validationState={
                          this.state.isChongoiError === true ? "error" : "null"
                        }
                        bsClass="form-group"
                      >
                        <ControlLabel bsClass="control-label col-lg-2">
                          Số chỗ ngồi
                        </ControlLabel>
                        <div className="col-lg-10">
                          <FormControl
                            bsClass="form-control"
                            type="text"
                            placeholder="Nhập tên xe"
                            onChange={this._inputSoChoNgoi.bind(this)}
                          />
                          {this.state.isChongoiError === true ? (
                            <HelpBlock>Số và nhỏ nhất là 0</HelpBlock>
                          ) : (
                            undefined
                          )}
                          <FormControl.Feedback />
                        </div>
                      </FormGroup>
                      <FormGroup
                        controlId="formValidationNull"
                        validationState={null}
                        bsClass="form-group"
                      >
                        <ControlLabel bsClass="control-label col-lg-2">
                          Ngày mua
                        </ControlLabel>
                        <div className="col-lg-10">
                          <DateTimePicker
                            time={false}
                            onSelect={data =>
                              this.setState({ ngaymuaxe: data })
                            }
                          />
                          <FormControl.Feedback />
                        </div>
                      </FormGroup>

                      <FormGroup
                        controlId="formValidationNull"
                        validationState={null}
                        bsClass="form-group"
                      >
                        <ControlLabel bsClass="control-label col-lg-2">
                          Phân công cho lái xe
                        </ControlLabel>
                        <div className="col-lg-10">
                          <DropdownList
                            data={this.state.dataLaiXe}
                            valueField={"id"}
                            textField="name"
                            onSelect={data =>
                              this.setState({ idLaiXe: data.id })
                            }
                            filter
                          />
                        </div>
                      </FormGroup>
                      <FormGroup
                        controlId="formValidationNull"
                        validationState={null}
                        bsClass="form-group"
                      >
                        <ControlLabel bsClass="control-label col-lg-2">
                          Phân công cho phụ xe
                        </ControlLabel>
                        <div className="col-lg-10">
                          <DropdownList
                            data={this.state.dataPhuXe}
                            valueField={"id"}
                            textField="name"
                            onSelect={data =>
                              this.setState({ idPhuXe: data.id })
                            }
                            filter
                          />
                          <FormControl.Feedback />
                        </div>
                      </FormGroup>
                      <FormGroup
                        controlId="formValidationNull"
                        validationState={null}
                        bsClass="form-group"
                      >
                        <ControlLabel bsClass="control-label col-lg-2">
                          Phân công cho phụ xe
                        </ControlLabel>
                        <div className="col-lg-10">
                          <Button bsStyle="info" type="submit">
                            {" "}
                            Thêm xe
                          </Button>
                          <FormControl.Feedback />
                        </div>
                      </FormGroup>
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
  _inputTenXe(event) {
    if (event.target.value.toString().lenght > 3) {
      this.setState({
        tenxe: event.target.value.lenght,
        isTenXeError: false
      });
    } else {
      this.setState({
        tenxe: null
      });
    }
  }
  _inputBienKiemSOat(event) {
  
      this.setState({
        bienkiemsoat: event.target.value,
        isBienKiemSoatError: false
      });
    
    // } else {
    //   this.setState({
    //     bienkiemsoat: null,
    //     isBienKiemSoatError: true
    //   });
    // }
  }
  _inputSoChoNgoi(event) {
    const chuan = /^[0-9-+]+$/;

    if (chuan.test(event.target.value)) {
      if (parseInt(event.target.value) > 0) {
        this.setState({
          sochongoi: event.target.value.lenght,
          isChongoiError: false
        });
      }
    } else {
      this.setState({
        sochongoi: null,
        isChongoiError: true
      });
    }
  }
}
export default connect(
  state => ({
    listphuxe: state.manageruser.listphuxe,
    listlaixe: state.manageruser.listlaixe
  }),
  {
    getListLaiXeChuaPhanCong,
    getListPhuXePhanCong,
    postCreateXe
  }
)(ThemXe);
