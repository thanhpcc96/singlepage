import userAPI from "../../API/api";

export const GET_LIST_VE = "GET_LIST_VE";
export const GET_LIST_VE_SUCCESS = "GET_LIST_VE_SUCCESS";
export const GET_LIST_VE_ERROR = "GET_LIST_VE_ERROR";

export function getListVeAction() {
  return async dispatch => {
    dispatch({
      type: GET_LIST_VE
    });
    try {
      const data = await userAPI.getListVe();
      return dispatch({
        type: GET_LIST_VE_SUCCESS,
        listVe: data.data
      });
    } catch (error) {
      return dispatch({
        type: GET_LIST_VE_ERROR,
        error
      });
    }
  };
}
