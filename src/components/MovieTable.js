import React from "react";
import MovieRow from "./MovieRow.js";
import { connect } from "react-redux";

const MovieTable = (props) => {
  if (props.loading) return <div>Loading...</div>;
  else if (props.error !== "") return <div>{props.error}</div>;
  else if (props.movies !== [])
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
            {props.movies.map((movie, index) => (
              <MovieRow key={index} movie={movie}></MovieRow>
            ))}
          </tbody>
        </table>
      </div>
    );
};

const mapStateToProps = (state) => {
  const movieList = state.movie;
  return {
    loading: movieList.loading,
    movies: movieList.movies,
    error: movieList.error,
  };
};

export default connect(mapStateToProps, null)(MovieTable);
