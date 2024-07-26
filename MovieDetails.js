import React from 'react';

function MovieDetails({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
    </div>
  );
}

export default MovieDetails;