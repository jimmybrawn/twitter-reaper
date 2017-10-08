import React, { Component } from 'react';
import './App.css';
import Config from './cfg/config.js'
import Twitter from 'twitter'

import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap'

const client = new Twitter({
  consumer_key: Config.apiKey,
  consumet_secret: Config.apiKeySecret,
  access_token_key: Config.accessToken,
  access_token_secret: Config.accessTokenSecret,
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a>Twitter Reaper</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1}>How it works</NavItem>
            <NavItem eventKey={2}>About</NavItem>
            <NavDropdown eventKey={3} title="Reaper" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Harvest Followers</MenuItem>
              <MenuItem eventKey={3.2}>Send DM's</MenuItem>
              <MenuItem eventKey={3.3}>Tell your friends</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Settings</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>

        <header className="App-header">

          <h1 className="App-title">Twitter Reaper reaps what you sow</h1>
        </header>
        <p className="App-intro container">
          The purpose of this app is to collect all your followers that don't follow you back. You can easily unfollow them or send them a DM to suggest to follow you back.
        </p>
      </div>
    );
  }
}

export default App;
