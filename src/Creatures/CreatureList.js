import React from 'react';
import Creature from './Creature';

const CreatureList = props => (
  <table>
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
    {props.creatures.map(creature => (
      <Creature creature={creature} />
    ))}
  </table>
);

export default CreatureList;