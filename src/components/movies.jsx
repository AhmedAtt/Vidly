import React, { Component, useLayoutEffect } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "../components/common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 5,
    currentPage: 1,
  };
  //Good to place service/api calls after an instance of the component is called
  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];

    this.setState({ movies: getMovies(), genres: genres });
  }
  handleDelete = (movie) => {
    const newMovies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: newMovies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const { pageSize, currentPage, movies, selectedGenre } = this.state;
    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? movies.filter((m) => m.genre._id === selectedGenre._id)
        : movies;
    const pageMovies = paginate(filteredMovies, currentPage, pageSize);
    return (
      <div className="contianer-fluid">
        <div className="row">
          <div className="col-3 m-4">
            <ListGroup
              items={this.state.genres}
              textProperty="name"
              valueProperty="_id"
              onItemSelect={this.handleGenreSelect}
              selectedItem={selectedGenre}
            />
          </div>
          <div className="col">
            <MoviesTable
              filteredMovies={filteredMovies}
              pageMovies={pageMovies}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
            />
            <Pagination
              itemsCount={filteredMovies.length}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
