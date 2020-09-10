import React, { useContext, useState, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext.js";
import axios from "axios";

const apikey = "fabcf2e0";

const MovieSearch = () => {
  const [title, setTitle] = useState("Pokemon");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);

  const [movieList, setMovieList] = useContext(MovieContext);

  useEffect(() => {
    callApiUpdateMovieList();
  }, []);

  const searchMovies = async (e) => {
    e.preventDefault();
    setPage(1);
    callApiUpdateMovieList();
  };

  const callApiUpdateMovieList = () => {
    const searchTitle = title ? "s=" + title : "";
    const searchYear = year ? "&y=" + year : "";
    const searchType = type ? "&type=" + type : "";
    const searchPage = page ? "&page=" + page : "";
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
    if (page > 1) {
      setPage(page - 1);
      callApiUpdateMovieList();
    }
  };

  const searchNextPage = () => {
    if (page <= 100) {
      setPage(page + 1);
      callApiUpdateMovieList();
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
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Year
          <input
            type="text"
            name="year"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Type
          <input
            type="text"
            name="type"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
        </label>
        <br />
        <input type="submit" value="Search" />
        <br />
        <hr />
        <label>Page: {page}</label>
        <br />
        <input type="button" value="Previus Page" onClick={searchPreviusPage} />
        <input type="button" value="Next Page" onClick={searchNextPage} />
        <hr />
      </form>
    </div>
  );
};

export default MovieSearch;
