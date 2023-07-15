import React, { useState } from 'react';
import './App.css';
import './input.css';
import NavBar from './components/navbar';
import SvgBg from './components/svgbg';
function App() {
  const [currentPage, setCurrentPage] = useState('aboutme');

  const handlePageChange = (page) => setCurrentPage(page);

  return (
   // to make changes to the deloyed site, type "npm run build" then "npm run deploy"
    <div className="App">
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      <SvgBg/>
      
    </div>
    
  );
}

export default App;
