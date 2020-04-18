import React from 'react';
import ToggleCreatureOwnership from './ToggleCreatureOwnership';

const Creature = props => {
  const { creature, isUsersPage, isOwned } = props;
  const { name, c_type, location, shadow_size, price, id } = creature;

  const capitalize = str => (
    str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
  );

  return (
    <tr className="Creature">
      {isUsersPage() && <th className="ownership-th text-align-center"><ToggleCreatureOwnership creature={creature} isOwned={isOwned} /></th>}
      <th>{capitalize(name)}</th>
      <th>{c_type}</th>
      <th>{location}</th>
      <th>{shadow_size ? shadow_size : "NA"}</th>

      <th>
        {creature.availables[0].time}
        {
          creature.availables.length > 1 &&
          ' & ' + creature.availables[1].time
        }
      </th>
      <th>{price}</th>
    </tr>
  );
}

export default Creature;