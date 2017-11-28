import React, { Component } from "react";

import {
  GET_LIST_KHACHHANG,
  GET_LIST_KHACHHANG_ERROR,
  GET_LIST_KHACHHANG_SUCCESS,
  GET_LIST_KHACHHANG_INFO,
  GET_LIST_KHACHHANG_INFO_SUCCESS,
  GET_LIST_KHACHHANG_INFO_ERROR
} from "./action";

const initState = {
  isLoading: false,
  listkhachhang: null,
  error: null,
  isLoadinginfo: false,
  userdetail: null,
  errorinfo: null
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
    case GET_LIST_KHACHHANG_INFO:
      return {
        ...state,
        isLoadinginfo: true,
        errorinfo: null,
        userdetail: null
      };
    case GET_LIST_KHACHHANG_INFO_SUCCESS:
      return {
        ...state,
        isLoadinginfo: false,
        userdetail: action.userdetail,
        errorinfo: null
      };
    case GET_LIST_KHACHHANG_INFO_ERROR:
      return {
        ...state,
        isLoadinginfo: false,
        errorinfo: action.error,
        userdetail: null
      };

    default:
      return state;
  }
}
