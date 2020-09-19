const { createStore } = require("redux");
const { default: movieListReducer } = require("./movieList/movieListReducer");

const store = createStore(movieListReducer);

export default store;
