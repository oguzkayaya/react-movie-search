import { createStore } from "redux";
import movieListReducer from "./movieList/movieListReducer";

const store = createStore(movieListReducer);

export default store;
