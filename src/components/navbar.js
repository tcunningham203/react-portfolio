import React, { useState } from 'react';
import ResumePage from './pages/resume';
import ContactPage from './pages/contact';
import PortfolioPage from './pages/portfolio';
import AboutPage from './pages/aboutme';
import Header from './header';
function NavBar() {
  const [currentPage, setCurrentPage] = useState('aboutme');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let content;
  if (currentPage === 'aboutme') {
    content = <AboutPage />;
  } else if (currentPage === 'portfolio') {
    content = <PortfolioPage />;
  } else if (currentPage === 'contact') {
    content = <ContactPage />;
  } else if (currentPage === 'resume') {
    content = <ResumePage />;
  }

  return (
    <div><div className='flex flex-row justify-around  bg-gray-200'>
    <Header /><div className="hidden md:block pt-3">
      <nav className="flex items-center justify-end py-4 px-6 bg-gray-200">
        <ul className="flex space-x-8">
          <li className={`${currentPage === 'aboutme' ? 'font-bold' : ''}`}>
            <button
              onClick={() => handlePageChange('aboutme')}
              className="nav-link hover:text-blue-500"
            >
              About Me
            </button>
          </li>
          <li className={`${currentPage === 'portfolio' ? 'font-bold' : ''}`}>
            <button
              onClick={() => handlePageChange('portfolio')}
              className="nav-link hover:text-blue-500"
            >
              Portfolio
            </button>
          </li>
          <li className={`${currentPage === 'contact' ? 'font-bold' : ''}`}>
            <button
              onClick={() => handlePageChange('contact')}
              className="nav-link hover:text-blue-500"
            >
              Contact
            </button>
          </li>
          <li className={`${currentPage === 'resume' ? 'font-bold' : ''}`}>
            <button
              onClick={() => handlePageChange('resume')}
              className="nav-link hover:text-blue-500"
            >
              Resume
            </button>
          </li>
        </ul>
      </nav></div></div>
      <div className="md:hidden ">
      <nav className="flex justify-center py-4 px-6 bg-gray-200">
        <ul className="flex space-x-14">
          <li className={`${currentPage === 'aboutme' ? 'font-bold' : ''}`}>
            <button
              onClick={() => handlePageChange('aboutme')}
              className="nav-link hover:text-blue-500"
            >
              About Me
            </button>
          </li>
          <li className={`${currentPage === 'portfolio' ? 'font-bold' : ''}`}>
            <button
              onClick={() => handlePageChange('portfolio')}
              className="nav-link hover:text-blue-500"
            >
              Portfolio
            </button>
          </li>
          <li className={`${currentPage === 'contact' ? 'font-bold' : ''}`}>
            <button
              onClick={() => handlePageChange('contact')}
              className="nav-link hover:text-blue-500"
            >
              Contact
            </button>
          </li>
          <li className={`${currentPage === 'resume' ? 'font-bold' : ''}`}>
            <button
              onClick={() => handlePageChange('resume')}
              className="nav-link hover:text-blue-500"
            >
              Resume
            </button>
          </li>
        </ul>
      </nav></div>



      <div>{content}</div> 
    </div>
  );
}

export default NavBar;
