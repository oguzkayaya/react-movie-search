import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movieList, setMovieList] = useState({ Search: [] });

  return (
    <MovieContext.Provider value={[movieList, setMovieList]}>
      {props.children}
    </MovieContext.Provider>
  );
};
