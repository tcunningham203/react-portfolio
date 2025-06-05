import React from 'react';

function AboutPage() {
 

  return (
    <div className="flex flex-col items-center mx-auto">
      <div className="relative w-full z-10">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full 2xl:w-3/5 xl:w-2/3 lg:w-2/3">
            <div className="text-center lg:text-right sm:text-5xl xl:text-6xl p-4 text-2xl lg:pt-16 mx-auto text-slate-500">
              <span className="animate-fade-in-word" style={{'--word-index': '0'}}>Let's make</span>&nbsp;
           
              <span className="animate-fade-in-word text-slate-700" style={{'--word-index': '2'}}>your idea</span>&nbsp;
              <span className="animate-fade-in-word text-slate-900" style={{'--word-index': '5'}}>real.</span>&nbsp;
             
            </div>
           
          </div>
          <div className="w-full lg:w-2/5 xl:w-1/4 2xl:w-1/5 lg:pe-24 xl:pe-0">
          <img
              
              className="object-cover h-48 w-400 rounded-lg mx-auto animate-fam-pic"
              src="/react-portfolio/images/IMG_3778.png"
              alt="Cunningham Family"
            />
          </div>
        </div>
        <div className="animate-expand-line "></div>
      </div>
      
      <div className="flex flex-col md:flex-row sm:w-4/5 xl:w-3/5 items-center z-10 ">
        <div className="px-6 z-10">
          <div className="text-center text-justify z-10 animate-fade-in-paragraphs">
            <p className="md:text-2xl text-lg py-4">Originally from Connecticut, I've called Japan my home for over ten years. I've gotten married, become a father, and learned how experiencing other cultures can unite and improve us.</p>
            <p className="md:text-2xl text-lg py-4">Although this portfolio primarily features my work in web design, I've acquired a wide range of skills through various jobs over the years. I've designed games, school curriculums, marketing materials, and have taken on major roles in both management and client relations.</p>
            <p className="md:text-2xl text-lg py-4">More recently, I've been creating a wide range of documentaries on the YouTube channel Tin Sensei, where I research, write, edit, and market videos. I encourage you to visit the channel, where I'm sure you'll find a topic that interests you.</p>
            <p className="md:text-2xl text-lg py-4">I love the work I've done in teaching, management, web design, games, and content creation, but I'm always open to new career opportunities, projects, and experiences. And as a US Citizen, I'm available to perform remote work with American businesses.</p>
            <p className="md:text-2xl text-lg py-4">Thanks for taking an interest in me and my work, and feel free to contact me with any questions or ideas!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
