import React from 'react';

function ShowtimeList({ showtimes, onSelect }) {
  return (
    <ul>
      {showtimes.map((showtime) => (
        <li key={showtime.id}>
          <button onClick={() => onSelect(showtime)}>{showtime.time}</button>
        </li>
      ))}
    </ul>
  );
}

export default ShowtimeList;