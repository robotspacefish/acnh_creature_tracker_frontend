import React, { Component } from 'react';
import Creature from './Creature';
import './Creatures.css';

class CreatureList extends Component {
  handleOnClick = e => (this.props.setSortType(e.target.dataset.type));

  isUsersPage = () => (this.props.creaturesToRender === "allCreatures");


  renderTableHead = () => (
    <thead>
      <tr>
        {this.isUsersPage() && <th>Ownership</th>}
        <th><button data-type="name" onClick={this.handleOnClick}>Name</button></th>
        <th><button data-type="c_type" onClick={this.handleOnClick}>Type</button></th>
        <th><button data-type="location" onClick={this.handleOnClick}>Location</button></th>
        <th><button data-type="shadow_size" onClick={this.handleOnClick}>Shadow Size</button></th>
        <th><button data-type="time" onClick={this.handleOnClick}>Time</button></th>
        <th><button data-type="price" onClick={this.handleOnClick}>Price</button></th>
      </tr>
    </thead>
  );

  render() {
    return (
      <table className="CreatureList">
        {this.renderTableHead()}

        {this.props.creatures.map(creature => (
          <Creature
            creature={creature}
            key={creature.id}
            isUsersPage={this.isUsersPage}
          />
        ))}
      </table>
    );
  }
};

export default CreatureList;