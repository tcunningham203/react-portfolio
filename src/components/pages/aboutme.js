import React, { useEffect, useRef } from 'react';

function AboutPage() {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    image.style.opacity = 0;

    const fadeIn = () => {
      image.style.opacity = 1;
    };

    image.addEventListener('load', fadeIn);

    return () => {
      image.removeEventListener('load', fadeIn);
    };
  }, []);

  return (
    <div className="flex flex-col items-center mx-auto">
      <div className="relative w-full   z-10">
        <div className="flex flex-col lg:flex-row ">
          <div className="w-full lg:w-3/5">
            <div className="text-center lg:text-right sm:text-5xl xl:text-6xl p-4 text-2xl   lg:pt-16 mx-auto">Let's make your idea real.</div>
          </div>
          <div className="w-full lg:w-2/5">
            <img
              ref={imageRef}
              className="object-cover h-48 w-400 rounded-lg mx-auto opacity-0 transition-opacity duration-[3000ms]"
              src="./images/IMG_3778.png"
              alt="image description"
            />
          </div>
        </div> <div className="bg-black h-px w-4/5 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
      </div>
      <div className="flex flex-col md:flex-row items-center z-10 xl:px-36 md:px-24">
        <div className=" px-6 z-10">
          <div className="text-center text-justify z-10">
            <p className="md:text-2xl text-lg py-4">
              Originally from Connecticut, I've called Japan my home for over ten years. I've gotten married, become a
              father, and learned that experiences from other cultures can unite us and improve us.
            </p>
            <p className="md:text-2xl text-lg py-4">
              As head of my school's English department, I was tasked with designing
              the school curriculum. Over the years, I've designed hundreds of activities, games, and worksheets for all ages. Targeting a different culture's sensibilities made me a more versatile creator. Training teachers and assigning them daily tasks made me a more effective team leader.
            </p>
            <p className="md:text-2xl text-lg py-4">
              Now, I'm applying my design and leadership experience to a new field: web design.
              
            </p>
            <p className="md:text-2xl text-lg py-4">
        
              I'm looking forward to my next project!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
