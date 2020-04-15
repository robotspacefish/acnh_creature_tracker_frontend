import React from 'react';
import CreatureList from './CreatureList';
import './Creatures.css';

const CreaturesContainer = props => {

  return (
    <div className="CreaturesContainer">
      <CreatureList creatures={props.creatures} />
    </div>
  );
}

export default CreaturesContainer;