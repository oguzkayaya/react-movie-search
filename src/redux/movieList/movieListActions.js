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
