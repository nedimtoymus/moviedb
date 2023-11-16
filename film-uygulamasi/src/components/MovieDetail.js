// components/MovieDetail.js

import React from 'react';
import './MovieDetail.css'; // Stilleri ekledik

const MovieDetail = ({ movie }) => {
  return (
    <div className="movie-detail">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-poster"
      />
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
