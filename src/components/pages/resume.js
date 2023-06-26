import React from 'react';
import Skills from "../skills";
import { skills } from '../skillsdata';

function ResumePage() {
const skillsData = skills;

  return (
    <div className="flex flex-col items-center mx-auto">
      <div className="relative w-full z-10">
        <div className="flex flex-col lg:flex-row">
          <div className="text-center lg:text-right sm:text-5xl xl:text-6xl p-4 text-2xl lg:pt-6 mx-auto animate-fade-in-title">
            <div>My skills and experiences so far.</div>
          </div>
        </div>
        <div className="animate-expand-line2"></div>
      </div>

      <div className="flex flex-col  items-center z-10 xl:px-36 md:px-24">
        <div className="px-6 z-10">
          <div className="text-center text-justify z-10 animate-fade-in-paragraphs2">
            <p className="md:text-2xl text-lg pt-2 pb-6" >
              Concepts and technologies I've worked with as a full stack developer.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 z-10">
        {skillsData.map((skills, index) => (
          <div key={index} className="animate-fade-in-cards">
            <Skills data={skills} />
          </div>
        ))}
      </div>

      <div className="z-10 my-3 px-4 animate-fade-in-word" style={{'--word-index': '15'}}>
        <div className="bg-white bg-opacity-70 rounded-2xl  p-4 flex flex-col justify-between">
          <p className='text-center text-lg pb-2'>Explore my full work history.</p>
          <h3 className="text-2xl text-blue-700 font-bold text-center hover:text-green-700">
          <a className=''  href='./images/TimCunningham_Resume_Jun2023.pdf' download='Resume - Tim Cunningham' >Download Resume (PDF)</a></h3>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
