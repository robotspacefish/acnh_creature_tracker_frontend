import React, { Component } from 'react';
import { connect } from 'react-redux'
import LoadSpinner from '../LoadSpinner/LoadSpinner';
import CreatureList from './CreatureList';
import CreatureListHeader from './CreatureListHeader';
import { sortByName } from '../actions/creatureActions';

import './Creatures.css';

class CreaturesContainer extends Component {
  state = {
    displayType: 'all', // all, bugs, or fish,
    displayHemisphere: 'north'
  }

  bugs = creatures => (creatures.filter(c => c.c_type === "bug"));

  fish = creatures => (creatures.filter(c => c.c_type === "fish"));

  // creaturesToRender is allCreatures or currentCreatures
  // depending on what page is passing down the prop
  creatures = () => (this.props[this.props.creaturesToRender]);

  filterByType(creatures) {
    const { displayType } = this.state;
    return displayType === 'all' ?
      creatures : this[displayType](creatures)
  }

  setDisplayType = displayType => (this.setState({ displayType }));
  render() {
    const { displayType, displayHemisphere } = this.state;
    const creatures = this.props[this.props.creaturesToRender];

    return (
      <div className="CreaturesContainer">
        <CreatureListHeader displayType={displayType} displayHemisphere={displayHemisphere} setDisplayType={this.setDisplayType} />

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