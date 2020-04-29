import React from 'react';
import CreaturesTypeSelect from './CreaturesTypeSelect';
import CreaturesHemisphereSelect from './CreaturesHemisphereSelect';

const CreatureListHeader = props => {
  const renderHemispheres = () => {
    // TODO get current page from match.url or pass path down
    const { currentUser, currentUserHemisphere, displayHemisphere, setHemisphereType, updateType } = props;
    // if (currentUser && currentPage === "user") {
    if (currentUser === "user") {

      const hemisphere = currentUserHemisphere === "north" ? "NORTHERN" : "SOUTHERN";

      return <span className="hemisphere user-hemisphere">{hemisphere} HEMISPHERE</span>
    } else {
      return <CreaturesHemisphereSelect
        displayHemisphere={displayHemisphere}
        setHemisphereType={setHemisphereType}
        updateType={updateType}
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

