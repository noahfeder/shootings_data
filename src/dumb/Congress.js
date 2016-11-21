import React, { Component } from 'react';

export default class Congress extends Component {

  prepareRows() {
    if (this.props.reps.data.results) {
      return this.props.reps.data.results.map( el => {
        return (
          <div className="congress-row" key={ el.name } >
            <span>{ el.name } - { el.party } - { el.state }</span>
            <span>Phone: { el.phone } </span>
            <span><a href={ el.link } target="_blank">Link</a></span>
          </div>
        );
      });
    }

  }

  render() {
    return (
      <div className="show-bottom">
        <span className="congress-headers">Contact the local Congressional representatives</span>
        <div className="congress-wrapper">
        { this.prepareRows() }
        </div>
      </div>
    )
  }
}
