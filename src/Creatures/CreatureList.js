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

  renderMonths = () => (
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => (
      <th key="month">
        {month}
      </th>
    ))
  )

  renderTableHead = (isUsersPage) => (
    <thead>
      <tr>
        {isUsersPage && <th>Ownership</th>}
        {this.renderSortButtons()}
        {isUsersPage && this.renderMonths()}
      </tr>
    </thead>
  );

  renderCreature(creature) {
    const owned = this.isOwnedByUser(creature.id);
    const hemisphereInfo = this.monthAvailability(creature);
    return <Creature
      creature={creature}
      key={creature.id}
      isUsersPage={this.isUsersPage}
      isOwned={owned}
      hemisphereInfo={hemisphereInfo}
    />
  }

  renderCreatures = () => (
    <tbody>
      {this.props.creatures.map(creature => (
        this.renderCreature(creature)
      ))}
    </tbody>
  )

  monthAvailability = (creature) => {
    const hemisphereIndex = this.props.currentUserHemisphere === 'north' ? 0 : 1;
    return creature.hemispheres[hemisphereIndex];
  }

  render() {
    const isUsersPage = this.isUsersPage();
    return (
      <table className="CreatureList">
        {this.renderTableHead(isUsersPage)}

        {this.renderCreatures()}
      </table>
    );
  }
};

export default CreatureList;