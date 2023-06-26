import React from 'react';
import ContactForm from '../contactform';
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
        <div className="px-6 z-10">
          <div className="text-center sm:text-justify z-10 animate-fade-in-paragraphs2">
            <p className="md:text-2xl text-lg pt-2 pb-3">
              Email me, reach out on socials, or send your details via this form.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center md:space-x-6 justify-evenly lg:flex-row lg:mt-7  z-10">
        <div className="flex justify-center">
         
          <ul className="space-y-2">
            <li className="ps-6 flex items-center   animate-fade-in-contact3" style={{'--word-index': '7'}}>
              <GmailButton />
              <a className="px-5 sm:text-lg md:text-2xl " href="mailto:tcunningham203@gmail.com">tcunningham203@gmail.com</a>
            </li>
            <div className="animate-expand-line3 "  style={{'--word-index': '8'}}></div>
            <div className=" w-full  flex justify-center animate-fade-in-contact3" style={{'--word-index': '7'}}>
          <ContactForm />
        </div>
          </ul>
        </div>

        <div className="z-10 mt-4  flex justify-center">
         
         <ul className="space-y-2 md:space-y-8   ">
         <li className=" animate-fade-in-contact" style={{'--word-index': '14'}}>
             <GitHubBig />
             
           </li>
         <li className="animate-fade-in-contact" style={{'--word-index': '15'}}>
             <LinkedInBig />
             
           </li>
          
           <li className=" animate-fade-in-contact" style={{'--word-index': '16'}}>
             <InstaBig />
             
           </li>
           <li className=" animate-fade-in-contact" style={{'--word-index': '17'}}>
             <YoutubeBig />
             
           </li>
           
          
          
         </ul>
       </div>



        
        
       
      </div>
    </div>
  );
}

export default ContactPage;
