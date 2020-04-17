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
        {/* <button data-type="all" className={this.setActiveClass("all")} onClick={this.handleOnClick}>All</button>
        <button data-type="bugs" className={this.setActiveClass("bugs")} onClick={this.handleOnClick}>Bugs</button>
        <button data-type="fish" className={this.setActiveClass("fish")} onClick={this.handleOnClick}>Fish</button> */}
        {this.renderSortButtons()}

      </div>
    );
  }
}

export default CreaturesTypeSelect;

