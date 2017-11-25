import {
  GET_LIST_KHACHHANG,
  GET_LIST_KHACHHANG_ERROR,
  GET_LIST_KHACHHANG_SUCCESS
} from "./action";

const initState = {
  isLoading: false,
  listkhachhang: null,
  error: null
};
export default function(state = initState, action) {
  switch (action.type) {
    case GET_LIST_KHACHHANG:
      return {
        ...state,
        isLoading: true,
        error: null,
        listkhachhang: null
      };
    case GET_LIST_KHACHHANG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listkhachhang: action.listkhachhang,
        error: null
      };
    case GET_LIST_KHACHHANG_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        listkhachhang: null
      };

    default:
      return state;
  }
}
