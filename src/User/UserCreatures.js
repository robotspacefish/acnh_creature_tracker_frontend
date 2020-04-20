import React from 'react';
import CreaturesContainer from '../Creatures/CreaturesContainer';

const UserCreatures = props => {
  return (
    <div className="UserCreatures container">
      <CreaturesContainer creaturesToRender="allCreatures" />
    </div>
  );
};

export default UserCreatures;