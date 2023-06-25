import React from 'react';

function AboutPage() {
 

  return (
    <div className="flex flex-col items-center mx-auto">
      <div className="relative w-full z-10">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5">
            <div className="text-center lg:text-right sm:text-5xl xl:text-6xl p-4 text-2xl lg:pt-16 mx-auto">
              <span className="animate-fade-in-word" style={{'--word-index': '1'}}>Let's</span>&nbsp;
              <span className="animate-fade-in-word" style={{'--word-index': '2'}}>make</span>&nbsp;
              <span className="animate-fade-in-word" style={{'--word-index': '3'}}>your</span>&nbsp;
              <span className="animate-fade-in-word" style={{'--word-index': '4'}}>idea</span>&nbsp;
              <span className="animate-fade-in-word" style={{'--word-index': '5'}}>real.</span>
            </div>
           
          </div>
          <div className="w-full lg:w-2/5">
          <img
              
              className="object-cover h-48 w-400 rounded-lg mx-auto animate-fam-pic"
              src="./images/IMG_3778.png"
              alt="image description"
            />
          </div>
        </div>
        <div className="animate-expand-line "></div>
      </div>
      
      <div className="flex flex-col md:flex-row items-center z-10 xl:px-36 md:px-24">
        <div className="px-6 z-10">
          <div className="text-center text-justify z-10 animate-fade-in-paragraphs">
            <p className="md:text-2xl text-lg py-4">Originally from Connecticut, I've called Japan my home for over ten years. I've gotten married, become a father, and learned how experiencing other cultures can unite and improve us.</p>
            <p className="md:text-2xl text-lg py-4">As head of my school's English department, I was tasked with designing the yearly curriculum. Over the years, I've designed hundreds of activities, games, and worksheets for all ages. Targeting a different culture's sensibilities made me a more versatile creator. Training teachers and assigning them daily tasks made me a more effective team leader.</p>
            <p className="md:text-2xl text-lg py-4">Now, I'm applying my design and leadership experience to a new field: web design.</p>
            <p className="md:text-2xl text-lg py-4">I'm looking forward to my next project!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
