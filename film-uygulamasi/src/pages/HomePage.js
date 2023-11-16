// pages/HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

const API_KEY = 'ddd4cc3d42332ef258167ba976fb78b0';
const POPULAR_MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular';
const SEARCH_MOVIES_URL = 'https://api.themoviedb.org/3/search/movie';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url = searchTerm ? SEARCH_MOVIES_URL : POPULAR_MOVIES_URL;
        const response = await axios.get(url, {
          params: {
            api_key: API_KEY,
            language: 'en-US',
            page: 1,
            query: searchTerm,
          },
        });

        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [searchTerm]);

  return (
    <div className="home-page">
      <h1>Film Listesi</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Film ara..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button onClick={() => setSearchTerm('')}>Temizle</button>
      </div>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
