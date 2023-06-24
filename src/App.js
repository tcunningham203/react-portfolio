import React, { useState } from 'react';
import './App.css';
import './input.css';
import NavBar from './components/navbar';
import Footer from './components/footer';
import SvgBg from './components/svgbg';
function App() {
  const [currentPage, setCurrentPage] = useState('aboutme');

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.history.pushState(null, '', `/${page}`);
  };

  return (
    <div className="App">
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      <SvgBg/>
      
    </div>
  );
}

export default App;
