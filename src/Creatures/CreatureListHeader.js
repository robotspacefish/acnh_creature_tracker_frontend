import React from 'react';
import CreaturesTypeSelect from './CreaturesTypeSelect';
import CreaturesHemisphereSelect from './CreaturesHemisphereSelect';

const CreatureListHeader = props => {
  return (
    <div className="CreatureListHeader">
      <CreaturesTypeSelect displayType={props.displayType} setDisplayType={props.setDisplayType} />
      <CreaturesHemisphereSelect displayHemisphere={props.displayHemisphere} setHemisphereType={props.setHemisphereType} />
    </div>
  );
}

export default CreatureListHeader;

