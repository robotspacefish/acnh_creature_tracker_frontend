import React from 'react';
import AddCreatureButton from './AddCreatureButton';
import { connect } from 'react-redux';

const Creature = ({ creature, isUsersPage }) => {
  const { name, c_type, location, shadow_size, price } = creature;

  const capitalize = str => (
    str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
  );

  return (
    <tr className="Creature">
      {isUsersPage() && <AddCreatureButton />}
      <th>{capitalize(name)}</th>
      <th>{c_type}</th>
      <th>{location}</th>
      <th>{shadow_size ? shadow_size : "NA"}</th>

      <th>
        {creature.availables[0].time}
        {
          creature.availables.length > 1 && ' & ' + creature.availables[1].time
        }
      </th>
      <th>{price}</th>
    </tr>
  );
}

export default Creature;