import React, { useContext } from "react";
import MovieRow from "./MovieRow.js";
import { MovieContext } from "../contexts/MovieContext.js";

const MovieTable = () => {
  const { movieListState, movieListDispatch } = useContext(MovieContext);
  if (movieListState.loading === true) return <div>Loading</div>;
  if (movieListState.search)
    return (
      <div>
        <div>{movieListState.warning}</div>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th style={{ width: "50%" }}>Title</th>
              <th>Year</th>
              <th>Imdb ID</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {movieListState.search.map((movie, index) => (
              <MovieRow key={index} movie={movie}></MovieRow>
            ))}
          </tbody>
        </table>
      </div>
    );
  else return <div>{movieListState.error}</div>;
};

export default MovieTable;
