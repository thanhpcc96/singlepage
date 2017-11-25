import { GET_ALL_XE, GET_ALL_XE_ERROR, GET_ALL_XE_SUCCESS } from "./action";

const initalState = {
  isLoading: false,
  listxe: null,
  error: null
};
export default function(state = initalState, action) {
  switch (action.type) {
    case GET_ALL_XE:
      return {
        ...state,
        listxe: null,
        isLoading: true,
        error: null
      };
    case GET_ALL_XE_SUCCESS:
      return {
        ...state,
        listxe: action.listxe,
        error: null,
        isLoading: false
      };
    case GET_ALL_XE_ERROR:
      return {
        ...state,
        listxe: null,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
