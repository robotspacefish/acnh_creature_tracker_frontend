import React from 'react';
import Button from '../elements/Button/Button';
import Creature from './Creature';
import './Creatures.css';
import CreatureListTableHeader from './CreatureListTableHeader';

const CreatureList = props => {
  const handleOnClick = e => (props.setSortType(e.target.dataset.type));

  const isUsersPage = () => (props.path.includes('/creatures'));

  const isOwnedByUser = (creatureId) => (
    !!(isUsersPage() && props.userCreatures.find(c => c.id === creatureId))
  );

  const renderMonths = () => (
    ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => (
      <th key={month}>
        {month}
      </th>
    ))
  )

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
  );

  const monthAvailability = (creature) => {
    const hemisphereIndex = props.currentUserHemisphere === 'north' ? 0 : 1;
    return creature.hemispheres[hemisphereIndex];
  }

  return (
    <table className="CreatureList">
      <CreatureListTableHeader
        isUsersPage={isUsersPage}
        updateSort={props.updateSort}
        sortInfo={props.sortInfo}
      />
      {renderCreatures()}
    </table>
  );
};

export default CreatureList;