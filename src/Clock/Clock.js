import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {
  render() {
    return (
      <div className="Clock container">
        <h2>{this.props.now}</h2>
      </div>
    );
  }
}

export default Clock;