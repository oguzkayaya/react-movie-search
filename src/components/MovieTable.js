import React, { Component } from "react";
import MovieRow from "./MovieRow.js";

export class MovieTable extends Component {
  render() {
    return (
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
          {this.props.movieList.map((movie, index) => (
            <MovieRow key={index} movie={movie}></MovieRow>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MovieTable;
