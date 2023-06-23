import React from 'react';
import GitHubButton from './components/buttons/githublogo';
import './App.css';
import './input.css';
import LinkedInButton from './components/buttons/linkedinlogo';
import YoutubeButton from './components/buttons/youtubelogo';

function App() {
  return (
    <div className="App">
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <header className="App-header">
      <GitHubButton /> <LinkedInButton /> <YoutubeButton />
      <h1>test</h1>test
      </header>
    </div>
  );
}

export default App;
