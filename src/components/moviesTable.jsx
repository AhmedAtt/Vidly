//Created this component to have consistent levels of abstraction in the movies component
import React, { Component } from "react";
import Like from "./common/like";

class MoviesTable extends Component {
  state = {};

  formatHeader = (movies) => {
    const { length: moviesCount } = movies;
    const emptyHeader = "There are no movies in the store";
    const Header = "There are " + moviesCount + " movies in the store";
    return moviesCount === 0 ? emptyHeader : Header;
  };
  render() {
    const { filteredMovies, pageMovies, onLike, onDelete } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>{this.formatHeader(filteredMovies)}</th>
          </tr>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {pageMovies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
