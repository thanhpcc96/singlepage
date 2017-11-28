import {
  GET_LIST_TUYEN,
  GET_LIST_TUYEN_SUCCESS,
  GET_LIST_TUYEN_ERROR
} from "./action";

const stateBanDau = {
  isLoading: false,
  listTuyen: null,
  error: null
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
    default:
      return state;
  }
}
