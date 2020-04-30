import React from 'react';
import ToggleCreatureOwnership from './ToggleCreatureOwnership';
import { capitalize } from '../helpers/helpers';

const Creature = props => {
  const { creature, isUsersPage, isOwned, hemisphereInfo } = props;
  const { name, c_type, location, shadow_size, price } = creature;
  const monthKeys = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

  const iconType = () => {
    let icon = 'fas ';
    switch (c_type) {
      case 'fish':
        icon += 'fa-fish'
        break;
      case 'bug':
        icon += 'fa-bug'
        break;
      default:
        icon = 'fa fa-check'
    }
    return icon;
  };

  const renderMonthAvailability = () => {
    return monthKeys.map(month => {
      if (hemisphereInfo[month]) {
        return (
          <td key={`${name}_${month}`} style={{ color: "#2C1E0B" }}>
            <i className={iconType()} />
          </td>
        )
      } else {
        return <td key={`${name}_${month}`}>
          <i className="fas fa-slash" style={{ color: "#51871A" }} />
        </td>
      }

    });
  }

  return (
    <tr className="Creature">
      {isUsersPage() && <td className="ownership-th text-align-center"><ToggleCreatureOwnership creature={creature} isOwned={isOwned} /></td>}
      <td>{capitalize(name)}</td>
      <td>{c_type}</td>
      <td>{location}</td>
      <td className="text-align-center">{shadow_size ? shadow_size : "NA"}</td>

      <td>
        {creature.availables[0].time}
        {
          creature.availables.length > 1 &&
          ' & ' + creature.availables[1].time
        }
      </td>
      <td>{price}</td>
      {isUsersPage() && renderMonthAvailability()}
    </tr>
  );
}

export default Creature;