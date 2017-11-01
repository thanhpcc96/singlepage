import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import {
  TongQuan,
  QuanLyNhanVien,
  Quanlykhachhang,
  Lichsugiaodich
} from "./content";
const Root = () => (
  <div>
    <Header />
    <Lichsugiaodich />
    <Footer />
  </div>
);
export default Root;
