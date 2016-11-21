import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <p>
          Law enforcement officers have killed over 4362 people since 2013, including 858 in the first 9 months of 2016.
        </p>
        <p>
          Awareness campaigns sometimes grow within a community after these killings, and a few gain national attention. However, the vast majority go under-reported, and even the most disturbing cases quickly fade from the public eye.
        </p>
        <p>
          This site aims to increase awareness with an easily searchable database, links to additional information, and any relevant video content.
        </p>
        <p>
          <span className="red">WARNING:</span> Some of this content may be disturbing.
        </p>
        <Link to="data" className="blue">Explore the data.</Link>
      </div>
    )
  }
}
