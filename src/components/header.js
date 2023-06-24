import React, { useEffect, useState } from 'react';

function Header({ currentPage }) {
  const [headerBgColor, setHeaderBgColor] = useState('');

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

    setHeaderBgColor(colorClass);
  }, [currentPage]);

  return (
    <header className={`flex md:justify-center justify-between py-4 px-6 ${headerBgColor}`}>
      <h1 className="text-4xl font-bold">Tim Cunningham</h1>
    </header>
  );
}

export default Header;
