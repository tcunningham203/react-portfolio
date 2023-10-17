import React, { useEffect, useState } from 'react';
import ResumePage from './pages/resume';
import ContactPage from './pages/contact';
import PortfolioPage from './pages/portfolio';
import AboutPage from './pages/aboutme';
import Header from './header';
import Footer from './footer';

function NavBar({ currentPage, handlePageChange }) {
  const [bgColor, setBgColor] = useState('bg-sky-700');

  useEffect(() => {
    let colorClass = '';

    if (currentPage === 'aboutme') {
      colorClass = 'bg-sky-700';
    } else if (currentPage === 'portfolio') {
      colorClass = 'bg-fuchsia-950';
    } else if (currentPage === 'resume') {
      colorClass = 'bg-stone-600';
    } else if (currentPage === 'contact') {
      colorClass = 'bg-emerald-800';
    }

    setBgColor(colorClass);
  }, [currentPage]);


  const [bgColor2, setBgColor2] = useState('bg-sky-100');

  useEffect(() => {
    let colorClass2 = '';

    if (currentPage === 'aboutme') {
      colorClass2 = 'bg-sky-100';
    } else if (currentPage === 'portfolio') {
      colorClass2 = 'bg-violet-200';
    } else if (currentPage === 'resume') {
      colorClass2 = 'bg-stone-200';
    } else if (currentPage === 'contact') {
      colorClass2 = 'bg-lime-50';
    }

    setBgColor2(colorClass2);
  }, [currentPage]);


  return (
    <div className={`flex flex-col h-screen ${bgColor}`} style={{ transition: 'background-color 1.5s ease' }}>
      <div className="flex flex-row justify-around relative z-10">
        <Header currentPage={currentPage} />
        <div className="hidden md:block pt-3 ">
          <nav className="flex items-center justify-end py-4 px-6 text-white ">
            <ul className="flex space-x-8">
              <li className={`${currentPage === 'aboutme' ? 'text-orange-300 ' : ''}`}>
                <a href="#About" 
                  onClick={() => handlePageChange('aboutme')}
                  className="nav-link hover:text-orange-300 transition duration-75 hover:scale-125"
                >
                  About
                </a>
              </li>
              <li className={`${currentPage === 'portfolio' ? 'text-orange-300 ' : ''}`}>
                <a href="#Portfolio"
                  onClick={() => handlePageChange('portfolio')}
                  className="nav-link hover:text-orange-300 transition duration-75 hover:scale-125 "
                >
                  Portfolio
                </a>
              </li> 
              <li className={`${currentPage === 'resume' ? 'text-orange-300 ' : ''}`}>
                <a href="#Resume"
                  onClick={() => handlePageChange('resume')}
                  className="nav-link hover:text-orange-300  transition duration-75 hover:scale-125"
                >
                  Resume
                </a>
              </li>
              <li className={`${currentPage === 'contact' ? 'text-orange-300 ' : ''}`}>
                <a href="#Contact"
                  onClick={() => handlePageChange('contact')}
                  className="nav-link hover:text-orange-300 transition duration-75 hover:scale-125"
                >
                  Contact
                </a>
              </li>

            </ul>
          </nav>
        </div>
      </div>

      <div className="md:hidden">
        <nav className="flex justify-center text-white">
          <ul className="flex ">
            <li className={`${currentPage === 'aboutme' ? 'text-orange-300 ' : ''}`}>
              <a href="#About"
                onClick={() => handlePageChange('aboutme')}
                className=" py-4  px-4 nav-link hover:text-orange-300 transition duration-75 hover:scale-125"
              >
                About
              </a>
            </li>
            <li className={`${currentPage === 'portfolio' ? 'text-orange-300 ' : ''}`}>
              <a href="#Portfolio"
                onClick={() => handlePageChange('portfolio')}
                className=" py-4  px-4 nav-link hover:text-orange-300 transition duration-75 hover:scale-125 "
              >
                Portfolio
              </a>
            </li>
            <li className={`${currentPage === 'resume' ? 'text-orange-300 ' : ''}`}>
              <a href="#Resume"
                onClick={() => handlePageChange('resume')}
                className="py-4  px-4 nav-link hover:text-orange-300  transition duration-75 hover:scale-125"
              >
                Resume
              </a>
            </li>
            <li className={`${currentPage === 'contact' ? 'text-orange-300 ' : ''}`}>
              <a href="#Contact"
                onClick={() => handlePageChange('contact')}
                className=" py-4  px-5 nav-link hover:text-orange-300 transition duration-75 hover:scale-125"
              >
                Contact
              </a>
            </li>

          </ul>
        </nav>
      </div>

      <div className={`flex flex-col flex-1 ${bgColor2}`} style={{ transition: 'background-color 3s ease' }}>
        {currentPage === 'aboutme' && <AboutPage />}
        {currentPage === 'portfolio' && <PortfolioPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'resume' && <ResumePage />}
        <Footer currentPage={currentPage} />
      </div>
    </div>
  );
}

export default NavBar;
