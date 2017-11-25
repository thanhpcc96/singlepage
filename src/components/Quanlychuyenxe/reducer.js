import {
  GET_LIST_CHUYEN_XE,
  GET_LIST_CHUYEN_XE_SUCCESS,
  GET_LIST_CHUYEN_XE_ERROR
} from "./action";
const stateBanDau = {
  isLoading: false,
  listChuyenXe: null,
  error: null
};
export default function(state = stateBanDau, action) {
  switch (action.type) {
    case GET_LIST_CHUYEN_XE:
      return {
        ...state,
        isLoading: true,
        listChuyenXe: null,
        error: null
      };
    case GET_LIST_CHUYEN_XE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listChuyenXe: action.listChuyenxe,
        error: null
      };
    case GET_LIST_CHUYEN_XE_ERROR:
      return {
        ...state,
        isLoading: false,
        listChuyenXe: null,
        error: action.error
      };
    default:
      return state;
  }
}
