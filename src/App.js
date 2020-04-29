import React, { Component } from 'react';
import Header from './Header/Header';
import Main from './Main/Main.js';
import Footer from './Footer/Footer';
import Signup from './User/Signup';
import Login from './User/Login';
import Error from './Error/Error';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import { fetchAllCreatures, getCurrentlyAvailableCreatures } from './actions/creatureActions';
import { getCurrentUser } from './actions/userActions';
// import CreaturesContainer from './Creatures/CreaturesContainer';

class App extends Component {
  static defaultProps = {
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
  };

  componentDidMount() {
    this.props.getCurrentUser();
    this.props.fetchAllCreatures();
  }

  componentDidUpdate() {
    if (this.props.allCreatures.length > 0) {
      this.props.getCurrentlyAvailableCreatures(this.props.allCreatures, this.props.months, "north", this.props.now)
    }
  }

  render() {
    const now = this.props.now.format("dddd, MMMM Do YYYY, h:mm A");
    return (
      <div className="App">
        <Header currentUser={this.props.currentUser} />

        <main>
          <Switch>
            <Route exact path='/' render={routerProps => <Main {...routerProps} now={now} />} />
            <Route exact path={`/${this.props.currentUser.username}/creatures`} component={Main} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route component={Error} />
          </Switch>
        </main>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    allCreatures: state.creatures.all,
    now: state.clock.now
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllCreatures: () => dispatch(fetchAllCreatures()),
    getCurrentUser: () => dispatch(getCurrentUser()), // fetch
    getCurrentlyAvailableCreatures: (creatures, months, hemisphere, now) => dispatch(getCurrentlyAvailableCreatures(creatures, months, hemisphere, now))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
