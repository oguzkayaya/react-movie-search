import React, { useContext, useState, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext.js";
import axios from "axios";

const apikey = "fabcf2e0";

const MovieSearch = () => {
  const [title, setTitle] = useState("Pokemon");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);

  const [searchState, setSearchState] = useState({
    title: "Pokemon",
    year: "",
    type: "",
    page: 1,
  });

  const [stateForButtonClicks, setStateForButtonClicks] = useState({});

  const [movieList, setMovieList] = useContext(MovieContext);

  useEffect(() => {
    callApiUpdateMovieList();
  }, [stateForButtonClicks]);

  const searchMovies = async (e) => {
    e.preventDefault();
    setSearchState({ ...searchState, page: 1 });
    setStateForButtonClicks(searchState);
  };

  const callApiUpdateMovieList = () => {
    const searchTitle = searchState.title
      ? "s=" + searchState.title
      : "";
    const searchYear = searchState.year
      ? "&y=" + searchState.year
      : "";
    const searchType = searchState.type
      ? "&type=" + searchState.type
      : "";
    const searchPage = searchState.page
      ? "&page=" + searchState.page
      : "";
    const url =
      "http://www.omdbapi.com/?" +
      searchTitle +
      searchYear +
      searchType +
      searchPage +
      "&apikey=" +
      apikey;

    axios.get(url).then((res) => {
      setMovieList(res.data);
    });
  };

  const searchPreviusPage = () => {
    if (searchState.page > 1) {
      setSearchState({ ...searchState, page: searchState.page - 1 });
      setStateForButtonClicks(searchState);
    }
  };

  const searchNextPage = () => {
    if (searchState.page <= 100) {
      setSearchState({ ...searchState, page: searchState.page + 1 });
      setStateForButtonClicks(searchState);
    }
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
        <input type="submit" value="Search" />
        <br />
        <hr />
        <label>Page: {searchState.page}</label>
        <br />
        <input type="button" value="Previus Page" onClick={searchPreviusPage} />
        <input type="button" value="Next Page" onClick={searchNextPage} />
        <hr />
      </form>
    </div>
  );
};

export default MovieSearch;
