import React from 'react';

function AboutPage() {
 

  return (
    <div className="flex flex-col items-center mx-auto">
      <div className="relative w-full z-10">
        <div className="flex flex-col lg:flex-row">
         
            <div className="text-center lg:text-right sm:text-5xl xl:text-6xl p-4 text-2xl lg:pt-6 mx-auto animate-fade-in-title">
           <div> See my previous works.</div>
           
           
          </div>
        
        </div>
        <div className="animate-expand-line2 "></div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center z-10 xl:px-36 md:px-24">
        <div className="px-6 z-10">
          <div className="text-center text-justify z-10 animate-fade-in-paragraphs2">
            <p className="md:text-2xl text-lg py-2">View an application by selecting its picture. Or, select the GitHub icon to be taken to that project's repository.</p>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
