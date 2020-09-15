import Axios from "axios";
import React, { createContext, useReducer, useEffect, useContext } from "react";
import { MovieContext } from "./MovieContext";

export const SearchContext = createContext();

const apikey = "fabcf2e0";

const initialState = {
  title: "Pokemon",
  year: "",
  type: "",
  page: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        title: action.payload.title,
        year: action.payload.year,
        type: action.payload.type,
        page: 1,
      };
    case "INCREMENTPAGE":
      return {
        ...state,
        page: state.page + 1,
      };
    case "DECREMENTPAGE":
      return {
        ...state,
        page: state.page - 1,
      };
    default:
      return state;
  }
};

export const SearchProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { movieListState, movieListDispatch } = useContext(MovieContext);

  useEffect(() => {
    const url = createUrl(state, apikey);
    callApi(url, movieListDispatch);
  }, [state]);

  return (
    <SearchContext.Provider
      value={{ searchValuesState: state, searchValuesDispatch: dispatch }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

function callApi(url, movieListDispatch) {
  movieListDispatch({ type: "LOADING" });
  Axios.get(url)
    .then((res) => {
      if (res.data.Response === "True") {
        movieListDispatch({
          type: "SEARCH_SUCCESS",
          payload: { search: res.data.Search },
        });
      } else {
        movieListDispatch({
          type: "SEARCH_FAIL",
          payload: {
            error: res.data.Error,
          },
        });
      }
    })
    .catch((error) => {
      movieListDispatch({
        type: "SEARCH_FAIL",
        payload: {
          error: error.response.data.Error,
        },
      });
    });
}

function createUrl(state, apikey) {
  const searchTitle = state.title ? "s=" + state.title : "";
  const searchYear = state.year ? "&y=" + state.year : "";
  const searchType = state.type ? "&type=" + state.type : "";
  const searchPage = state.page ? "&page=" + state.page : "";
  const url =
    "http://www.omdbapi.com/?" +
    searchTitle +
    searchYear +
    searchType +
    searchPage +
    "&apikey=" +
    apikey;
  return url;
}
