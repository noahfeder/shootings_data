import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from './index';
import { fetchRecords, resetPage } from './actions';
import { VALID_QUERIES } from './types';
import MySelect from './dumb/MySelect';

class Selection extends Component {
  search(query) {
    let q = "?";
    for (let key in query) {
      if (typeof query[key] === "string" && query[key]) {
        q += key + "=" + query[key] + "&"
      }
    }
    store.dispatch(resetPage());
    store.dispatch(fetchRecords(q));
  }

  render() {
    return (
      <div className="selection">
        <MySelect name="age_min" values={ [...Array(108).keys()] } />
        <MySelect name="age_max" values={ [...Array(108).keys()] } />
        <MySelect name="state" values={ ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"] } />
        <MySelect name="gender" values={ ["Female", "Male", "Transgender", "Unknown"] } />
        <MySelect name="race" values={ ["Black", "Hispanic", "Pacific Islander", "White", "Asian", "Unknown race", "Native American"] } />
        <MySelect name="armed" values={ ["Unclear", "Vehicle", "Unarmed", "Allegedly Armed"] } />
        <MySelect name="charges" values={ ["Charged", "Acquitted", "Convicted", "No Known Charges"] } />
        <MySelect name="order" values={ VALID_QUERIES } />
        <div className="select-wrapper">
          <button className="makeQuery" onClick={ () => this.search(this.props.query) }>Search</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    query: state.query
  }
}

export default connect(mapStateToProps)(Selection)
