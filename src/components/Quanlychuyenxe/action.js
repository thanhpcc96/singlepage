import userAPI from "../../API/api";
export const GET_LIST_CHUYEN_XE = "GET_LIST_CHUYEN_XE";
export const GET_LIST_CHUYEN_XE_SUCCESS = "GET_LIST_CHUYEN_XE_SUCCESS";
export const GET_LIST_CHUYEN_XE_ERROR = "GET_LIST_CHUYEN_XE_ERROR";

export function getListChuyenXeAction() {
  return async dispatch => {
    dispatch({
      type: GET_LIST_CHUYEN_XE
    });
    try {
      const data = await userAPI.getListChuyenXe();
      return dispatch({
        type: GET_LIST_CHUYEN_XE_SUCCESS,
        listChuyenxe: data.data
      });
    } catch (error) {
      dispatch({
        type: GET_LIST_CHUYEN_XE_ERROR,
        error
      });
    }
  };
}
