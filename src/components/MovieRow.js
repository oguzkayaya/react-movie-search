import React from "react";
import { Link } from "react-router-dom";

const MovieRow = (props) => {
  const linkUrl = "/movie-info/" + props.movie.imdbID;
  return (
    <tr>
      <td>
        <Link
          style={{ textDecoration: "inherit", color: "inherit" }}
          to={linkUrl}
        >
          {" "}
          {props.movie.Title}
        </Link>
      </td>
      <td>{props.movie.Year}</td>
      <td>{props.movie.imdbID}</td>
      <td>{props.movie.Type}</td>
    </tr>
  );
};

export default MovieRow;
