import React, { useState } from "react";
import "../css/Favorites.css";
import { useMovieContext } from "../movieContext";
import Moviecard from "./Moviecard";

const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites.length !== 0) {
    return (
      <>
        <h1 className="favorites-text">Favorite movies</h1>
        <div className="movies-grid">
          {favorites.map((movie) => {
            return <Moviecard key={movie.id} movie={movie} />;
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="favorites-empty">
          <h1>Favorites</h1>
          <p>Click the heart icon to add movies to your favorites!</p>
        </div>
      </>
    );
  }
};

export default Favorites;
