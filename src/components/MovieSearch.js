import React, { useContext, useState, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext.js";
import { SearchContext } from "../contexts/SearchContext.js";

const MovieSearch = () => {
  const [searchState, setSearchState] = useState({
    title: "",
    year: "",
    type: "",
  });
  const { searchValuesState, searchValuesDispatch } = useContext(SearchContext);
  const { movieListState, movieListDispatch } = useContext(MovieContext);

  useEffect(() => {
    setSearchState({
      title: searchValuesState.title,
      year: searchValuesState.year,
      type: searchValuesState.type,
    });
  }, []);

  const searchMovies = (e) => {
    e.preventDefault();

    searchValuesDispatch({
      type: "UPDATE",
      payload: {
        title: searchState.title,
        year: searchState.year,
        type: searchState.type,
      },
    });
  };

  const searchPreviusPage = () => {
    searchValuesDispatch({
      type: "DECREMENTPAGE",
    });
  };

  const searchNextPage = () => {
    searchValuesDispatch({
      type: "INCREMENTPAGE",
    });
  };

  return (
    <div>
      <form onSubmit={searchMovies}>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={searchState.title}
            onChange={(e) => {
              setSearchState({ ...searchState, title: e.target.value });
            }}
          />
        </label>
        <br />
        <label>
          Year
          <input
            type="text"
            name="year"
            value={searchState.year}
            onChange={(e) => {
              setSearchState({ ...searchState, year: e.target.value });
            }}
          />
        </label>
        <br />
        <label>
          Type
          <input
            type="text"
            name="type"
            value={searchState.type}
            onChange={(e) => {
              setSearchState({ ...searchState, type: e.target.value });
            }}
          />
        </label>
        <br />
        <input
          type="submit"
          value="Search"
          disabled={
            (searchValuesState.title === searchState.title &&
              searchValuesState.year === searchState.year &&
              searchValuesState.type === searchState.type &&
              searchValuesState.page === 1) ||
            movieListState.loading
              ? true
              : false
          }
        />
        <br />
        <hr />
        <label>Page: {searchValuesState.page}</label>
        <br />
        <input
          type="button"
          value="Previus Page"
          disabled={
            searchValuesState.page > 1 && !movieListState.loading ? false : true
          }
          onClick={searchPreviusPage}
        />
        <input
          type="button"
          disabled={
            movieListState.error || movieListState.loading ? true : false
          }
          value="Next Page"
          onClick={searchNextPage}
        />
        <hr />
      </form>
    </div>
  );
};

export default MovieSearch;
