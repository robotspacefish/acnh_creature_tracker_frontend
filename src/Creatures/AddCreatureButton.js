import React from 'react';
import { addCreature, removeCreature } from '../actions/userActions';
import Button from '../elements/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux';

const AddCreatureButton = props => {
  const { creature, isOwned } = props;
  const handleOnClick = e => {
    isOwned ? props.removeCreature(creature) : props.addCreature(creature);
  }

  const icon = () => (
    <FontAwesomeIcon icon={isOwned ? faCheckCircle : faCircle} />
  );

  return (
    <Button
      className="ownership-btn"
      clickHandler={handleOnClick}
      content={icon()}
    />
  );

}

const mapDispatchToProps = dispatch => {
  return {
    addCreature: creature => dispatch(addCreature(creature)),
    removeCreature: creature => dispatch(removeCreature(creature))
  }
}

export default connect(null, mapDispatchToProps)(AddCreatureButton);