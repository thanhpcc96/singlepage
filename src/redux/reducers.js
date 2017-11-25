import { combineReducers } from "redux";
import { LoginReducer, QuanLyChuyenXeReducer } from "../components";

export default combineReducers({
  user: LoginReducer,
  managerchuyen: QuanLyChuyenXeReducer
});
