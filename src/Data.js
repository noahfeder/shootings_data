import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from 'react-loading';

import store from './index';
import { fetchRecords } from './actions';

import Row from './dumb/Row';
import Selection from './Selection';
import Pagination from './Pagination';


class Data extends Component {
  componentWillMount() {
    if (this.props.data.length === 0) {
      store.dispatch(fetchRecords("?order=date"));
    }
  }

  prepareRows() {
    return this.props.data.map( (el, ind) => (ind >= this.props.page.min && ind < this.props.page.max) ? <Row { ...el } key={ el.id } /> : '' );
  }

  render() {
    return (
      <div className="data-wrapper">
        <Selection />
        <div className="data-rows">
          <Row name="Name" location="Location" cause="Cause" charges="Charges" />
          { this.props.fetching ? <Loading delay={ 0 } color='black' type='spin' /> : this.prepareRows() }
        </div>
        <Pagination dataLength={ this.props.data.length } />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    fetching: state.people.fetching,
    data: state.people.data,
    page: state.page,
    query: state.query
  }
}

export default connect(mapStateToProps)(Data)
