import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { AppBar, Toolbar, } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import logo from './logo.svg';
import './App.css';
import Homepage from './containers/Homepage';
import About from './containers/About';
import Disqus from './components/lib/disqus';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <AppBar>
              <Toolbar>
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">FPV Build Calculator</h1>
                <div>
                  <Link className='HeaderLink' to="/">Home</Link>
                  <Link className='HeaderLink' to="/about">About</Link>
                </div>
              </Toolbar>
            </AppBar>
          </header>
          <div className="MainContentContainer">
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={About} />
          </div>
          <footer>
            <Disqus />
            <div>
              &copy; Aaron Decker 2017 - Contributors welcome, Suggestions Sought | info@fpvbuildcalc.com
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
