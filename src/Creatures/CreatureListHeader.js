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
        isUsersPage={props.isUsersPage}
        currentUserHemisphere={props.currentUserHemisphere}
      />

    </div>
  );
}

export default CreatureListHeader;

