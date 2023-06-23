import React from 'react';
import NavBar from './navbar';

function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-gray-200">
      <h1 className="text-4xl font-bold">Your Name</h1>
      <NavBar />
    </header>
  );
}

export default Header;
