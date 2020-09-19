import React, { useContext, useEffect } from "react";
import MovieRow from "./MovieRow.js";
import { connect } from "react-redux";
import { fetchMovies } from "../redux/movieList/movieListActions.js";

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
  return {
    loading: state.loading,
    movies: state.movies,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => {
      dispatch(fetchMovies());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieTable);
