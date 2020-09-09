import React, { Component } from "react";
import Movie from "./components/Movie.js";
import Header from "./components/Header.js";
import { BrowserRouter } from "react-router-dom";

export class App extends Component {
  state = {
    movieList: [],
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header></Header>
          <Movie></Movie>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
