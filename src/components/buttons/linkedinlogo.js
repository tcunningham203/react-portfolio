function LinkedInButton(){

    const handleClick = () => {
        // Open GitHub profile in a new tab/window
        window.open("https://www.linkedin.com/in/tcunningham203/", "_blank");
      };
    return (
        <div className="flex w-max gap-5">
        <button variant="filled" className="github-button " onClick={handleClick}>
        <svg
          
          width="55"
          height="55"
        
          viewBox="0 0 72 72"
          className="fill-current text-black-50 transition duration-200  hover:scale-110 hover:text-[#0A66C2]"
        
        >
            <path
         
          d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36z"
        ></path>
        <path
          fill="#FFF"
          d="M59 57h-9.04V41.602c0-4.222-1.605-6.581-4.946-6.581-3.635 0-5.535 2.455-5.535 6.58V57h-8.712V27.667h8.712v3.95s2.62-4.847 8.845-4.847C54.546 26.77 59 30.57 59 38.428V57zM20.373 23.826c-2.968 0-5.373-2.424-5.373-5.413C15 15.423 17.405 13 20.373 13c2.967 0 5.37 2.424 5.37 5.413 0 2.989-2.403 5.413-5.37 5.413zM15.873 57h9.086V27.667h-9.085V57z"
        ></path>
        </svg>
        </button>
        </div>
      );
    }

export default LinkedInButton;
