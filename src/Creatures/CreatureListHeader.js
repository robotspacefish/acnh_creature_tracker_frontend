import React from 'react';
import CreaturesTypeSelect from './CreaturesTypeSelect';
import CreaturesHemisphereSelect from './CreaturesHemisphereSelect';

const CreatureListHeader = props => {
  const renderHemispheres = () => {
    const { currentPage, currentUser, currentUserHemisphere, displayHemisphere, setHemisphereType } = props;
    if (currentUser && currentPage === "user") {
      const hemisphere = currentUserHemisphere === "north" ? "NORTHERN" : "SOUTHERN";

      return <span className="hemisphere user-hemisphere">{hemisphere} HEMISPHERE</span>
    } else {
      return <CreaturesHemisphereSelect
        displayHemisphere={displayHemisphere}
        setHemisphereType={setHemisphereType}
      />
    }
  }

  return (
    <div className="CreatureListHeader">
      <CreaturesTypeSelect displayType={props.displayType} setDisplayType={props.setDisplayType} />

      {renderHemispheres()}

    </div>
  );
}

export default CreatureListHeader;

