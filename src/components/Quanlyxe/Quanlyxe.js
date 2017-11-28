import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Button } from "react-bootstrap";
import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import { connect } from "react-redux";
import { getListXe } from "./action";

import moment from "../../i18n/timeZone";

let countRow = 0;
class Quanlyxe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      idSelect: null,
      isDisableChitiet: true
    };
    this.props.getListXe();
  }
  onRowSelect(row, isSelected, e) {
    if (isSelected === true) {
      this.state.data.forEach(xe => {
        if (xe._id === row._id) {
          this.setState({
            dataSelect: xe,
            isDisableChitiet: false
          });
          return;
        }
      });
    }
    if (isSelected === false) {
      this.setState({
        dataSelect: null,
        isDisableChitiet: true
      });
    }
  }
  _mapData(data) {
    const result = [];
    data.forEach(xe => {
      const newXe = {
        createdAt: moment(data.createdAt).format("L"),
        numberplate: xe.numberplate,
        name: xe.name,
        productiontime: moment(xe.productiontime).format("L"),
        seat: xe.seat,
        _id: xe._id
      };
      result.push(newXe);
    });
    this.setState({
      data: result
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.managercoach.listxe !== null) {
      /**
       * "_id": "5a02501b519149067a8992a6",
            "updatedAt": "2017-11-08T00:30:19.752Z",
            "createdAt": "2017-11-08T00:30:19.752Z",
            "numberplate": "34N6-995965",
            "name": "KIA afternoon",
            "productiontime": "2004-03-03T17:00:00.000Z",
            "__v": 0,
            "seat": 60
       */
      this._mapData(nextProps.managercoach.listxe);
    }
  }
  render() {
    const selectRowProp = {
      mode: "radio",
      bgColor: "#4DD0E1", // you should give a bgcolor, otherwise, you can't regonize which row has been selected
      // hideSelectColumn: true, // enable hide selection column.
      clickToSelect: true, // you should enable clickToSelect, otherwise, you can't select column.
      onSelect: this.onRowSelect.bind(this)
    };
    return (
      <section className="content">
        <div className="wraper container-fluid">
          <div className="page-title">
            <h3 className="title">
              Quản lý xe<span style={{ color: "red", fontSize: 15 }}>
                <span />
              </span>
            </h3>

            <span className="tp_rht">
              <Button
                disabled={this.state.isDisableChitiet}
                bsStyle="info"
                onClick={() =>
                  this.props.history.push({
                    pathname: "/manager/coach/detail",
                    // search: '?chuyen=' + this.state.rowSelect,
                    state: { idChuyen: this.state.rowSelect }
                  })
                }
              >
                Chi tiết
              </Button>&nbsp;
            </span>
            <span className="tp_rht">
              <Button
                bsStyle="warning"
                onClick={() =>
                  this.props.history.push({
                    pathname: "/manager/coach/add"
                    // search: '?chuyen=' + this.state.rowSelect,
                  })
                }
              >
                Thêm xe
              </Button>&nbsp;
            </span>
          </div>
          <div className="row">
            <div className="col-md-12">
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
                            />
                          </div>
                          <div className="col-sm-6">
                            <div
                              id="datatable_filter"
                              className="dataTables_filter"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <BootstrapTable
                              pagination
                              data={this.state.data}
                              search={true}
                              multiColumnSearch={true}
                              options={{
                                noDataText:
                                  "Không có dữ liệu của bất kỳ xe nào",
                                exportCSVText: "Trích xuất ra excel",
                                csvFileName: "Danhsachnhanvien.csv"
                              }}
                              striped
                              hover
                              condensed
                              exportCSV
                              selectRow={selectRowProp}
                            >
                              <TableHeaderColumn dataField="_id" isKey hidden>
                                {" "}
                                ID
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="name">
                                Tên xe
                              </TableHeaderColumn>

                              <TableHeaderColumn dataField="numberplate">
                                Biển kiểm soát
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="productiontime">
                                Năm sản xuất
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="seat">
                                Số chỗ ngồi
                              </TableHeaderColumn>
                              <TableHeaderColumn dataField="createdAt">
                                Ngày mua
                              </TableHeaderColumn>
                            </BootstrapTable>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End row */}
        </div>
      </section>
    );
  }
}
export default connect(
  state => ({
    managercoach: state.managercoach
  }),
  { getListXe }
)(Quanlyxe);
