import React, { useEffect, useState } from 'react';
import GitHubButton from './buttons/githublogo';
import YoutubeButton from './buttons/youtubelogo';
import LinkedInButton from './buttons/linkedinlogo';
import InstaButton from './buttons/instagramlogo';

function Footer({ currentPage }) {


  return (
    <footer className="py-4 fixed bottom-0 left-0 w-full">
      <div className="container mx-auto flex items-center justify-evenly lg:flex-row lg:items-center">
        <div className="flex items-center space-x-4">
          <GitHubButton />
          <LinkedInButton />
          <InstaButton />
          <YoutubeButton />
          
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-evenly lg:flex-row lg:items-center pt-3">
        <p className="text-gray-600">© 2023 Tim Cunningham</p>
      </div>
    </footer>
  );
}

export default Footer;
