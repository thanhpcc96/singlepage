import userAPI, { setAuthHeader } from "../../API/api";

export const USER_POST_LOGIN = "USER_POST_LOGIN";
export const USER_POST_LOGIN_SUCCESS = "USER_POST_LOGIN_SUCCESS";
export const USER_POST_LOGIN_ERROR = "USER_POST_LOGIN_ERROR";

export const USER_LOGED_IN = "USER_LOGED_IN";
export const USER_LOGED_OUT = "USER_LOGED_OUT";

export const logedIn = user => ({
  type: USER_LOGED_IN,
  user
});

function loginSuccess(data) {
  setAuthHeader(data.data.token);
  localStorage.HaiAuToken = data.data.token;
  return {
    type: USER_POST_LOGIN_SUCCESS,
    user: data
  };
}
function loginError(err) {
  return {
    type: USER_POST_LOGIN_ERROR,
    error: err
  };
}
export function postLoginAction(email, password) {
  return async dispatch => {
    dispatch({ type: USER_POST_LOGIN });
    try {
      const data = await userAPI.postLogin({ email, password });
      return dispatch(loginSuccess(data));
    } catch (err) {
      return dispatch(loginError(err));
    }
  };
}
export function logOut() {
  return dispatch => {
    localStorage.removeItem("HaiAuToken");
    setAuthHeader();
    dispatch({
      type: USER_LOGED_OUT
    });
  };
}
