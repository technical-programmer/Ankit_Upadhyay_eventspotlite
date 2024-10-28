import React from 'react';
import './eventModel.css';

const EventModel = ({ event, onClose }) => {
  return (
    <div className="modal-background" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">{event.name}</h2>
        <img src={event.image} alt={event.name} className="modal-image" />
        <p className="modal-description">{event.description}</p>
        <button className="modal-close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default EventModel;
