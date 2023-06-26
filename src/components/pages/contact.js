import React from 'react';


function ContactPage() {


  return (
    <div className="flex flex-col items-center mx-auto">
      <div className="relative w-full z-10">
        <div className="flex flex-col lg:flex-row">
          <div className="text-center lg:text-right sm:text-5xl xl:text-6xl p-4 text-2xl lg:pt-6 mx-auto animate-fade-in-title">
            <div>Let's work together.</div>
          </div>
        </div>
        <div className="animate-expand-line2 "></div>
      </div>

      <div className="flex flex-col  items-center z-10 xl:px-36 md:px-24">
        <div className="px-6 z-10">
          <div className="text-center text-justify z-10 animate-fade-in-paragraphs2">
            <p className="md:text-2xl text-lg pt-2 pb-6" >
              Reach out on one of my socials, or send a message through this site using the form below.
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default ContactPage;
