import React, { useContext } from "react";
import MovieRow from "./MovieRow.js";
import { MovieContext } from "../contexts/MovieContext.js";
import { connect } from "react-redux";

const MovieTable = (props) => {
  console.log(props.movies);
  if (props.loading === true) return <div>Loading...</div>;
  if (props.movies)
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
  else return <div>{props.error}</div>;
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    movies: state.movies,
    error: state.error,
  };
};

export default connect(mapStateToProps)(MovieTable);
