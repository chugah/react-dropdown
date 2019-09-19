import React from 'react';
import './faq.css';

const Faq = props => (
  <div className="col-sm-4">
    <h4>FAQs</h4>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">{props.faq.Q1}</li>
      <li className="list-group-item">{props.faq.A1}</li>
      <li className="list-group-item">{props.faq.Q2}</li>
      <li className="list-group-item">{props.faq.A2}</li>
    </ul>
  </div>
);

export default Faq;
