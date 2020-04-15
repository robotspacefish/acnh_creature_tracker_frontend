import React from 'react';
import Creature from './Creature';

const CreatureList = props => {
  const renderTableHead = () => (
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

  return (
    <table className="CreatureList">
      {renderTableHead()}
      {props.creatures.map(creature => (
        <Creature creature={creature} />
      ))}
    </table>
  );
};

export default CreatureList;