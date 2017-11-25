import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import { connect } from "react-redux";
import { getListXe } from "./action";

import moment from "../../i18n/timeZone";

let countRow = 0;
class Quanlyxe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      idSelect: null
    };
    this.props.getListXe();
  }
  onRowSelect(row, isSelected, e) {
    this.setState({
      idSelect: null
    });
    countRow++;
    if (isSelected === true && countRow === 1) {
      this.setState({
        idSelect: row._id
      });
    }
    if (isSelected && countRow > 1) {
      alert("Chưa hỗ trợ chọn nhiều hàng!");
      return false;
    }
    if (isSelected === false) {
      countRow = 0;
    }
  }
  _mapData(data) {
    const result = [];
    data.forEach(xe => {
      const newXe = {
        createdAt: moment(data.createdAt).format("L, LT"),
        numberplate: xe.numberplate,
        name: xe.name,
        productiontime: moment(xe.productiontime).format("L, LT"),
        seat: xe.seat
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
      mode: "checkbox",
      bgColor: "#4DD0E1", // you should give a bgcolor, otherwise, you can't regonize which row has been selected
      hideSelectColumn: true, // enable hide selection column.
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
                                noDataText: "Khong co du xe nao ca!",
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
