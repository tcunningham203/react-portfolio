import React from 'react';
import Footer from './footer';

function SvgBg() {
    return (
        <div className="fixed top-0 left-0 z-0 w-full h-full pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1220 1080"
          className="w-full h-full"
        >
        <g fill="none" mask='url("#SvgjsMask1002")'>
          <path
            fill="rgba(255, 255, 255, .01)"
            d="M1920 0h-877.91L1920 59.13z"
          ></path>
          <path
            fill="rgba(255, 255, 255, .15)"
            d="M1042.09 0L1920 59.13v59.74L498.39 0z"
          ></path>
          <path
            fill="rgba(255, 255, 255, .22)"
            d="M498.39 0L1920 118.87V588L234.66 0z"
          ></path>
          <path
            fill="rgba(255, 255, 255, .15)"
            d="M234.66 0L1920 588v112.96L0.16 0z"
          ></path>
          <path fill="rgba(0, 0, 0, .14)" d="M0 1080h501.48L0 677.3z"></path>
          <path
            fill="rgba(0, 0, 0, .10)"
            d="M0 677.3L501.48 1080h693.81L0 633.65z"
          ></path>
          <path
            fill="rgba(0, 0, 0, .05)"
            d="M0 633.65L1195.29 1080h270.35L0 561.42z"
          ></path>
          <path
            fill="rgba(0, 0, 0, .02)"
            d="M0 561.42L1465.64 1080h200.7L0 428.53z"
          ></path>
        </g>
        <defs>
          <mask id="SvgjsMask1002">
            <path fill="#fff" d="M0 0H1920V1080H0z"></path>
          </mask>
        </defs>
      </svg>


    </div>










  );
}

export default SvgBg;