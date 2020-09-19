import {
  FETCH_FAILURE,
  FETCH_LOADING,
  FETCH_SUCCESS,
} from "./movieListActionTypes";

const initialState = {
  loading: false,
  movies: [],
  error: "",
};

const movieListReducer = (state = initialState, actin) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
        error: "",
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        movies: [],
        error: action.payload,
      };
  }
};

export default movieListReducer;
