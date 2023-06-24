import React, { useEffect, useState } from 'react';
import ResumePage from './pages/resume';
import ContactPage from './pages/contact';
import PortfolioPage from './pages/portfolio';
import AboutPage from './pages/aboutme';
import Header from './header';

function NavBar({ currentPage, handlePageChange }) {
  const [navBgColor, setNavBgColor] = useState('');

  useEffect(() => {
    let colorClass = '';

    if (currentPage === 'aboutme') {
      colorClass = 'bg-blue-50';
    } else if (currentPage === 'portfolio') {
      colorClass = 'bg-purple-50';
    } else if (currentPage === 'resume') {
      colorClass = 'bg-gray-100';
    } else if (currentPage === 'contact') {
      colorClass = 'bg-green-50';
    }

    setNavBgColor(colorClass);
  }, [currentPage]);

  return (
    <div>
      <div className={`flex flex-row justify-around ${navBgColor}`}>
        <Header currentPage={currentPage} />
        <div className="hidden md:block pt-3">
          <nav className={`flex items-center justify-end py-4 px-6 ${navBgColor}`}>
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
          </nav>
        </div>
      </div>

      <div className="md:hidden">
        <nav className={`flex justify-center py-4 px-6 ${navBgColor}`}>
          <ul className="flex space-x-10">
            <li className={`${currentPage === 'aboutme' ? 'font-bold' : ''}`}>
              <button
                onClick={() => handlePageChange('aboutme')}
                className="nav-link hover:text-blue-500"
              >
                About
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
        </nav>
      </div>

      <div>
        {currentPage === 'aboutme' && <AboutPage />}
        {currentPage === 'portfolio' && <PortfolioPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'resume' && <ResumePage />}
      </div>
    </div>
  );
}

export default NavBar;
