import React, { Component } from 'react';
import Creature from './Creature';
import './Creatures.css';

class CreatureList extends Component {
  handleOnClick = e => (this.props.setSortType(e.target.dataset.type));

  isUsersPage = () => (this.props.creaturesToRender === "allCreatures");

  isOwnedByUser = (creatureId) => (
    !!this.props.userCreatures.find(c => c.id === creatureId)
  );

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

  renderCreature(creature) {
    const owned = this.isOwnedByUser(creature.id);
    return <Creature
      creature={creature}
      key={creature.id}
      isUsersPage={this.isUsersPage}
      isOwned={owned}
    />
  }
  render() {
    return (
      <table className="CreatureList">
        {this.renderTableHead()}

        <tbody>
          {this.props.creatures.map(creature => (
            this.renderCreature(creature)
          ))}
        </tbody>
      </table>
    );
  }
};

export default CreatureList;