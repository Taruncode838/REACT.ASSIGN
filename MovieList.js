import React from 'react';

function MovieList({ movies, onSelect }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <button onClick={() => onSelect(movie)}>{movie.title}</button>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;