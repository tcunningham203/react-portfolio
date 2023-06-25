import React from 'react';
import GitHubButton2 from './buttons/githublogo2';

export default function Project(props) {
  const { name, weblink, gitlink, pic, about, about2 } = props.data;

  return (
    <div className="animate-fade-in-cards card bg-fuchsia-50  rounded z-10 mx-1">
        <div className=" text-center  bg-fuchsia-100  text-2xl mb-3 rounded ">
      <p>{name}</p>
  </div>
      <div className="flex items-center justify-evenly mb-3 relative">

      <a
          className="text-xl text-violet-900 z-10  "
          href={gitlink}
          target="_blank"
          rel="noopener noreferrer"
        >


          <GitHubButton2 />
         
        </a>



        <a className="transform transition duration-200 hover:filter hover:blur-sm hover:text-purple-400" href={weblink} target="_blank" rel="noopener noreferrer">
          <img
            className="w-60 h-40 object-cover rounded "
            src={pic}
           
          />
          
         
        </a>
      
      </div>
      <div className="px-2 text-center xl:text-lg text-sm">
        <p>{about}</p>
      </div>
      <div className="px-2 text-center xl:text-lg text-sm">
        <p>{about2}</p>
      </div>
    </div>
  );
}
