import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import {
  LoginReducer,
  QuanlyNhanVienReducer,
  QuanlykhachhangReducer,
  QuanlyxeReducer
} from "../components";

export default combineReducers({
  form: formReducer,
  user: LoginReducer,
  manageruser: QuanlyNhanVienReducer,
  managerclient: QuanlykhachhangReducer,
  managercoach: QuanlyxeReducer
});
