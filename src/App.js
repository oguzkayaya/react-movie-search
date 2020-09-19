import React from "react";
import Movie from "./components/Movie.js";
import Header from "./components/Header.js";
import { BrowserRouter } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext.js";
import { SearchProvider } from "./contexts/SearchContext.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <MovieProvider>
            <SearchProvider>
              <Header></Header>
              <Movie></Movie>
            </SearchProvider>
          </MovieProvider>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
