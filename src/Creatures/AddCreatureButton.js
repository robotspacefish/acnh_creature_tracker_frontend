import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

// import { connect } from 'react-redux';

const AddCreatureButton = props => {
  const { id, isOwned } = props;
  const handleOnClick = e => {
    // todo pass id to addCreature action to fetch post to user and add creature

  }

  return (
    <button onClick={handleOnClick} data-id={id}>
      <FontAwesomeIcon icon={isOwned ? faCheckCircle : faCircle} />
    </button>
  );
}

export default AddCreatureButton;
// export default connect()(AddCreatureButton);