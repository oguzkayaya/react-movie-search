import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import movieListReducer from "./movieList/movieListReducer";

const store = createStore(movieListReducer, applyMiddleware(thunk));

export default store;
