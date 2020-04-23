import React from 'react';
import Button from '../elements/Button/Button';
import Creature from './Creature';
import './Creatures.css';

const CreatureList = props => {
  const handleOnClick = e => (props.setSortType(e.target.dataset.type));

  const isUsersPage = () => (props.creaturesToRender === "allCreatures");

  const isOwnedByUser = (creatureId) => (
    !!(isUsersPage() && props.userCreatures.find(c => c.id === creatureId))
  );

  const renderSortButtons = () => (
    ['name', 'c_type', 'location', 'shadow_size', 'time', 'price'].map(type => {
      let sortType = type;
      if (type === 'c_type') sortType = 'type';
      let content = sortType.toUpperCase();
      if (content === 'SHADOW_SIZE') content = 'SHADOW SIZE';
      return <th key={sortType}>
        <Button
          className="sort-btn"
          clickHandler={handleOnClick}
          dataType={sortType}
          content={content}
        />
      </th>
    })
  );

  const renderMonths = () => (
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => (
      <th key={month}>
        {month}
      </th>
    ))
  )

  const renderTableHead = (isUsersPage) => (
    <thead>
      <tr>
        {isUsersPage && <th>Ownership</th>}
        {renderSortButtons()}
        {isUsersPage && renderMonths()}
      </tr>
    </thead>
  );

  const renderCreature = (creature) => {
    const owned = isOwnedByUser(creature.id);
    const hemisphereInfo = monthAvailability(creature);
    return <Creature
      creature={creature}
      key={creature.id}
      isUsersPage={isUsersPage}
      isOwned={owned}
      hemisphereInfo={hemisphereInfo}
    />
  }

  const renderCreatures = () => (
    <tbody>
      {props.creatures.map(creature => (
        renderCreature(creature)
      ))}
    </tbody>
  )

  const monthAvailability = (creature) => {
    const hemisphereIndex = props.currentUserHemisphere === 'north' ? 0 : 1;
    return creature.hemispheres[hemisphereIndex];
  }

  return (
    <table className="CreatureList">
      {renderTableHead(isUsersPage())}

      {renderCreatures()}
    </table>
  );
};

export default CreatureList;