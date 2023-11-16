// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './App.css';

// const API_KEY = 'ddd4cc3d42332ef258167ba976fb78b0';
// const POPULAR_MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular';
// const SEARCH_MOVIES_URL = 'https://api.themoviedb.org/3/search/movie';

// const App = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchPopularMovies = async () => {
//       try {
//         const response = await axios.get(POPULAR_MOVIES_URL, {
//           params: {
//             api_key: API_KEY,
//             language: 'en-US',
//             page: 1,
//           },
//         });

//         setMovies(response.data.results);
//       } catch (error) {
//         console.error('Error fetching popular movies:', error);
//       }
//     };

//     fetchPopularMovies();
//   }, []);

//   const fetchSearchedMovies = async () => {
//     try {
//       const response = await axios.get(SEARCH_MOVIES_URL, {
//         params: {
//           api_key: API_KEY,
//           language: 'en-US',
//           query: searchTerm,
//           page: 1,
//         },
//       });

//       setMovies(response.data.results);
//     } catch (error) {
//       console.error('Error fetching searched movies:', error);
//     }
//   };

//   const handleSearch = async (event) => {
//     if (event.key === 'Enter') {
//       await setSearchTerm(event.target.value);
//       fetchSearchedMovies();
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Film Listesi</h1>
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Film ara..."
//           value={searchTerm}
//           onChange={(event) => setSearchTerm(event.target.value)}
//           onKeyPress={handleSearch}
//         />
//       </div>
//       <div className="movie-list">
//         {movies.map((movie) => (
//           <div key={movie.id} className="movie-card">
//             <img
//               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//               alt={movie.title}
//             />
//             <h2>{movie.title}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

// App.js
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import './App.css';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;


