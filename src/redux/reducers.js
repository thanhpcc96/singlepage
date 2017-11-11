import { combineReducers } from "redux";
import { LoginReducer } from "../components";

export default combineReducers({
  user: LoginReducer
});
