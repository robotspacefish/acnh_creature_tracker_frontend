import React from 'react';

const CreaturesHemisphereSelect = props => {
  const setActiveClass = type => (props.displayHemisphere === type ? 'active' : '');

  const handleOnClick = e => (
    props.updateHemisphereType('displayHemisphere', e.target.dataset.hemisphere)
  );

  const renderHemisphereSelect = () => {
    /** if this is a user's page, only show the hemisphere they selected when signing up, if it's the current creature page, show buttons to select between hemispheres */
    if (props.isUsersPage()) {
      const hemisphere = props.currentUserHemisphere === 'north' ? "NORTHERN" : "SOUTHERN";

      return (
        <span className="hemisphere user-hemisphere">{hemisphere} HEMISPHERE</span>
      );
    } else {
      return (
        <>
          <button className={`hemisphere ${setActiveClass("north")}`} data-hemisphere="north" onClick={handleOnClick}>NORTHERN HEMISPHERE</button>
          <button className={`hemisphere ${setActiveClass("south")}`} data-hemisphere="south" onClick={handleOnClick}>SOUTHERN HEMISPHERE</button>
        </>
      );
    }
  }

  return (
    <div className="CreaturesHemisphereSelect">
      {renderHemisphereSelect()}
    </div>
  );

}

export default CreaturesHemisphereSelect;
