import React, { Component } from 'react';
import { connect } from 'react-redux'
import LoadSpinner from '../LoadSpinner/LoadSpinner';
import CreatureList from './CreatureList';
import CreatureListHeader from './CreatureListHeader';
import { sortAlpha, sortNumeric } from '../helpers/utils';

import './Creatures.css';

class CreaturesContainer extends Component {
  state = {
    displayType: 'all', // all, bugs, or fish,
    sortType: 'default',
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

  sortByType(creatures) {
    const { sortType } = this.state;
    switch (sortType) {
      case 'name':
      case "c_type":
      case "location":
        return sortAlpha(creatures, sortType);
      case "shadow_size":
      case "price":
        return sortNumeric(creatures, sortType);
      // case "start_time":

      default:
        return creatures;
    }
  }

  setSortType = sortType => (this.setState({ sortType }));

  render() {
    const { displayType, displayHemisphere, sortType } = this.state;
    const filteredCreatures = this.filterByType(this.creatures());
    const sortAndFilter = this.sortByType(filteredCreatures);

    return (
      <div className="CreaturesContainer">
        <CreatureListHeader displayType={displayType} displayHemisphere={displayHemisphere} setDisplayType={this.setDisplayType} />

        {
          this.props.loadingCreatures ?
            <LoadSpinner /> :

            <CreatureList
              creatures={sortAndFilter}
              sortType={sortType}
              setSortType={this.setSortType}
            />
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

export default connect(mapStateToProps)(CreaturesContainer);