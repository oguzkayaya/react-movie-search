import axios from "axios";

const {
  FETCH_LOADING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} = require("./movieListActionTypes");

export const fetchLoading = () => {
  return {
    type: FETCH_LOADING,
  };
};

export const fetchSuccess = (movieList) => {
  return {
    type: FETCH_SUCCESS,
    payload: movieList,
  };
};

export const fetchFailue = (error) => {
  return {
    type: FETCH_FAILURE,
    payload: error,
  };
};

export const fetchMovies = (url) => {
  return (dispatch) => {
    dispatch(fetchLoading());
    axios
      .get(url)
      .then((response) => {
        if (response.data.Response === "True") {
          const movieList = response.data.Search;
          dispatch(fetchSuccess(movieList));
        } else {
          const errorMessage = response.data.Error;
          dispatch(fetchFailue(errorMessage));
        }
      })
      .catch((error) => {
        const errorMessage = error.response.data.Error;
        dispatch(fetchFailue(errorMessage));
      })
      .catch((error) => {
        dispatch(fetchFailue("Some error"));
      });
  };
};
