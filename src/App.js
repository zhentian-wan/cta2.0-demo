import React, { Component } from 'react';
import logo, {
    ReactComponent as ReactLogo
} from "./logo.svg";

import './App.scss';
import styles from './styles.module.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <ReactLogo className="App-logo-svg" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
            <a
                className={styles['error']}
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
      </div>
    );
  }
}

export default App;
