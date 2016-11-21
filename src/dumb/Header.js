import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-top">
          <div className="header-text title">Police Killings Data</div>
          <div className="header-text disclaimer">
            DISCLAIMER: All data is taken from <a href="http://mappingpoliceviolence.org/" target="_blank">Mapping Police Violence</a>, and this site makes no claims as to the accuracy or content of that data.
            All videos displayed are fetched programatically from YouTube, and this site takes no responsibility for their relevance, accuracy, or content.
          </div>
        </div>
        <div className="nav">
          <div className="nav-link home">
            <Link to="/">Home</Link>
          </div>
          <div className="nav-link data">
            <Link to="data">Data</Link>
          </div>
          <div className="nav-link about">
            <Link to="about">About</Link>
          </div>
        </div>
      </div>
      )
  }
}
