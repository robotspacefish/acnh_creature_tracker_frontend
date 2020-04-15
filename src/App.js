import React, { Component } from 'react';
import Header from './Header/Header';
import Signup from './sessions/Signup';
import Login from './sessions/Login';
import Home from './Home/Home';

import { Switch, Route } from 'react-router-dom';

import './App.css';

import { connect } from 'react-redux';
import { fetchCurrentCreatures, fetchAllCreatures } from './actions/creatureActions';
import { getCurrentUser } from './actions/userActions';

class App extends Component {
  componentDidMount() {
    // this.props.getCurrentUser();
    this.props.fetchCurrentCreatures();
    this.props.fetchAllCreatures(); // TODO only if logged in?
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.props.currentUser} />

        <Switch>
          <Route exact path='/' render={() => <Home {...this.props} />} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path={`/${this.props.currentUser.username}/creatures`} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    creatures: state.creatures.data,
    loadingCreatures: state.creatures.loading,
    currentUser: state.currentUser
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentCreatures: () => dispatch(fetchCurrentCreatures()),
    fetchAllCreatures: () => dispatch(fetchAllCreatures()),
    getCurrentUser: () => dispatch(getCurrentUser())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
