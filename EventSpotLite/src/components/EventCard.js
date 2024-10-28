import React from 'react';
import './eventCard.css';

const EventCard = ({ event, onClick }) => {
  const handleClick = () => {
    onClick(event);
  };

  return (
    <div className="event-card" onClick={handleClick}>
      <img src={event.image} alt={event.name} className="event-card-image" />
      <div className="event-card-info">
        <h2 className="event-card-name">{event.name}</h2>
        <p className="event-card-date">{event.date}</p>
        <p className="event-card-venue">{event.location}</p>
      </div>
    </div>
  );
};

export default EventCard;
