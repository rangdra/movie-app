import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie/?sort_by=popularity.desc&api_key=0d02f071971649f72e7409250b8818df&page=1`;

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=0d02f071971649f72e7409250b8818df&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("avengers");

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            type="search"
            value={searchTerm}
            placeholder="Search..."
            className="search"
            onChange={handleChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}

export default App;
