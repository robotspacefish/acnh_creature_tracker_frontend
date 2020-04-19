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
    displayHemisphere: this.props.currentUserHemisphere || 'north'
  }

  bugs = creatures => (creatures.filter(c => c.c_type === "bug"));

  fish = creatures => (creatures.filter(c => c.c_type === "fish"));

  // creaturesToRender is allCreatures or currentCreatures
  // depending on what page is passing down the prop
  creatures = () => (
    this.props.creaturesToRender === "currentCreatures" ?
      this.props.currentCreatures[this.state.displayHemisphere] :
      this.props.allCreatures // todo load both hemispheres into state
  );

  filterByType(creatures) {
    const { displayType } = this.state;
    return displayType === 'all' ?
      creatures : this[displayType](creatures)
  }

  // todo: refactor (combine)
  setDisplayType = displayType => (this.setState({ displayType }));
  setHemisphereType = displayHemisphere => (this.setState({ displayHemisphere }));
  setSortType = sortType => (this.setState({ sortType }));

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
      case "time":
        return this.sortByTime(creatures)
      default:
        return creatures;
    }
  }

  sortByTime = creatures => (
    [...creatures].sort((a, b) => {
      const creatureA = this.getCreaturesFirstTimeAvailable(a);
      const creatureB = this.getCreaturesFirstTimeAvailable(b);

      return creatureA.start_time - creatureB.start_time
    })
  );

  getCreaturesFirstTimeAvailable(creature) {
    return creature.availables.length === 1 ?
      { ...creature.availables[0] } : [...creature.availables].sort((availA, availB) => availA.start_time - availB.start_time)[0]
  }


  render() {
    const { displayType, displayHemisphere, sortType } = this.state;
    const filteredCreatures = this.filterByType(this.creatures());
    const sortAndFilter = this.sortByType(filteredCreatures);

    return (
      <div className="CreaturesContainer container">
        <CreatureListHeader
          displayType={displayType}
          displayHemisphere={displayHemisphere}
          setDisplayType={this.setDisplayType}
          setHemisphereType={this.setHemisphereType}
          currentPage={this.props.currentPage}
          currentUser={this.props.currentUser}
          currentUserHemisphere={this.props.currentUserHemisphere}
        />

        {
          this.props.loadingCreatures ?
            <LoadSpinner /> :

            <CreatureList
              creatures={sortAndFilter}
              sortType={sortType}
              setSortType={this.setSortType}
              creaturesToRender={this.props.creaturesToRender}
              userCreatures={this.props.userCreatures}
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
    loadingCreatures: state.creatures.loading,
    userHemisphere: state.currentUser.hemisphere,
    userCreatures: state.currentUser.creatures,
    currentPage: state.app.currentPage,
    currentUser: state.currentUser,
    currentUserHemisphere: state.currentUser.hemisphere
  }
}

export default connect(mapStateToProps)(CreaturesContainer);