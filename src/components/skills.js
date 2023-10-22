import React from 'react';



export default function Skills(props) {
    const { name, list } = props.data;

  return (
    <div className="animate-fade-in-cards h-full flex flex-wrap justify-center z-10">
      
      <div className="z-10 px-2  mb-3" >
        <div className="bg-white bg-opacity-70 rounded-2xl px-5 h-full p-2 flex flex-col justify-center w-72">
          <h3 className="text-2xl font-bold text-center ">{name}</h3>
          <ul className=" list-inside flex-grow ">
        {list.map((item, index) => (
          <li key={index} className="list-item">
            &ndash; {item}
          </li>
        ))}
      </ul>
        </div>
      </div>
      

      
      




    </div>
  );
};








