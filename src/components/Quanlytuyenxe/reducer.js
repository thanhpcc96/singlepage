import {
  GET_LIST_TUYEN,
  GET_LIST_TUYEN_SUCCESS,
  GET_LIST_TUYEN_ERROR,
  GET_LIST_TUYEN_INFO,
  GET_LIST_TUYEN_INFO_SUCCESS,
  GET_LIST_TUYEN_INFO_ERROR
} from "./action";

const stateBanDau = {
  isLoading: false,
  listTuyen: null,
  error: null,
  isLoadinginfo: false,
  tuyeninfo: null,
  errorinfo: null
};
export default function(state = stateBanDau, action) {
  switch (action.type) {
    case GET_LIST_TUYEN:
      return {
        ...state,
        isLoading: true,
        listTuyen: null,
        error: null
      };
    case GET_LIST_TUYEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listTuyen: action.listTuyen,
        error: null
      };
    case GET_LIST_TUYEN_ERROR:
      return {
        ...state,
        isLoading: false,
        listTuyen: null,
        error: action.error
      };
    case GET_LIST_TUYEN_INFO:
      return {
        ...state,
        isLoadinginfo: true,
        errorinfo: null,
        tuyeninfo: null
      };
    case GET_LIST_TUYEN_INFO_SUCCESS:
      return {
        ...state,
        isLoadinginfo: false,
        tuyeninfo: action.tuyeninfo,
        errorinfo: null
      };
    case GET_LIST_TUYEN_INFO_ERROR:
      return {
        ...state,
        isLoadinginfo: false,
        errorinfo: action.error,
        tuyeninfo: null
      };

    default:
      return state;
  }
}
