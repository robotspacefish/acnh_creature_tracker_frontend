import React, { Component } from 'react';
import Button from '../elements/Button/Button';

class CreaturesTypeSelect extends Component {
  setActiveClass = type => (this.props.displayType === type ? 'active' : '');

  handleOnClick = e => (this.props.setDisplayType(e.target.dataset.type));

  renderTypeButtons = () => (
    ['all', 'bugs', 'fish'].map(type => {

      const classNames = `type-btn ${this.setActiveClass(type)}`;
      return <Button
        key={type}
        className={classNames}
        clickHandler={this.handleOnClick}
        dataType={type}
        content={type}
      />
    })
  );

  render() {
    return (
      <div className="CreaturesTypeSelect">
        {this.renderTypeButtons()}
      </div>
    );
  }
}

export default CreaturesTypeSelect;

