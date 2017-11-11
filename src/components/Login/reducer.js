import {
  USER_POST_LOGIN,
  USER_POST_LOGIN_SUCCESS,
  USER_POST_LOGIN_ERROR,
  USER_LOGED_OUT
} from "./action";

const initialState = {
  isLogin: false,
  info: {},
  token:'',
  isLoading: false,
  error: null
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
        isLoading:false,
        isLogin: true,
        info: action.user.data,
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
        isLogin: false,
        isLogin: false
      };

    default:
      return state;
  }
}
