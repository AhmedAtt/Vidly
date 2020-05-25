//Created this component to have consistent levels of abstraction in the movies component
import React, { Component } from "react";
import { Link } from "react-router-dom";

import Like from "./common/like";
import Table from "./common/table";
class MoviesTable extends Component {
  //No need to add it to state becuase it won't be changing through out the lifecycle of this component
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  formatHeader = (movies) => {
    const { length: moviesCount } = movies;
    const emptyHeader = "There are no movies in the store";
    const Header = "There are " + moviesCount + " movies in the store";
    return moviesCount === 0 ? emptyHeader : Header;
  };

  render() {
    const { movies, sortColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={movies}
      />
    );
  }
}

export default MoviesTable;
