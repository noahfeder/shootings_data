import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from './index';
import { fetchRecords, pageDown, pageUp } from './actions'

import Row from './dumb/Row';
import MySelect from './dumb/MySelect';


class Data extends Component {
  componentWillMount() {
    if (this.props.data.length === 0) {
      store.dispatch(fetchRecords());
    }
  }

  search(query) {
    let q = "?";
    for (let key in query) {
      if (typeof query[key] === "string" && query[key]) {
        q += key + "=" + query[key] + "&"
      }
    }
    store.dispatch(fetchRecords(q));
  }

  prepareRows() {
    return this.props.data.map( (el, ind) => (ind >= this.props.min && ind < this.props.max) ? <Row { ...el } key={ el.id } /> : '' );
  }

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
      <div className="data-wrapper">
        <div className="selection">
          <MySelect name="age_min" values={ [...Array(108).keys()] } />
          <MySelect name="age_max" values={ [...Array(108).keys()] } />
          <MySelect name="state" values={ ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"] } />
          <MySelect name="gender" values={ ["Female", "Male", "Transgender", "Unknown"] } />
          <MySelect name="race" values={ ["Black", "Hispanic", "Pacific Islander", "White", "Asian", "Unknown race", "Native American"] } />
          <MySelect name="armed" values={ ["Unclear", "Vehicle", "Unarmed", "Allegedly Armed"] } />
          <MySelect name="charges" values={ ["Charged", "Acquitted", "Convicted", "No Known Charges"] } />
          <div className="select-wrapper">
            <button className="makeQuery" onClick={ () => this.search(this.props.query) }>Search</button>
          </div>
        </div>
        <div className="data-rows">
          <Row name="Name" location="Location" cause="Cause" charges="Charges" />
          { this.prepareRows() }
        </div>
        <div className="pagination">
          <button onClick={ () => this.pageDown() }>&lt;</button>
            <span>{ `Page ${this.props.max / this.props.size} of ${Math.ceil(this.props.data.length / this.props.size)}` }</span>
          <button onClick={ () => this.pageUp() }>&gt;</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    fetching: state.people.fetching,
    data: state.people.data,
    query: state.query,
    max: state.page.max,
    min: state.page.min,
    size: state.page.size
  }
}

export default connect(mapStateToProps)(Data)
