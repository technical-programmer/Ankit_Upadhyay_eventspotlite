import React, { useState, useEffect } from 'react';
import './eventList.css';
import EventModel from './EventModel';
import EventCard from './EventCard';
import eventsData from '../data/event.json';

const EventList = ({ searchQuery }) => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [filteredEvents, setFilteredEvents] = useState([]);

    useEffect(() => {
        const filterEvents = () => {
            return eventsData.filter(event => {
                const query = searchQuery.toLowerCase();
                return event.name.toLowerCase().includes(query) || event.location.toLowerCase().includes(query);
            });
        };
        setFilteredEvents(filterEvents());
    }, [searchQuery]);

    const handleCardClick = (event) => {
        setSelectedEvent(event);
    };

    const handleCloseModal = () => {
        setSelectedEvent(null);
    };

    return (
        <div className="event-list">
            {filteredEvents.length ? (
                filteredEvents.map(event => (
                    <EventCard key={event.id} event={event} onClick={handleCardClick} />
                ))
            ) : (
                <div className="no-events-message">No events found.</div>
            )}
            {selectedEvent && (
                <EventModel event={selectedEvent} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default EventList;
