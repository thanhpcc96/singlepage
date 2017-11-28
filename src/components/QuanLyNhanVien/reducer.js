import {
  GET_LIST_USER,
  GET_LIST_USER_ERROR,
  GET_LIST_USER_SUCCESSS,
  GET_DETAIL_USER,
  GET_DETAIL_USER_SUCCESS,
  GET_DETAIL_USER_ERROR,
  POST_UPLOAD_USER,
  POST_UPLOAD_USER_ERROR,
  POST_UPLOAD_USER_SUCCESS,
  POST_DELETE_USER,
  POST_DELETE_USER_SUCCESS,
  POST_DELETE_USER_ERROR,
  POST_UPDATE_USER,
  POST_UPDATE_USER_SUCCESS,
  POST_UPDATE_USER_ERROR,
  POST_CREATE_USER,
  POST_CREATE_USER_ERROR,
  POST_CREATE_USER_SUCCESS,
  GET_LIST_LAIXE,
  GET_LIST_LAIXE_ERROR,
  GET_LIST_LAIXE_SUCCESS,
  GET_LIST_PHUXE,
  GET_LIST_PHUXE_ERROR,
  GET_LIST_PHUXE_SUCCESS
} from "./action";

const initState = {
  isLoading: false,
  listuser: null,
  error: null,
  userdetail: null,
  errordetail: null,
  isLoadingDetail: false,
  uploaddata: null,
  uploaderror: null,
  isupload: false,
  isLoadingDelete: false,
  datadelete: null,
  errordelete: null,
  isLoadingUpdate: false,
  dataupdate: null,
  updateerror: null,
  isLoadingCreate: false,
  usernew: null,
  errorcreate: null,
  listlaixe:null,
  listphuxe: null,
  errorget: null
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
    case GET_DETAIL_USER: {
      return {
        ...state,
        isLoadingDetail: true,
        errordetail: null,
        userdetail: null
      };
    }
    case GET_DETAIL_USER_SUCCESS: {
      return {
        ...state,
        isLoadingDetail: false,
        errordetail: null,
        userdetail: action.userdetail
      };
    }
    case GET_DETAIL_USER_ERROR: {
      return {
        ...state,
        isLoadingDetail: false,
        errordetail: action.error,
        userdetail: null
      };
    }
    case POST_UPLOAD_USER:
      return {
        ...state,
        isupload: true,
        uploaddata: null,
        uploaderror: null
      };
    case POST_UPLOAD_USER_SUCCESS:
      return {
        ...state,
        isupload: false,
        uploaddata: action.data,
        uploaderror: null
      };
    case POST_UPLOAD_USER_ERROR:
      return {
        ...state,
        isupload: false,
        uploaddata: null,
        uploaderror: action.error
      };
    case POST_DELETE_USER:
      return {
        ...state,
        isLoadingDelete: true,
        errordelete: null,
        datadelete: null
      };
    case POST_DELETE_USER_SUCCESS:
      return {
        ...state,
        isLoadingDelete: false,
        errordelete: null,
        datadelete: action.userdelete
      };
    case POST_DELETE_USER_ERROR:
      return {
        ...state,
        isLoadingDelete: false,
        errordelete: action.error
      };
    case POST_UPDATE_USER:
      return {
        ...state,
        isLoadingUpdate: true,
        dataupdate: null,
        updateerror: null
      };
    case POST_UPDATE_USER_ERROR:
      return {
        ...state,
        isLoadingUpdate: false,
        updateerror: action.error,
        dataupdate: null
      };
    case POST_UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoadingUpdate: false,
        uploaddata: action.userupdate,
        updateerror: null
      };
    case POST_CREATE_USER:
      return {
        ...state,
        isLoadingCreate: true,
        usernew: null,
        errorcreate: null
      };
    case POST_CREATE_USER_SUCCESS:
      return {
        ...state,
        isLoadingCreate: false,
        usernew: action.usernew,
        errorcreate: null
      };
    case POST_CREATE_USER_ERROR:
      return {
        ...state,
        isLoadingCreate: false,
        usernew: null,
        errorcreate: action.error
      };
    case GET_LIST_LAIXE:
      return {
        ...state,
        listlaixe: null,
        errorget: null
      };
    case GET_LIST_LAIXE_SUCCESS:
      return {
        ...state,
        listlaixe: action.listlaixe,
        errorget: null
      };
    case GET_LIST_LAIXE_ERROR:
      return {
        ...state,
        listlaixe: null,
        errorget: action.error
      };
    case GET_LIST_PHUXE:
      return {
        ...state,
        listphuxe: null,
        errorget: null
      };
    case GET_LIST_PHUXE_SUCCESS:
      return {
        ...state,
        listphuxe: action.listphuxe,
        errorget: null
      };
    case GET_LIST_PHUXE_ERROR:
      return {
        ...state,
        listphuxe: null,
        errorget: action.error
      };
    default:
      return state;
  }
}
