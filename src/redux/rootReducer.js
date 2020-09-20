import { combineReducers } from "redux";
import movieListReducer from "./movieList/movieListReducer";
import searchReducer from "./search/searchReducer";

const rootReducer = combineReducers({
  movie: movieListReducer,
  search: searchReducer,
});

export default rootReducer;
