import React, { Component } from 'react';
import LoadSpinner from '../LoadSpinner/LoadSpinner';
import CreatureListHeader from './CreatureListHeader';
import CreatureList from './CreatureList';

import { filterByDisplayTypeAndSort } from './sortAndFilterCreatures';

import { getCurrentlyAvailableCreatures } from '../actions/creatureActions';

import { connect } from 'react-redux'
import './Creatures.css';

class CreaturesContainer extends Component {
  static defaultProps = {
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"],
    defaultHemisphere: "north"
  };

  state = {
    displayType: 'all', // all, bugs, or fish,
    sortType: 'default',
    sort: { type: 'default', direction: 'default', icon: '' },
    displayHemisphere: this.props.currentUserHemisphere || this.props.defaultHemisphere
  }


  componentDidUpdate(prevProps, prevState) {
    /** once allCreatures finishes fetching, get the current creatures */
    if (prevProps.allCreatures.length === 0 && this.props.allCreatures.length !== 0) {
      this.updateCurrentCreatures()
    }

    /** if user changes display hemisphere, get new creatures */
    if ((prevState.displayHemisphere) !== this.state.displayHemisphere) {
      this.updateCurrentCreatures();
    }
  }

  updateCurrentCreatures() {
    const { getCurrentlyAvailableCreatures, months, now } = this.props;
    const { displayHemisphere } = this.state;
    getCurrentlyAvailableCreatures(this.props.allCreatures, months, displayHemisphere, now);
  }

  bugs = creatures => (creatures.filter(c => c.c_type === "bug"));

  fish = creatures => (creatures.filter(c => c.c_type === "fish"));

  /**
   * creaturesToRender is allCreatures or currentCreatures
   * depending on what page path the user is on
   */
  creaturesToRender = () => {
    return (
      this.props.path === "/" ?
        this.props.currentCreatures :
        this.props.allCreatures
    );
  };

  // filterByType(creatures) {
  //   const { displayType } = this.state;
  //   return displayType === 'all' ?
  //     creatures : this[displayType](creatures)
  // }

  // todo: refactor (combine)
  // setDisplayType = displayType => (this.setState({ displayType }));
  setSortType = sortType => (this.setState({ sortType }));

  // setHemisphereType = displayHemisphere => (this.setState({ displayHemisphere }));
  updateType = (type, value) => {
    /** only update if user is selecting a different value (as in, not clicking the same filtering button) */
    if (this.state[type] !== value) {
      console.log('updating', type)
      this.setState((state, props) => ({ [type]: value }))
    }

  };

  render() {
    const { displayType, displayHemisphere, sortType } = this.state;
    const filteredCreatures = this.filterByType(this.creaturesToRender());
    // const sortAndFilter = this.sortByType(filteredCreatures);

    return (
      <div className="CreaturesContainer container">
        <CreatureListHeader
          displayType={displayType}
          displayHemisphere={displayHemisphere}
          updateType={this.updateType}
          currentUser={this.props.currentUser}
          currentUserHemisphere={this.props.currentUserHemisphere}
        />

        {
          this.props.loadingCreatures ?
            <LoadSpinner /> :

            <CreatureList
              path={this.props.path}
              creatures={creatures}
              sortInfo={sort}
              setSortType={this.setSortType}
              creaturesToRender={this.props.creaturesToRender}
              userCreatures={this.props.userCreatures}
              currentUserHemisphere={this.props.currentUserHemisphere}
            />
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    now: state.clock.now,
    allCreatures: state.creatures.all,
    currentCreatures: state.creatures.current,
    loadingCreatures: state.creatures.loading,
    userHemisphere: state.currentUser.hemisphere,
    userCreatures: state.currentUser.creatures,
    currentUser: state.currentUser,
    currentUserHemisphere: state.currentUser.hemisphere
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCurrentlyAvailableCreatures: (creatures, months, hemisphere, now) => dispatch(getCurrentlyAvailableCreatures(creatures, months, hemisphere, now))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreaturesContainer);