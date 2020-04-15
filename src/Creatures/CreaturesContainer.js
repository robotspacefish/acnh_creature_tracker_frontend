import React from 'react';
import './Creatures.css';

const CreaturesContainer = props => {
  return (
    <div className="CreaturesContainer">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Location</th>
            <th>Shadow Size</th>
            <th>Time</th>
            <th>Price</th>
          </tr>
        </thead>
        {props.creatures.map(c => (
          <tr class="creature">
            <th>{c.name}</th>
            <th>{c.c_type}</th>
            <th>{c.location}</th>
            <th>{c.shadow_size ? c.shadow_size : "NA"}</th>
            <th>{c.availables[0].time}</th>
            <th>{c.price}</th>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default CreaturesContainer;