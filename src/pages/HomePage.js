import React, {Component} from 'react';

export default class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
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