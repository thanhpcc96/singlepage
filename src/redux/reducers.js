import { combineReducers } from "redux";
import {
  LoginReducer,
  QuanlyNhanVienReducer,
  QuanlykhachhangReducer,
  QuanlyxeReducer
} from "../components";

export default combineReducers({
  user: LoginReducer,
  manageruser: QuanlyNhanVienReducer,
  managerclient: QuanlykhachhangReducer,
  managercoach: QuanlyxeReducer
});
