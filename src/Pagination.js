import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from './index';
import { pageDown, pageUp } from './actions';

class Pagination extends Component {

  pageDown() {
    if (this.props.min) {
      store.dispatch(pageDown());
    }
  }

  pageUp() {
    if (this.props.max - this.props.data.length < 0) {
      store.dispatch(pageUp());
    }
  }

  render() {
    return (
      <div className="pagination">
        <button onClick={ () => this.pageDown() }>&lt;</button>
          <span>{ `Page ${this.props.max / this.props.size} of ${Math.ceil(this.props.dataLength / this.props.size)}` }</span>
        <button onClick={ () => this.pageUp() }>&gt;</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    max: state.page.max,
    min: state.page.min,
    size: state.page.size,
  }
}

export default connect(mapStateToProps)(Pagination)
