import './App.css';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  return (
    <div className="app-container">
      {/* Only one Navbar component with search functionality */}
      <Navbar onSearch={handleSearch} />
      <EventList searchQuery={searchQuery} />
    </div>
  );
}

export default App;
