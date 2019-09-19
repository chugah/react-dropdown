import React, { Component } from 'react';
import CityDropdown from '../city/cityDropdown';
import options from '../../data/state-cities-list.js';
import './stateDropdown.css';

class StateDropdown extends Component {
  constructor(props) {
      super(props);
      this.state = {
        options,
        selectedState: 'Select an Option'
      }
      this.onChangeState = this.onChangeState.bind(this);
  }

  onChangeState = (event) => {
      this.setState({
          selectedState: event.target.value
      })
  }
  render () {
    return  (
      <div className='form-state'>
        <div className="form-group-state">
          <label htmlFor='state'>States</label>
          <select
            onChange={this.onChangeState}
            value={this.state.selectedState}
            className="form-control-state"
          >
            {
              this.state.options.map((option, i) => {
                return <option value={option.state} key={i}>{option.state}</option>
              })
            }
          </select>
        </div>
        <CityDropdown value={this.state.selectedState} onChange={this.onChangeState}/>
      </div>
    );
  }
}

export default StateDropdown;
