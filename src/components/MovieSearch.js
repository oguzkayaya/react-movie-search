import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../redux/movieList/movieListActions.js";
import { updateSearch } from "../redux/search/searchActions.js";

const MovieSearch = (props) => {
  const apikey = "fabcf2e0";

  const [searchState, setSearchState] = useState({
    title: props.search.title,
    year: props.search.year,
    type: props.search.type,
  });

  useEffect(() => {
    const url = createUrl(props.search, apikey);
    props.fetchMovies(url);
  }, [props.search]);

  const searchMovies = (e, p = 1) => {
    e.preventDefault();
    props.updateSearch({ ...searchState, page: p });
  };

  function createUrl(state, apikey) {
    const searchTitle = state.title ? "s=" + state.title : "";
    const searchYear = state.year ? "&y=" + state.year : "";
    const searchType = state.type ? "&type=" + state.type : "";
    const searchPage = state.page ? "&page=" + state.page : "";
    const url =
      "http://www.omdbapi.com/?" +
      searchTitle +
      searchYear +
      searchType +
      searchPage +
      "&apikey=" +
      apikey;
    return url;
  }

  return (
    <div>
      <form>
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
          disabled={props.movie.loading}
          onClick={searchMovies}
        />
        <div>
          <hr />
          Page: {props.search.page}
          <br />
          <input
            type="button"
            value="Previous Page"
            onClick={(e) => searchMovies(e, props.search.page - 1)}
            disabled={props.movie.loading || props.search.page <= 1}
          />
          <input
            type="button"
            value="Next Page"
            onClick={(e) => searchMovies(e, props.search.page + 1)}
            disabled={
              props.movie.loading ||
              props.movie.error ||
              props.movie.movies.length < 10
            }
          />
        </div>

        <hr />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  const movieList = state.movie;
  const search = state.search;
  return {
    movie: movieList,
    search: search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (url) => {
      dispatch(fetchMovies(url));
    },
    updateSearch: (searchState) => {
      dispatch(updateSearch(searchState));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);
