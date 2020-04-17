import React from 'react';

const AddCreatureButton = props => {
  const handleOnClick = e => {
    // todo
  }

  return (
    <button onClick={handleOnClick} data-id={props.id}>Toggle Ownership</button>
  );
}


export default AddCreatureButton;