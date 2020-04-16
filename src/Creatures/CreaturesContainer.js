import React, { Component } from 'react';
import { connect } from 'react-redux'
import LoadSpinner from '../LoadSpinner/LoadSpinner';
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

    return (
      <div className="CreaturesContainer">
        <CreatureListHeader displayType={displayType} displayHemisphere={displayHemisphere} />

        {
          this.props.loadingCreatures ?
            <LoadSpinner /> :
            <CreatureList creatures={creatures} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allCreatures: state.creatures.all,
    currentCreatures: state.creatures.current,
    loadingCreatures: state.creatures.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sortByName: () => dispatch(sortByName())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreaturesContainer);