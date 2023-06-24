import React, { useEffect } from 'react';
import SvgBg from '../svgbg';

function ContactPage() {
  useEffect(() => {
   
    document.body.style.overflow = 'hidden';

    
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <div className="relative h-screen overflow-x-auto">
   
    <SvgBg/>

      <div className="flex flex-col flex-1 justify-relative">
        <div className="flex-grow overflow-y-auto sm:container text-justify px-10 md:px-40 mx-auto relative z-10">

        <p className="text-gray-600 py-4">
          Originally from Connecticut, I've called Japan my home for almost ten years. I've gotten married, become a father, and learned that experiences from other cultures can unite us and improve us.
        </p>
        <p className="text-gray-600 py-4">
          For many years, I taught English in Japanese schools, eventually rising to head of the department. In that position, I was tasked with designing the school curriculum, filling it with several years worth of original activities and games. I also had to design hundreds of worksheets for students to practice what they've learned. Targeting sensibilities and learning methods from a different culture has helped me become a more versitile creator.
        </p>
        <p className="text-gray-600 py-4">
          Now, I'm taking those experiences and applying them to a new field: web design. My skills as a curriculum and worksheet designer have allowed me to efficiently plan out and implement CSS elements into my websites. I'm looking forward to my next project!
        </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
