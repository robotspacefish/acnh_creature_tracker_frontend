import React from 'react';
import CreaturesTypeSelect from './CreaturesTypeSelect';
import CreaturesHemisphereSelect from './CreaturesHemisphereSelect';

const CreatureListHeader = props => {
  return (
    <div className="CreatureListHeader">
      <CreaturesTypeSelect />
      <CreaturesHemisphereSelect />
    </div>
  );
}

export default CreatureListHeader;

