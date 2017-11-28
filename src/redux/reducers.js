import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import {
  LoginReducer,
  QuanlyNhanVienReducer,
  QuanlykhachhangReducer,
  QuanlyxeReducer,
  QuanLyChuyenXeReducer,
  QuanlytuyenReducer
} from "../components";

export default combineReducers({
  form: formReducer,
  user: LoginReducer,
  manageruser: QuanlyNhanVienReducer,
  managerclient: QuanlykhachhangReducer,
  managercoach: QuanlyxeReducer,
  managerchuyen: QuanLyChuyenXeReducer,
  managertuyen: QuanlytuyenReducer,
});
