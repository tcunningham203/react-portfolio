import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GitHubButton from './components/buttons/githublogo';
import './App.css';
import './input.css';
import LinkedInButton from './components/buttons/linkedinlogo';
import YoutubeButton from './components/buttons/youtubelogo';
import Header from './components/header';
import Footer from './components/footer';
import ResumePage from './components/pages/resume';
import ContactPage from './components/pages/contact';
import PortfolioPage from './components/pages/portfolio';
import AboutPage from './components/pages/aboutme';

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
      <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/resume" component={ResumePage} />
        </Switch>
      </div>
    </Router>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
