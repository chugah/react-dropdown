import React, { Component } from 'react';
import Faq from '../faq/faq';
import * as data from '../../data/faq.json';
import options from '../../data/state-cities-list.js';
import './cityDropdown.css';

class CityDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options,
      selectedCity: 'Select an Option',
      data: [],
      visibility: false
    }
  }

  componentDidMount() {
    this.setState({
      data: data.default
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.selectedCity !== 'Select an Option' &&
      prevProps.value === 'Select an Option') {
      this.setState({
        selectedCity: 'Select an Option'
      })
    }
  }

  onChangeCity = (event) => {
      this.setState({
          selectedCity: event.target.value
      })
  }

  render() {
    const selectedState = this.props.value;
    const selectedCity = this.state.selectedCity;

    let option = this.state.options.filter(option => {
      return option.state === selectedState
    });

    return (
      <div className="form-group-city">
        <label htmlFor="cities">Cities</label>
        <select
          onChange={this.onChangeCity}
          value={this.state.selectedCity}
          className="form-control-city"
        >
          {
            option[0].cities.map((city, i) => {
              return <option key={i} value={city}>{city}</option>
            })
          }
        </select>
        <div className="row-city">
          { selectedState !== 'Select an Option' &&
            this.state.data.map((faq, i) => {
              if(selectedCity === faq.cityId && selectedState === faq.stateId) {
                return <Faq faq={faq} key={i} />
              } else {
                return [];
              }
            })
          }
        </div>
      </div>
    );
  }
}

export default CityDropdown;
