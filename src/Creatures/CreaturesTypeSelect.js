import React from 'react';
import Button from '../elements/Button/Button';

const CreaturesTypeSelect = props => {
  const setActiveClass = type => (props.displayType === type ? 'active' : '');

  const handleOnClick = e => (props.setDisplayType(e.target.dataset.type));

  const renderTypeButtons = () => (
    ['all', 'bugs', 'fish'].map(type => {

      const classNames = `type-btn ${setActiveClass(type)}`;
      return <Button
        key={type}
        className={classNames}
        clickHandler={handleOnClick}
        dataType={type}
        content={type.toUpperCase()}
      />
    })
  );

  return (
    <div className="CreaturesTypeSelect">
      {renderTypeButtons()}
    </div>
  );
}

export default CreaturesTypeSelect;

