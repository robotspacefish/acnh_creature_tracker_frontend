import React from 'react';
import { addCreature } from '../actions/userActions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import { connect } from 'react-redux';

const AddCreatureButton = props => {
  const { creature, isOwned } = props;
  const handleOnClick = e => {
    // todo pass id to addCreature action to fetch post to user and add creature
    // debugger
    props.addCreature(creature);
  }

  return (
    <button onClick={handleOnClick} data-id={creature.id}>
      <FontAwesomeIcon icon={isOwned ? faCheckCircle : faCircle} />
    </button>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addCreature: creature => dispatch(addCreature(creature)),
    removeCreature: creature => dispatch(removeCreature(creature))
  }
}

export default connect(null, mapDispatchToProps)(AddCreatureButton);