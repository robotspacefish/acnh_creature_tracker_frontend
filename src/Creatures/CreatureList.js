import React from 'react';
import Creature from './Creature';
import './Creatures.css';
import CreatureListTableHeader from './CreatureListTableHeader';
import Table from 'react-bootstrap/Table';

const CreatureList = props => {
  const isOwnedByUser = (creatureId) => (
    !!(props.isUsersPage() && props.userCreatures.find(c => c.id === creatureId))
  );

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
    <Table responsive="xl" striped className="CreatureList">
      <CreatureListTableHeader
        isUsersPage={props.isUsersPage}
        updateSort={props.updateSort}
        sortInfo={props.sortInfo}
      />
      {renderCreatures()}
    </Table >
  );
};

export default CreatureList;