import {
  GET_LIST_USER,
  GET_LIST_USER_ERROR,
  GET_LIST_USER_SUCCESSS
} from "./action";

const initState = {
  isLoading: false,
  listuser: null,
  error: null
};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_LIST_USER:
      return {
        ...state,
        isLoading: true,
        error: null,
        listuser: null
      };
    case GET_LIST_USER_SUCCESSS:
      return {
        ...state,
        isLoading: false,
        error: null,
        listuser: action.listuser
      };

    case GET_LIST_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        listuser: null
      };
    default:
      return state;
  }
}
