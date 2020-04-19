import React, { Component } from 'react';
import Button from '../elements/Button/Button';
import Creature from './Creature';
import './Creatures.css';

class CreatureList extends Component {
  handleOnClick = e => (this.props.setSortType(e.target.dataset.type));

  isUsersPage = () => (this.props.creaturesToRender === "allCreatures");

  isOwnedByUser = (creatureId) => (
    !!(this.isUsersPage() && this.props.userCreatures.find(c => c.id === creatureId))
  );

  renderSortButtons = () => (
    ['name', 'c_type', 'location', 'shadow_size', 'time', 'price'].map(type => {
      let sortType = type;
      if (type === 'c_type') sortType = 'type';
      let content = sortType.toUpperCase();
      if (content === 'SHADOW_SIZE') content = 'SHADOW SIZE';
      return <th key={sortType}>
        <Button
          className="sort-btn"
          clickHandler={this.handleOnClick}
          dataType={sortType}
          content={content}
        />
      </th>
    })
  );

  renderTableHead = () => (
    <thead>
      <tr>
        {this.isUsersPage() && <th>Ownership</th>}
        {this.renderSortButtons()}
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