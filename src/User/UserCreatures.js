import React from 'react';
import CreaturesContainer from '../Creatures/CreaturesContainer';

const UserCreatures = props => {
  return (
    <div className="UserCreatures">
      <CreaturesContainer creaturesToRender="allCreatures" />
    </div>
  );
};

export default UserCreatures;