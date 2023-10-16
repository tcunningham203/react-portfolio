function LinkedInBig(){

    const handleClick = () => {
        
        window.open("https://www.linkedin.com/in/tcunningham203/", "_blank");
      };
    return (
        <div>
        <button className="flex items-center github-button flex min-w-full fill-current bg-emerald-800 rounded-full text-white transition duration-150   hover:bg-[#0A66C2] hover:scale-105 p-1" onClick={handleClick}>
        
        <svg
 width="65"
 height="65"
  viewBox="35 35 290 290"
  
>
   <path fill="white "
        d="M1705 3243c-571-50-1042-397-1249-921-62-155-87-282-93-477-4-144-2-188 15-290C480 966 913 515 1504 378c140-32 385-36 541-10 295 51 547 177 759 382 178 171 290 342 366 555 225 635-8 1334-568 1702-166 110-387 195-573 222-83 12-263 20-324 14zm-358-630c108-51 131-218 41-299-107-98-271-51-309 88-42 156 118 282 268 211zm1061-492c67-30 143-112 174-189 22-55 23-67 26-444l3-388h-309l-4 313c-3 312-3 313-28 362-33 64-76 90-150 89-76 0-124-26-158-83l-27-46-3-317-3-318h-309v1020h310v-130l41 45c83 89 152 116 289 112 73-3 107-9 148-26zm-988-511v-510h-320v1020h320v-510z"
        transform="matrix(.1 0 0 -.1 0 360)"
      ></path>
</svg>
<p className="text-xl px-10 md:text-2xl " >in/tcunningham203</p>
        </button></div>
      );
    }

export default LinkedInBig;

