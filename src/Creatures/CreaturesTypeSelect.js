import React, { Component } from 'react';

class CreaturesTypeSelect extends Component {
  setActiveClass = type => (this.props.displayType === type ? 'active' : '');

  handleOnClick = e => (this.props.setDisplayType(e.target.dataset.type));

  render() {
    return (
      <div className="CreaturesTypeSelect">
        <button data-type="all" className={this.setActiveClass("all")} onClick={this.handleOnClick}>All</button>
        <button data-type="bugs" className={this.setActiveClass("bugs")} onClick={this.handleOnClick}>Bugs</button>
        <button data-type="fish" className={this.setActiveClass("fish")} onClick={this.handleOnClick}>Fish</button>
      </div>
    );
  }
}

export default CreaturesTypeSelect;

