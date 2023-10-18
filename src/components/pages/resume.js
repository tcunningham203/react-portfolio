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
            <div>Everything so far.</div>
          </div>
        </div>
        <div className="animate-expand-line2"></div>
      </div>

      <div className="flex flex-col  items-center z-10 px-5 xl:px-36 md:px-24">
        <div className="px-6 z-10">
          <div className="text-center sm:text-justify z-10 animate-fade-in-email" >
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

      <div className="z-10 my-3 px-4 animate-fade-in-resume" style={{'--word-index': '4'}}>
        <div className="bg-white bg-opacity-70 rounded-2xl  p-2 flex flex-col justify-between">
          <p className='text-center text-lg p-1 '>Explore my full work history.</p>
      
          <h3 className="text-xl p-1 text-blue-700 font-bold text-center hover:text-green-700">
          <a className=''  href='https://docs.google.com/document/d/1llq1DX6X4X4ZdicFgtOZx8yR6TEdXid3t6eXNyRES-U' download='Resume - Tim Cunningham' >View Resume (Google Docs)</a></h3>
        
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
