import React, { useState, createContext, useReducer, useEffect } from "react";

export const MovieContext = createContext();

const initialState = {
  loading: true,
  search: [],
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_SUCCESS":
      return {
        loading: false,
        search: action.payload.search,
        error: "",
      };
    case "SEARCH_FAIL":
      return {
        loading: false,
        search: "",
        error: action.payload.error,
      };
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export const MovieProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {}, []);

  return (
    <MovieContext.Provider
      value={{ movieListState: state, movieListDispatch: dispatch }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
