import React from 'react';

const Creature = ({ creature }) => {
  const { name, c_type, location, shadow_size, price } = creature;
  return (
    <tr className="Creature">
      <th>{name}</th>
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