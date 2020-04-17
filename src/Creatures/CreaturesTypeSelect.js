import React, { Component } from 'react';
import Button from '../elements/Button/Button';

class CreaturesTypeSelect extends Component {
  setActiveClass = type => (this.props.displayType === type ? 'active' : '');

  handleOnClick = e => (this.props.setDisplayType(e.target.dataset.type));

  renderSortButtons = () => (
    ['all', 'bugs', 'fish'].map(type => {
      const classNames = `sort-btn ${this.setActiveClass(type)}`;
      return <Button
        key={type}
        className={classNames}
        clickHandler={this.handleOnClick}
        data-type={type}
      />
    })
  );

  render() {
    return (
      <div className="CreaturesTypeSelect">
        {this.renderSortButtons()}
      </div>
    );
  }
}

export default CreaturesTypeSelect;

