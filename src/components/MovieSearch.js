import React, { Component } from "react";

export class MovieSearch extends Component {
  state = {
    title: "Pokemon",
    year: "",
    type: "",
    page: 1,
  };

  updateState = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  searchMovies = (e) => {
    e.preventDefault();
    this.setState({ page: 1 });
    this.props.searchMovies(this.state);
  };

  searchPreviusPage = () => {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 }, () =>
        this.props.searchMovies(this.state)
      );
    }
  };

  searchNextPage = () => {
    if (this.state.page < 100) {
      this.setState({ page: this.state.page + 1 }, () =>
        this.props.searchMovies(this.state)
      );
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.searchMovies}>
          <label>
            Title
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.updateState}
            />
          </label>
          <br />
          <label>
            Year
            <input
              type="text"
              name="year"
              value={this.state.year}
              onChange={this.updateState}
            />
          </label>
          <br />
          <label>
            Type
            <input
              type="text"
              name="type"
              value={this.state.type}
              onChange={this.updateState}
            />
          </label>
          <br />
          <input type="submit" value="Search" />
          <br />
          <hr />
          <label>Page: {this.state.page}</label>
          <br />
          <input
            type="button"
            value="Previus Page"
            onClick={this.searchPreviusPage}
          />
          <input
            type="button"
            value="Next Page"
            onClick={this.searchNextPage}
          />
          <hr />
        </form>
      </div>
    );
  }
}

export default MovieSearch;
