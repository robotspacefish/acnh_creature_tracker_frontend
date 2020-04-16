import React, { Component } from 'react';
import { connect } from 'react-redux'
import CreatureList from './CreatureList';
import CreatureListHeader from './CreatureListHeader';
import { sortByName } from '../actions/creatureActions';

import './Creatures.css';

class CreaturesContainer extends Component {
  state = {
    displayType: 'all', // all, bugs, or fish
    displayHemisphere: 'north'
  }

  render() {
    const { displayType, displayHemisphere } = this.state;
    const creatures = this.props[this.props.creaturesToRender];

    console.log('rendering ', this.props.creaturesToRender, creatures)
    return (
      <div className="CreaturesContainer">
        <CreatureListHeader displayType={displayType} displayHemisphere={displayHemisphere} />

        <CreatureList creatures={creatures} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allCreatures: state.creatures.all,
    currentCreatures: state.creatures.current
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sortByName: () => dispatch(sortByName())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreaturesContainer);