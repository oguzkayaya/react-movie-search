import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MovieRow extends Component {
  render() {
    const linkUrl = "/movie-info/" + this.props.movie.imdbID;
    return (
      <tr>
        <td>
          <Link
            style={{ textDecoration: "inherit", color: "inherit" }}
            to={linkUrl}
          >
            {" "}
            {this.props.movie.Title}
          </Link>
        </td>
        <td>{this.props.movie.Year}</td>
        <td>{this.props.movie.imdbID}</td>
        <td>{this.props.movie.Type}</td>
      </tr>
    );
  }
}

export default MovieRow;
