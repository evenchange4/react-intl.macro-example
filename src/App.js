import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { defineMessages } from 'react-intl.macro';
import Greet from './components/Greet/Greet';
import Body from './components/Body';
import logo from './logo.svg';
import './App.css';

const messages = defineMessages({
  'welcome': {
    id: 'Component.welcome',
    defaultMessage: 'Welcome to React',
    description: 'title',
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            {this.props.intl.formatMessage(messages.welcome)}
          </h1>
        </header>
        <Body />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Greet />
      </div>
    );
  }
}

export default injectIntl(App);
