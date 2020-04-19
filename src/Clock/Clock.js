import React, { Component } from 'react';

class Clock extends Component {
  state = {
    date: new Date()
  }

  renderDateTime() {
    const { date } = this.state
    const timeToDisplay = date.toLocaleTimeString();
    const dateToDisplay = date.toDateString();
    return (
      <div className="Clock container">
        <h2>It is {timeToDisplay} on {dateToDisplay}</h2>
      </div>
    );
  }

  render() {
    return this.renderDateTime();
  }
}

export default Clock;