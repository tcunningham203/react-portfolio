import React, { useState } from 'react';
import './App.css';
import './input.css';
import NavBar from './components/navbar';
import SvgBg from './components/svgbg';
function App() {
  const [currentPage, setCurrentPage] = useState('aboutme');

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.history.pushState(null, '', `/${page}`);
  };

  return (
    <Router basename="/react-portfolio">
    <div className="App">
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      <SvgBg/>
      
    </div>
    </Router>
  );
}

export default App;
