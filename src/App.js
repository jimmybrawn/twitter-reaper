import React, { Component } from 'react';
import './App.css';
import Config from './cfg/config.js';
import Twitter from 'twitter';

// Pages.
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

// Navigation.
import Navigation from './Navigation';

// Router.
import { BrowserRouter as Router, Route } from 'react-router-dom';

const client = new Twitter({
  consumer_key: Config.apiKey,
  consumet_secret: Config.apiKeySecret,
  access_token_key: Config.accessToken,
  access_token_secret: Config.accessTokenSecret,
});

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route exact path='/' component={HomePage}/>
          <Route path='/login' component={LoginPage} />
        </div>
      </Router>
    );
  }
}