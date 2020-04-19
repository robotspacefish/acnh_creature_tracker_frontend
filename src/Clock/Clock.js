import React, { Component } from 'react';

export default class Clock extends Component {
  state = {
    date: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
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