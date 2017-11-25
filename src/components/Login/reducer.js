import {
  USER_POST_LOGIN,
  USER_POST_LOGIN_SUCCESS,
  USER_POST_LOGIN_ERROR,
  USER_LOGED_OUT,
  USER_POST_FORGOT,
  USER_POST_FORGOT_ERROR,
  USER_POST_FORGOT_SUCCESS
} from "./action";

const initialState = {
  isLogin: false,
  info: {},
  token: "",
  isLoading: false,
  error: null,
  errorforgot: null,
  isPostForgot: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case USER_POST_LOGIN:
      return {
        ...state,
        isLoading: true
      };
    case USER_POST_LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        isLogin: true,
        info: action.user.data
      };
    case USER_POST_LOGIN_ERROR:
      return {
        ...state,
        error: action.error
      };
    case USER_LOGED_OUT:
      return {
        ...state,
        error: null,
        info: {},
        isLogin: false
      };
    case USER_POST_FORGOT:
      return {
        ...state,
        errorforgot: null,
        isLoading: true
      };
    case USER_POST_FORGOT_ERROR:
      return {
        ...state,
        errorforgot: action.error,
        isLoading: false,
        isPostForgot: false
      };
    case USER_POST_FORGOT_SUCCESS:
      return {
        ...state,
        errorforgot: null,
        isLoading: false,
        isPostForgot: true
      };

    default:
      return state;
  }
}
