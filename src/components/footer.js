import React from 'react';
import GitHubButton from './buttons/githublogo';
import YoutubeButton from './buttons/youtubelogo';
import LinkedInButton from './buttons/linkedinlogo';
import InstaButton from './buttons/instagramlogo';

function Footer() {
  return (
    <footer className="sticky top-[100vh] py-4">
      <div className="flex justify-evenly">
        <div className="flex items-center space-x-4">
          <GitHubButton />
          <LinkedInButton />
          <InstaButton />
          <YoutubeButton />
        </div>
      </div>
      <div className="flex justify-evenly pt-3">
        <p className="text-gray-600">© 2023 Tim Cunningham</p>
      </div>
    </footer>
  );
}

export default Footer;
