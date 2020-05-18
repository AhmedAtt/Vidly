import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import { getMovies } from "./services/fakeMovieService";
class App extends Component {
  state = { movies: getMovies() };
  handlePagination = () => {
    console.log("Pagination clicked");
  };
  render() {
    return (
      <main className="container">
        <Movies />
      </main>
    );
  }
}

export default App;
