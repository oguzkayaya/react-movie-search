import React from "react";
import Movie from "./components/Movie.js";
import Header from "./components/Header.js";
import { BrowserRouter } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext.js";
import { SearchProvider } from "./contexts/SearchContext.js";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MovieProvider>
          <SearchProvider>
            <Header></Header>
            <Movie></Movie>
          </SearchProvider>
        </MovieProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
