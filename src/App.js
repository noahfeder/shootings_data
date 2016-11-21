import React, { Component } from 'react';
import Header from './dumb/Header';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        { this.props.children }
      </div>
    )
  }
};
