import React, { Component } from 'react';
import store from '../index';
import { updateQuery } from '../actions';

export default class MySelect extends Component {

  displayName(raw) {
    switch (raw) {
      case "age_min":
        return "Min age";
      case "age_max":
        return "Max age";
      case "state":
        return "State";
      case "gender":
        return "Gender";
      case "race":
        return "Race";
      case "armed":
        return "Armed";
      case "charges":
        return "Charges";
      case "order":
        return "Order by";
      default:
        return '';
    }
  }

  handleChange(event) {
    store.dispatch(updateQuery(this.props.name, event.target.value))
  }

  prepareOptions() {
    return this.props.values.map( el => <option value={ el } key={ el }>{ el }</option> );
  }

  render() {
    return (
      <div className="select-wrapper">
        <label htmlFor={ this.props.name }>{ this.displayName(this.props.name) }</label>
        <select
          defaultValue=""
          id={ this.props.name }
          name={ this.props.name }
          onChange={ this.handleChange.bind(this) }
        >
          <option value="" />
          { this.prepareOptions() }
        </select>
      </div>
    );
  }
}
