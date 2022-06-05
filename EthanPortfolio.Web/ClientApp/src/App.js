import React, { Component } from 'react';
import Layout from './components/Layout/Layout.js';
import Home from './components/HomePage/Home.js';
import About from './components/AboutPage/About.js';
import Resume from './components/ResumePage/Resume.js';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
        <>
            <Layout/>
            <div className="Layout">
                  <Home />
                  <About />
                  <Resume />
            </div>
        </>
    );
  }
}
