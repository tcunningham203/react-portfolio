import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="flex space-x-4">
      <NavLink
        to="/about"
        activeClassName="text-blue-500"
        className="text-gray-600 hover:text-gray-900"
      >
        About Me
      </NavLink>
      <NavLink
        to="/portfolio"
        activeClassName="text-blue-500"
        className="text-gray-600 hover:text-gray-900"
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/contact"
        activeClassName="text-blue-500"
        className="text-gray-600 hover:text-gray-900"
      >
        Contact
      </NavLink>
      <NavLink
        to="/resume"
        activeClassName="text-blue-500"
        className="text-gray-600 hover:text-gray-900"
      >
        Resume
      </NavLink>
    </nav>
  );
}

export default NavBar;
