import React from 'react';
import './Clock.css';

const Clock = ({ now }) => (
  <div className="Clock">
    <h2>{now}</h2>
  </div>
);

export default Clock;