import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentCreatures } from '../actions/creatureActions';

class Clock extends Component {
  constructor() {
    super();
    const date = new Date();
    this.state = {
      date: date,
      startingHour: date.getHours(),
      startingMinute: date.getMinutes() // for testing
    };
  }
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
    }, () => (this.checkForHourChange()))
  }

  checkForHourChange() {
    const currentHour = this.state.date.getMinutes() // todo change to hour when done testing
    if (currentHour !== this.state.startingMinute) {
      this.props.fetchCurrentCreatures()
      console.log('updating current creatures')
      this.setState({
        // startingHour: this.state.date.getHours(),
        startingMinute: this.state.date.getMinutes()

      })
    }
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

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentCreatures: () => dispatch(fetchCurrentCreatures())
  }
};

export default connect(null, mapDispatchToProps)(Clock);