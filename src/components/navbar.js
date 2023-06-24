import React, { useEffect, useState } from 'react';
import ResumePage from './pages/resume';
import ContactPage from './pages/contact';
import PortfolioPage from './pages/portfolio';
import AboutPage from './pages/aboutme';
import Header from './header';

function NavBar({ currentPage, handlePageChange }) {
  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    let colorClass = '';

    if (currentPage === 'aboutme') {
      colorClass = 'bg-blue-200';
    } else if (currentPage === 'portfolio') {
      colorClass = 'bg-purple-200';
    } else if (currentPage === 'resume') {
      colorClass = 'bg-gray-300';
    } else if (currentPage === 'contact') {
      colorClass = 'bg-green-200';
    }

    setBgColor(colorClass);
  }, [currentPage]);

  return (
    <div className={`flex flex-col h-screen bg-blue-200 ${bgColor}`}>
      <div className="flex flex-row justify-around ">
        <Header currentPage={currentPage} />
        <div className="hidden md:block pt-3">
          <nav className="flex items-center justify-end py-4 px-6">
            <ul className="flex space-x-8">
              <li className={`${currentPage === 'aboutme' ? 'text-blue-700 ' : ''}`}>
                <button
                  onClick={() => handlePageChange('aboutme')}
                  className="nav-link hover:text-blue-700 transition duration-75 hover:scale-125"
                >
                  About Me
                </button>
              </li>
              <li className={`${currentPage === 'portfolio' ? 'text-purple-700 ' : ''}`}>
                <button
                  onClick={() => handlePageChange('portfolio')}
                  className="nav-link hover:text-purple-700 transition duration-75 hover:scale-125 "
                >
                  Portfolio
                </button>
              </li>
              <li className={`${currentPage === 'resume' ? 'text-sky-800 ' : ''}`}>
                <button
                  onClick={() => handlePageChange('resume')}
                  className="nav-link hover:text-sky-800  transition duration-75 hover:scale-125"
                >
                  Resume
                </button>
              </li>
              <li className={`${currentPage === 'contact' ? 'text-lime-900 ' : ''}`}>
                <button
                  onClick={() => handlePageChange('contact')}
                  className="nav-link hover:text-lime-900 transition duration-75 hover:scale-125"
                >
                  Contact
                </button>
              </li>
            
            </ul>
          </nav>
        </div>
      </div>

      <div className="md:hidden">
        <nav className="flex justify-center ">
          <ul className="flex ">
          <li className={`${currentPage === 'aboutme' ? 'text-blue-700 ' : ''}`}>
                <button
                  onClick={() => handlePageChange('aboutme')}
                  className=" py-4  px-4 nav-link hover:text-blue-700 transition duration-75 hover:scale-125"
                >
                  About
                </button>
              </li>
              <li className={`${currentPage === 'portfolio' ? 'text-purple-700 ' : ''}`}>
                <button
                  onClick={() => handlePageChange('portfolio')}
                  className=" py-4  px-4 nav-link hover:text-purple-700 transition duration-75 hover:scale-125 "
                >
                  Portfolio
                </button>
              </li>
              <li className={`${currentPage === 'resume' ? 'text-sky-800 ' : ''}`}>
                <button
                  onClick={() => handlePageChange('resume')}
                  className="py-4  px-4 nav-link hover:text-sky-800  transition duration-75 hover:scale-125"
                >
                  Resume
                </button>
              </li>
              <li className={`${currentPage === 'contact' ? 'text-lime-900 ' : ''}`}>
                <button
                  onClick={() => handlePageChange('contact')}
                  className=" py-4  px-5 nav-link hover:text-lime-900 transition duration-75 hover:scale-125"
                >
                  Contact
                </button>
              </li>
             
          </ul>
        </nav>
      </div>

      <div className={`flex flex-col  flex-1 ${bgColor}`}>
        {currentPage === 'aboutme' && <AboutPage />}
        {currentPage === 'portfolio' && <PortfolioPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'resume' && <ResumePage />}
      </div>
    </div>
  );
}

export default NavBar;
