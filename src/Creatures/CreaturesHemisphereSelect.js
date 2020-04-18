import React from 'react';

const CreaturesHemisphereSelect = props => {
  const setActiveClass = type => (props.displayHemisphere === type ? 'active' : '');

  const handleOnClick = e => (
    props.setHemisphereType(e.target.dataset.hemisphere)
  );

  return (
    <div className="CreaturesHemisphereSelect">
      <button className={`hemisphere-btn ${setActiveClass("north")}`} data-hemisphere="north" onClick={handleOnClick}>Northern Hemisphere</button>
      <button className={`hemisphere-btn ${setActiveClass("south")}`} data-hemisphere="south" onClick={handleOnClick}>Southern Hemisphere</button>
    </div>
  );

}

export default CreaturesHemisphereSelect;
