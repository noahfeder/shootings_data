import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
  render() {
    return (
      <div>
        <h1>About this site</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(About)
