// pages/MovieDetailPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieDetail from '../components/MovieDetail';
import { useParams } from 'react-router-dom';

const API_KEY = 'ddd4cc3d42332ef258167ba976fb78b0';

const MovieDetailPage = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: API_KEY,
              language: 'en-US',
            },
          }
        );


        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetail();
  }, [id]);

  return (
    <div className="movie-detail-page">
      {movie ? <MovieDetail movie={movie} /> : <p>Loading...</p>}
    </div>
  );
};

export default MovieDetailPage;

