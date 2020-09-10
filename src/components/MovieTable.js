import React, { useContext } from "react";
import MovieRow from "./MovieRow.js";
import { MovieContext } from "../contexts/MovieContext.js";

const MovieTable = () => {
  const [movieList] = useContext(MovieContext);
  if (movieList.Response === "True")
    return (
      <div>
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
            {movieList.Search.map((movie, index) => (
              <MovieRow key={index} movie={movie}></MovieRow>
            ))}
          </tbody>
        </table>
      </div>
    );
  else return <div>{movieList.Error}</div>;
};

export default MovieTable;
