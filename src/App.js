import React from "react";
import Movie from "./components/Movie.js";
import Header from "./components/Header.js";
import { BrowserRouter } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext.js";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MovieProvider>
          <Header></Header>
          <Movie></Movie>
        </MovieProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
