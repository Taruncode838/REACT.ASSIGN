import React from 'react';

function Confirmation({ booking }) {
  return (
    <div>
      <h2>Booking Confirmation</h2>
      <p>Thank you for booking {booking.movie.title} at {booking.showtime.time}!</p>
    </div>
  );
}

export default Confirmation;