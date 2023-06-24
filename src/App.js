import React, { useState } from 'react';
import './App.css';
import './input.css';
import NavBar from './components/navbar';
import Footer from './components/footer';

function App() {
  const [currentPage, setCurrentPage] = useState('aboutme');

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.history.pushState(null, '', `/${page}`);
  };

  return (
    <div className="App">
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* ... */}
      <Footer currentPage={currentPage} />
    </div>
  );
}

export default App;
