import {
  FETCH_FAILURE,
  FETCH_LOADING,
  FETCH_SUCCESS,
} from "./movieListActionTypes";

const initialState = {
  loading: false,
  movies: [
    { Title: "title1", Year: "year1", imdbID: "imdbID1", Type: "Type1" },
  ],
  error: "",
};

const movieListReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default movieListReducer;
