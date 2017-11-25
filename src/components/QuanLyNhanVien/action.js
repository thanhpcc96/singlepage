import userAPI from "../../API/api";

export const GET_LIST_USER = "GET_LIST_USER";
export const GET_LIST_USER_SUCCESSS = "GET_LIST_USER_SUCCESSS";
export const GET_LIST_USER_ERROR = "GET_LIST_USER_ERROR";

export function getListUserAction() {
  return async dispatch => {
    dispatch({ type: GET_LIST_USER });
    try {
      const data = await userAPI.getListUsers();
      console.log('====================================');
      console.log(data);
      console.log('====================================');
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
