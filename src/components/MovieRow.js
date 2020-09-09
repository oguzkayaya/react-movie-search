import React, { Component } from "react";

export class MovieRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.movie.Title}</td>
        <td>{this.props.movie.Year}</td>
        <td>{this.props.movie.imdbID}</td>
        <td>{this.props.movie.Type}</td>
      </tr>
    );
  }
}

export default MovieRow;
