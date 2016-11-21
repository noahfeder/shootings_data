import React, { Component } from 'react';
import { Link } from 'react-router';

import store from '../index';
import { setActive } from '../actions';

export default class Row extends Component {

  setActive() {
    console.log(this.props)
    return store.dispatch(setActive(this.props));
  }

  render() {
    return (
      <div className='row'>
        <div className="name" onClick={ this.setActive.bind(this) }>
          <Link to="show">{ this.props.name }</Link>
        </div>
        <div className="location">
          { this.props.location || `${this.props.city}, ${this.props.state}`}
        </div>
        <div className="cause">
          { this.props.cause }
        </div>
        <div className="charges">
          { this.props.charges }
        </div>
      </div>
    )
  }
}
