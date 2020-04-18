import React from 'react';
import { addCreature, removeCreature } from '../actions/userActions';
import { connect } from 'react-redux';

const AddCreatureButton = props => {
  const { creature, isOwned } = props;
  const handleOnClick = e => {
    isOwned ? props.removeCreature(creature) : props.addCreature(creature);
  }

  return (
    <i
      className={`ownership-btn fas fa-2x ${isOwned ? 'fa-check-circle' : 'fa-circle'}`}
      onClick={handleOnClick}>
    </i>
  );

}

const mapDispatchToProps = dispatch => {
  return {
    addCreature: creature => dispatch(addCreature(creature)),
    removeCreature: creature => dispatch(removeCreature(creature))
  }
}

export default connect(null, mapDispatchToProps)(AddCreatureButton);