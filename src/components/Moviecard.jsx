import React from "react";
import "../css/Moviecard.css";

const Moviecard = ({ movie }) => {
  const dates = movie.release_date.split("-");
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={`${movie.title}`}
      />
      <i
        className="fa-solid fa-heart heart-icon movie-overlay"
        style={{ color: "white" }}
      ></i>
      <div className="movie-info movie-overlay">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-date">{`${dates[1]}-${dates[0]}`}</p>
      </div>
    </div>
  );
};

export default Moviecard;
