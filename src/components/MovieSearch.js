import React, { useContext, useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../redux/movieList/movieListActions.js";

const MovieSearch = (props) => {
  const apikey = "fabcf2e0";

  const [searchState, setSearchState] = useState({
    title: "Pokemon",
    year: "",
    type: "",
    page: 1,
  });

  const [update, setUpdate] = useState(false);

  // const searchPreviusPage = () => {
  //   searchValuesDispatch({
  //     type: "DECREMENTPAGE",
  //   });
  // };

  // const searchNextPage = () => {
  //   searchValuesDispatch({
  //     type: "INCREMENTPAGE",
  //   });
  // };

  useEffect(() => {
    const url = createUrl(searchState, apikey);
    console.log(url);
    props.fetchMovies(url);
  }, [update]);

  const searchMovies = (e, p = 1) => {
    e.preventDefault();
    setSearchState({ ...searchState, page: p });
    setUpdate(!update);
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
        <input type="submit" value="Search" onClick={searchMovies} />
        <hr />
        Page: {searchState.page}
        <br />
        <input
          type="button"
          value="Previous Page"
          onClick={(e) => searchMovies(e, searchState.page - 1)}
        />
        <input
          type="button"
          value="Next Page"
          onClick={(e) => searchMovies(e, searchState.page + 1)}
        />
        <hr />
      </form>
      {/* <form onSubmit={searchMovies}>
        
        
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
      </form> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    movies: state.movies,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: (url) => {
      dispatch(fetchMovies(url));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch);
