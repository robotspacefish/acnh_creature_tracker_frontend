import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button'
import { capitalize } from '../helpers/helpers';

const CreaturesHemisphereSelect = props => {
  const isActive = type => (props.displayHemisphere === type);

  const handleOnClick = e => (
    props.updateHemisphereType("displayHemisphere", e.target.dataset.type)
  );

  const renderHemisphereSelect = () => {
    /** if this is a user's page, only show the hemisphere they selected when signing up, if it's the current creature page, show buttons to select between hemispheres */
    if (props.isUsersPage()) {
      const hemisphere = props.currentUserHemisphere === 'north' ? "NORTHERN" : "SOUTHERN";

      return (
        <span className="user-hemisphere btn btn-outline-success">{hemisphere} HEMISPHERE</span>
      );
    } else {
      return renderHemisphereButtons();
    }
  }

  const renderHemisphereButtons = () => {
    const buttons = ['north', 'south'].map(type => {
      return (
        <Button
          variant="outline-success"
          size="sm"
          key={`${type}ern-hemisphere`}
          active={isActive(type)}
          data-type={type}
          onClick={handleOnClick}
          className="option-btn"
        >
          {`${capitalize(type)}ern Hemisphere`}
        </Button>
      )
    });

    return (
      <ButtonGroup className="CreaturesHemisphereSelect">
        {buttons}
      </ButtonGroup>
    );
  };

  return (
    <div className="CreaturesHemisphereSelect">
      {renderHemisphereSelect()}
    </div>
  );

}

export default CreaturesHemisphereSelect;
