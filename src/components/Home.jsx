import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Moviecard from "./Moviecard";
import "../css/Home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    try {
      setLoading(true);
      const result = axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
        .then((result) => {
          setMovies(result.data.results);
        });
    } catch (error) {
      setError("Failed to fetch moives");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);
  const handleSearch = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const result = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`,
      );
      setMovies(result.data.results);
    } catch (error) {
      setError("Failed to search Movies");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="movies-section">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchQuery}
          placeholder="Search movies..."
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      <h1 className="popular-text">Popular Movies</h1>
      <div className="movies-grid">
        {movies.map((movie) => {
          return <Moviecard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default Home;
