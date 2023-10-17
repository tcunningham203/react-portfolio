import React from 'react';
// import ContactForm from '../contactform';
import GitHubBig from '../buttons/githubbig';
import YoutubeBig from '../buttons/youtubebig';
import LinkedInBig from '../buttons/linkedinbig';
import InstaBig from '../buttons/instagrambig';
import GmailButton from '../buttons/gmaillogo';

function ContactPage() {

  return (
    <div className="flex flex-col mx-auto">
      <div className="relative w-full z-10 flex flex-col mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="text-center lg:text-right sm:text-5xl xl:text-6xl p-4 text-2xl lg:pt-6 mx-auto animate-fade-in-title">
            <div>Let's work together.</div>
          </div>
        </div>
        <div className="animate-expand-line2 " ></div>
      </div>

      <div className="flex flex-col  items-center z-10 px-5 xl:px-36 md:px-24">
        <div className=" z-10">
          <div className="text-center sm:text-justify z-10 animate-fade-in-email" >
          
             
           
          
                  <ul className="space-y-2">
                    <li className=" flex items-center  sm:text-lg md:text-3xl " >   
                    
                      <GmailButton />
                      <div className="px-2 sm:text-xl md:text-3xl " >tcunningham203@gmail.com</div>
                    </li>
                    {/* <div className="animate-expand-line3 " style={{ '--word-index': '8' }}></div>
                    <div className=" w-full  flex justify-center animate-fade-in-contact3" style={{ '--word-index': '7' }}>
                      <ContactForm />
                    </div> */}
                  </ul>
                 
          </div>
        </div>
      </div>

      <div className="flex flex-col align-center items-center md:space-x-6 justify-evenly lg:flex-row lg:mt-7  z-10">
        {/* <div className="flex justify-center">

          <ul className="space-y-2">
            <li className="ps-6 flex items-center   animate-fade-in-contact3" style={{ '--word-index': '7' }}>
              <GmailButton />
              <a className="px-5 sm:text-lg md:text-2xl " href="mailto:tcunningham203@gmail.com">tcunningham203@gmail.com</a>
            </li>
            <div className="animate-expand-line3 " style={{ '--word-index': '8' }}></div>
            <div className=" w-full  flex justify-center animate-fade-in-contact3" style={{ '--word-index': '7' }}>
              <ContactForm />
            </div>
          </ul>
        </div> */}

        <div className="z-10 mt-4 align-center items-center flex justify-center">

          <ul className="space-y-2 md:space-y-8   ">
            <li className=" animate-fade-in-contact " style={{ '--word-index': '2' }}>
              <GitHubBig />

            </li>
            <li className="animate-fade-in-contact" style={{ '--word-index': '3' }}>
              <LinkedInBig />

            </li>

            <li className=" animate-fade-in-contact " style={{ '--word-index': '4' }}>
              <InstaBig />

            </li>
            <li className=" animate-fade-in-contact" style={{ '--word-index': '5' }}>
              <YoutubeBig />

            </li>



          </ul>
        </div>






      </div>
    </div>
  );
}

export default ContactPage;
