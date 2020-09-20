import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import movieListReducer from "./movieList/movieListReducer";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
