import React, { Component } from 'react';
import Creature from './Creature';

class CreatureList extends Component {
  renderTableHead = () => (
    <thead>
      <tr>
        <th><button>Name</button></th>
        <th><button>Type</button></th>
        <th><button>Location</button></th>
        <th><button>Shadow Size</button></th>
        <th><button>Time</button></th>
        <th><button>Price</button></th>
      </tr>
    </thead>
  );

  render() {
    return (
      <table className="CreatureList">
        {this.renderTableHead()}
        {this.props.creatures.map(creature => (
          <Creature creature={creature} />
        ))}
      </table>
    );
  }
};

export default CreatureList;