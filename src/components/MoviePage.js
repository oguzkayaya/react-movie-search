import React, { Component } from "react";
import axios from "axios";

const apikey = "fabcf2e0";

export class MoviePage extends Component {
  state = {
    movieInfo: {},
    error: "",
  };

  componentDidMount() {
    axios
      .get(
        "http://www.omdbapi.com/?i=" +
          this.props.match.params.imdbID +
          "&apikey=" +
          apikey
      )
      .then((res) => {
        if (res.data.Response === "True")
          this.setState({ movieInfo: res.data });
        else this.setState({ error: res.data.Error });
      });
  }
  render() {
    if (this.state.error === "")
      return (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <div>
            <div style={titleStyle}>{this.state.movieInfo.Title}</div>
            {this.state.movieInfo.Runtime} <b>|</b> {this.state.movieInfo.Genre}{" "}
            <b>|</b> {this.state.movieInfo.Year}
          </div>
          <br />
          <div style={{ display: "flex", paddingLeft: "300px" }}>
            <div style={{ width: "30%" }}>
              <img
                src={this.state.movieInfo.Poster}
                alt="{this.state.movieInfo.Title}"
              />
            </div>
            <div style={{ textAlign: "left", padding: "0 20px" }}>
              {this.state.movieInfo.Type}
              <hr />
              {this.state.movieInfo.Director}
              <hr />
              {this.state.movieInfo.Actors}
              <hr />
              {this.state.movieInfo.imdbRating}
              <hr />
              {this.state.movieInfo.Language}
            </div>
          </div>
        </div>
      );
    else
      return (
        <div style={{ textAlign: "center", padding: "20px" }}>
          {this.state.error}
        </div>
      );
  }
}

const titleStyle = {
  fontSize: "20pt",
  fontWeight: "bold",
};

const spanStyle = {
  padding: "20px",
  height: "20px",
};

export default MoviePage;
