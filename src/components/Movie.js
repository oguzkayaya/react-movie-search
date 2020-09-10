import React from "react";
import MovieTable from "./MovieTable.js";
import MovieSearch from "./MovieSearch.js";
import MovieInfoPage from "./MovieInfoPage.js";
import { Route } from "react-router-dom";


const Movie = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={() => (
          <div style={{ textAlign: "center", padding: "10px" }}>
            <MovieSearch></MovieSearch>
            <MovieTable></MovieTable>
          </div>
        )}
      ></Route>
      <Route exact path="/movie-info/:imdbID" component={MovieInfoPage}></Route>
    </React.Fragment>
  );
};

export default Movie;
