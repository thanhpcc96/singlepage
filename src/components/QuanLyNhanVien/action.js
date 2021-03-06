import userAPI from "../../API/api";
import { GET_ALL_XE_ERROR } from "../Quanlyxe/action";

export const GET_LIST_USER = "GET_LIST_USER";
export const GET_LIST_USER_SUCCESSS = "GET_LIST_USER_SUCCESSS";
export const GET_LIST_USER_ERROR = "GET_LIST_USER_ERROR";

export const GET_DETAIL_USER = "GET_DETAIL_USER";
export const GET_DETAIL_USER_SUCCESS = "GET_DETAIL_USER_SUCCESS";
export const GET_DETAIL_USER_ERROR = "GET_DETAIL_USER_ERROR";

export const POST_UPLOAD_USER = "POST_UPLOAD_USER";
export const POST_UPLOAD_USER_SUCCESS = "POST_UPLOAD_USER_SUCCESS";
export const POST_UPLOAD_USER_ERROR = "POST_UPLOAD_USER_ERROR";

export const POST_UPDATE_USER = "POST_UPDATE_USER";
export const POST_UPDATE_USER_SUCCESS = "POST_UPDATE_USER_SUCCESS";
export const POST_UPDATE_USER_ERROR = "POST_UPDATE_USER_ERROR";

export const POST_DELETE_USER = "POST_DELETE_USER";
export const POST_DELETE_USER_SUCCESS = "POST_DELETE_USER_SUCCESS";
export const POST_DELETE_USER_ERROR = "POST_DELETE_USER_ERROR";

export const POST_CREATE_USER = "POST_CREATE_USER";
export const POST_CREATE_USER_SUCCESS = "POST_CREATE_USER_SUCCESS";
export const POST_CREATE_USER_ERROR = "POST_CREATE_USER_ERROR";

export const GET_LIST_LAIXE = "GET_LIST_LAIXE";
export const GET_LIST_LAIXE_ERROR = "GET_LIST_LAIXE_ERROR";
export const GET_LIST_LAIXE_SUCCESS = "GET_LIST_LAIXE_SUCCESS";

export const GET_LIST_PHUXE = "GET_LIST_PHUXE";
export const GET_LIST_PHUXE_ERROR = "GET_LIST_PHUXE_ERROR";
export const GET_LIST_PHUXE_SUCCESS = "GET_LIST_PHUXE_SUCCESS";

export function getListUserAction() {
  return async dispatch => {
    dispatch({ type: GET_LIST_USER });
    try {
      const data = await userAPI.getListUsers();
      return dispatch({
        type: GET_LIST_USER_SUCCESSS,
        listuser: data.data
      });
    } catch (error) {
      return dispatch({
        type: GET_LIST_USER_ERROR,
        error
      });
    }
  };
}
export function getDetailUserAction(id) {
  return async dispatch => {
    dispatch({
      type: GET_DETAIL_USER
    });
    try {
      const data = await userAPI.getDetailUser(id);
      return dispatch({
        type: GET_DETAIL_USER_SUCCESS,
        userdetail: data.data.result
      });
    } catch (error) {
      return dispatch({
        type: GET_DETAIL_USER_ERROR,
        error
      });
    }
  };
}

export function postUploadUserAction(formData) {
  console.log("====================formData================");
  console.log(formData);
  console.log("====================================");
  return async dispatch => {
    dispatch({
      type: POST_UPLOAD_USER
    });
    try {
      const data = await userAPI.postUploadImage(formData);
      console.log("================respons====================");
      console.log(data);
      console.log("====================================");

      // const data =await userAPI.postUploadImage(formData);
      console.log("====================================");
      console.log(data);
      console.log("====================================");
      return dispatch({
        type: POST_UPLOAD_USER_SUCCESS,
        data
      });
    } catch (error) {
      return dispatch({
        type: POST_UPLOAD_USER_ERROR,
        error
      });
    }
  };
}

export function updateInfo(data) {
  return async dispatch => {
    dispatch({
      type: POST_UPDATE_USER
    });
    try {
      const res = await userAPI.updateInfoUser(data);
      return dispatch({
        type: POST_UPDATE_USER_SUCCESS,
        userupdate: res.data.result
      });
    } catch (error) {
      dispatch({
        type: POST_UPDATE_USER_ERROR,
        error
      });
    }
  };
}
export function deleteUser(id) {
  return async dispatch => {
    dispatch({
      type: POST_DELETE_USER
    });
    try {
      const data = await userAPI.deleteUser(id);
      return dispatch({
        type: POST_DELETE_USER_SUCCESS,
        userdelete: data.data
      });
    } catch (error) {
      dispatch({
        type: POST_DELETE_USER_ERROR,
        error
      });
    }
  };
}
export function postCreateUser(params) {
  return async dispatch => {
    dispatch({ type: POST_CREATE_USER });
    try {
      const data = await userAPI.postCreateUSer(params);
      return dispatch({
        type: POST_CREATE_USER_SUCCESS,
        usernew: data.data.result
      });
    } catch (error) {
      return dispatch({
        type: POST_CREATE_USER_ERROR,
        error
      });
    }
  };
}

export function getListLaiXeChuaPhanCong() {
  return async dispatch => {
    dispatch({
      type: GET_LIST_LAIXE
    });
    try {
      const data = await userAPI.getListLaiXe();
      return dispatch({
        type: GET_LIST_LAIXE_SUCCESS,
        listlaixe: data.data.result
      });
    } catch (error) {
      return dispatch({
        type: GET_LIST_LAIXE_ERROR,
        error
      });
    }
  };
}
export function getListPhuXePhanCong() {
  return async dispatch => {
    dispatch({
      type: GET_LIST_PHUXE
    });
    try {
      const data = await userAPI.getListPhuXe();
      return dispatch({
        type: GET_LIST_PHUXE_SUCCESS,
        listphuxe: data.data.result
      });
    } catch (error) {
      return dispatch({
        type: GET_LIST_PHUXE_ERROR,
        error
      });
    }
  };
}
