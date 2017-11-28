import userAPI from "../../API/api";

export const GET_ALL_XE = "GET_ALL_XE";
export const GET_ALL_XE_ERROR = "GET_ALL_XE_ERROR";
export const GET_ALL_XE_SUCCESS = "GET_ALL_XE_SUCCESS";

export const POST_CREATE_XE = "POST_CREATE_XE";
export const POST_CREATE_XE_SUCCESS = "POST_CREATE_XE_SUCCESS";
export const POST_CREATE_XE_ERROR = "POST_CREATE_XE_ERROR";

export function getListXe() {
  return async dispatch => {
    dispatch({
      type: GET_ALL_XE
    });
    try {
      const data = await userAPI.getListXe();
      return dispatch({
        type: GET_ALL_XE_SUCCESS,
        listxe: data.data.result
      });
    } catch (error) {
      return dispatch({
        type: GET_ALL_XE_ERROR,
        error
      });
    }
  };
}
export function postCreateXe(data) {
  return async dispatch => {
    dispatch({
      type: POST_CREATE_XE
    });
    try {
      const data = await userAPI.postCreateXe(data);
      return dispatch({
        type: POST_CREATE_XE_SUCCESS,
        xecreated: data.data.result
      });
    } catch (error) {
      return dispatch({
        type: POST_CREATE_XE_ERROR,
        error
      });
    }
  };
}
