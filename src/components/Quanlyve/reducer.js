import { GET_LIST_VE, GET_LIST_VE_SUCCESS, GET_LIST_VE_ERROR } from "./action";

const stateBanDau = {
  isLoading: false,
  listVe: null,
  error: null
};
export default function(state = stateBanDau, action) {
  switch (action.type) {
    case GET_LIST_VE:
      return {
        ...state,
        isLoading: true,
        listVe: null,
        error: null
      };
    case GET_LIST_VE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listVe: action.listVe,
        error: null
      };
    case GET_LIST_VE_ERROR:
      return {
        ...state,
        isLoading: false,
        listVe: null,
        error: action.error
      };

    default:
      return state;
  }
}
