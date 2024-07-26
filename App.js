import React, { useState, useEffect } from 'react';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import ShowtimeList from './components/ShowtimeList';
import Confirmation from './components/Confirmation';
import BookingForm from './components/BookingForm';
function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showtimes, setShowtimes] = useState([]);
  const [booking, setBooking] = useState({});

  useEffect(() => {
    fetch('/api/movies')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    fetch(`/api/showtimes/${movie.id}`)
      .then(response => response.json())
      .then(data => setShowtimes(data));
  };

  const handleShowtimeSelect = (showtime) => {
    setBooking({ ...booking, showtime });
  };

  const handleBookingSubmit = (bookingData) => {
    fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    })
      .then(response => response.json())
      .then(data => setBooking(data));
  };

  return (
    <div>
      <MovieList movies={movies} onSelect={handleMovieSelect} />
      {selectedMovie && (
        <MovieDetails movie={selectedMovie} />
      )}
      {showtimes.length > 0 && (
        <ShowtimeList showtimes={showtimes} onSelect={handleShowtimeSelect} />
      )}
      {booking.showtime && (
        <BookingForm booking={booking} onSubmit={handleBookingSubmit} />
      )}
      {booking.id && (
        <Confirmation booking={booking} />
      )}
    </div>
  );
}

export default App;