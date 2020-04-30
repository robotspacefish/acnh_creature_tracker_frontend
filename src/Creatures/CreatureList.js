import React from 'react';
import Button from '../elements/Button/Button';
import Creature from './Creature';
import './Creatures.css';
import CreatureListTableHeader from './CreatureListTableHeader';

const CreatureList = props => {
  const handleOnClick = e => (props.setSortType(e.target.dataset.type));

  const isOwnedByUser = (creatureId) => (
    !!(props.isUsersPage() && props.userCreatures.find(c => c.id === creatureId))
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
      isUsersPage={props.isUsersPage}
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
    /** set the hemisphere view to the user's hemisphere or whatever was last displayed if there is none */
    const hemisphere = props.isUsersPage() && props.currentUserHemisphere ? props.currentUserHemisphere : props.displayHemisphere
    const hemisphereIndex = hemisphere === 'north' ? 0 : 1;

    return creature.hemispheres[hemisphereIndex];
  }

  return (
    <table className="CreatureList">
      <CreatureListTableHeader
        isUsersPage={props.isUsersPage}
        updateSort={props.updateSort}
        sortInfo={props.sortInfo}
      />
      {renderCreatures()}
    </table>
  );
};

export default CreatureList;