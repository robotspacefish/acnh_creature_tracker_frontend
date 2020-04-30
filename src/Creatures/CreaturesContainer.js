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

  updateSort = (currentSort, type) => {
    let direction = 'asc';
    if (type === currentSort.type) {
      // if the sort just clicked was the last one clicked, reverse the sort direction
      direction = currentSort.direction === 'asc' ? 'dsc' : 'asc'
    }

    const icon = this.updateSortIcon(currentSort, type);
    return { type: "UPDATE_SORT_TYPE", payload: { type, direction, icon } }
  };

  updateSortIcon = (currentSort, btnType) => {
    const ascIcon = "fas fa-sort-amount-down-alt";
    const dscIcon = "fas fa-sort-amount-down";

    let icon = ascIcon;

    if (btnType === currentSort.type) {
      icon = currentSort.direction === 'asc' ? dscIcon : ascIcon;
    }

    return icon;
  };

  updateType = (type, value) => {
    /** only update if user is selecting a different value
     * (as in, not clicking the same filtering button)
     * */
    if (this.state[type] !== value) {
      console.log('updating', type)
      this.setState((state, props) => ({ [type]: value }))
    }

  };

  isUsersPage = () => (this.props.path.includes('/creatures'));

  renderCreatureList() {
    const { displayType, sort } = this.state;
    const creatures = this.isUsersPage() ? [...this.props.allCreatures] : [...this.props.currentCreatures]
    const filteredCreatures = filterByDisplayTypeAndSort(sort, displayType, creatures);

    return (
      <CreatureList
        path={this.props.path}
        creatures={filteredCreatures}
        sortInfo={sort}
        updateSort={this.updateSort}
        creaturesToRender={this.props.creaturesToRender}
        userCreatures={this.props.userCreatures}
        currentUserHemisphere={this.props.currentUserHemisphere}
        isUsersPage={this.isUsersPage}
      />
    )
  }

  render() {
    const { displayType, displayHemisphere } = this.state;
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
            this.renderCreatureList()
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