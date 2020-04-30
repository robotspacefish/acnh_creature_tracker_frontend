import React from 'react';
import CreaturesTypeSelect from './CreaturesTypeSelect';
import CreaturesHemisphereSelect from './CreaturesHemisphereSelect';

const CreatureListHeader = props => {

  return (
    <div className="CreatureListHeader">
      <CreaturesTypeSelect
        displayType={props.displayType}
        updateDisplayType={props.updateType}
      />

      <CreaturesHemisphereSelect
        displayHemisphere={props.displayHemisphere}
        updateHemisphereType={props.updateType}
      />

    </div>
  );
}

export default CreatureListHeader;

