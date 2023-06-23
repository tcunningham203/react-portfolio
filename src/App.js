import React, { useState } from 'react';
import './App.css';
import './input.css';
import Header from './components/header';
import NavBar from './components/navbar';
import Footer from './components/footer';



function App() {
  return (
    <div className="App">
   <Header />
   <NavBar />
   
        <Footer />
      
    </div>
  );
}

export default App;
