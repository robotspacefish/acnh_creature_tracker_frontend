import React, { Component } from 'react';
import Creature from './Creature';

class CreatureList extends Component {
  renderTableHead = () => (
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Location</th>
        <th>Shadow Size</th>
        <th>Time</th>
        <th>Price</th>
      </tr>
    </thead>
  );

  render() {
    return (
      <table className="CreatureList">
        {this.renderTableHead()}
        {this.props.creatures.map(creature => (
          <Creature creature={creature} />
        ))}
      </table>
    );
  }
};

export default CreatureList;