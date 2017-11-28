import userAPI from "../../API/api";

export const GET_LIST_TUYEN = "GET_LIST_TUYEN";
export const GET_LIST_TUYEN_SUCCESS = "GET_LIST_TUYEN_SUCCESS";
export const GET_LIST_TUYEN_ERROR = "GET_LIST_TUYEN_ERROR";

export const GET_LIST_TUYEN_INFO = "GET_LIST_TUYEN";
export const GET_LIST_TUYEN_INFO_SUCCESS = "GET_LIST_TUYEN_INFO_SUCCESS";
export const GET_LIST_TUYEN_INFO_ERROR = "GET_LIST_TUYEN_INFO_ERROR";

export function getListTuyenXeAction() {
  return async dispatch => {
    dispatch({
      type: GET_LIST_TUYEN
    });
    try {
      const data = await userAPI.getListTuyen();
      return dispatch({
        type: GET_LIST_TUYEN_SUCCESS,
        listTuyen: data.data
      });
    } catch (error) {
      return dispatch({
        type: GET_LIST_TUYEN_ERROR,
        error
      });
    }
  };
}
export function getListTuyenInfo(id) {
  return async dispatch => {
    dispatch({
      type: GET_LIST_TUYEN_INFO
    });
    try {
      const data = await userAPI.getListTuyenInfo(id);
      return dispatch({
        type: GET_LIST_TUYEN_INFO_SUCCESS,
        tuyeninfo: data.data.result
      });
    } catch (error) {
      return dispatch({
        type: GET_LIST_TUYEN_INFO_ERROR,
        error
      });
    }
  };
}
