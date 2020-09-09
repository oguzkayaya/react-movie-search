import React, { Component } from "react";
import Movie from "./components/Movie.js"

export class App extends Component {
  state = {
    movieList: [],
  };

  render() {
    return (
      <div>
       <Movie></Movie>
      </div>
    );
  }
}

export default App;
