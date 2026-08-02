import { createContext, useContext, useState, useEffect } from "react";
const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

export default MovieContext;

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || []);
  }, []);

  function addToFavorites(movie) {
    if (!isFavorite(movie)) {
      setFavorites((prev) => [...prev, movie]);
    }
  }
  function removeFromFavorites(movie) {
    setFavorites((prev) => prev.filter((m) => m.id !== movie.id));
  }
  function isFavorite(movie) {
    return favorites.some((m) => m.id === movie.id);
  }
  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
