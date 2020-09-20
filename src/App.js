import React from "react";
import Movie from "./components/Movie.js";
import Header from "./components/Header.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header></Header>
          <Movie></Movie>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
