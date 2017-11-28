import userAPI from "../../API/api";

export const GET_LIST_KHACHHANG = "GET_LIST_KHACHHANG";
export const GET_LIST_KHACHHANG_ERROR = "GET_LIST_KHACHHANG_ERROR";
export const GET_LIST_KHACHHANG_SUCCESS = "GET_LIST_KHACHHANG_SUCCESS";

export const GET_LIST_KHACHHANG_INFO = "GET_LIST_KHACHHANG_INFO";
export const GET_LIST_KHACHHANG_INFO_SUCCESS =
  "GET_LIST_KHACHHANG_INFO_SUCCESS";
export const GET_LIST_KHACHHANG_INFO_ERROR = "GET_LIST_KHACHHANG_INFO_ERROR";

export function getListKhachHang() {
  return async dispatch => {
    dispatch({
      type: GET_LIST_KHACHHANG
    });
    try {
      const data = await userAPI.getListKhachHang();
      return dispatch({
        type: GET_LIST_KHACHHANG_SUCCESS,
        listkhachhang: data.data.result
      });
    } catch (error) {
      return dispatch({
        type: GET_LIST_KHACHHANG_ERROR,
        error
      });
    }
  };
}
export function getDetailKhachhang(id) {
  return async dispatch => {
    dispatch({
      type: GET_LIST_KHACHHANG_INFO
    });
    try {
      const data = await userAPI.getDetailKhachhang(id);
      return dispatch({
        type: GET_LIST_KHACHHANG_INFO_SUCCESS,
        userdetail: data.data.result
      });
    } catch (error) {
      return dispatch({
        type: GET_LIST_KHACHHANG_INFO_ERROR,
        error
      });
    }
  };
}
// export function getDetailKhachhang(id) {
// ()
