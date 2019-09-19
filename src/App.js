import React from 'react';
import Dropdown from './components/dropdown';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <h2>Please select a state and city to see its FAQs.</h2>
          <Dropdown />
        </div>
      </div>
    </div>
  );
}

export default App;
