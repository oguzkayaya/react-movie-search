import React, { Component } from "react";
import axios from "axios";
import MovieTable from "./MovieTable.js";
import MovieSearch from "./MovieSearch.js";
import MoviePage from "./MoviePage.js";
import { Route } from "react-router-dom";

const apikey = "fabcf2e0";

export class Movie extends Component {
  state = {
    movieList: [],
    error: "",
  };

  componentDidMount() {
    axios
      .get("http://www.omdbapi.com/?s=Pokemon&apikey=" + apikey)
      .then((res) => this.setState({ movieList: res.data.Search }));
  }

  searchMovies = (searchState) => {
    const title = searchState.title ? "s=" + searchState.title : "";
    const year = searchState.year ? "&y=" + searchState.year : "";
    const type = searchState.type ? "&type=" + searchState.type : "";
    const page = searchState.page ? "&page=" + searchState.page : "";
    const url =
      "http://www.omdbapi.com/?" +
      title +
      year +
      type +
      page +
      "&apikey=" +
      apikey;

    axios.get(url).then((res) => {
      if (res.data.Response === "True")
        this.setState({ movieList: res.data.Search, error: "" });
      else {
        this.setState({ error: res.data.Error, movieList: [] });
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={() => (
            <div style={{ textAlign: "center", padding: "10px" }}>
              <MovieSearch searchMovies={this.searchMovies}></MovieSearch>
              {this.state.error}
              <MovieTable movieList={this.state.movieList}></MovieTable>
            </div>
          )}
        ></Route>
        <Route exact path="/movie-info/:imdbID" component={MoviePage}></Route>
      </React.Fragment>
    );
  }
}

export default Movie;
