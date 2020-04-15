import React, { Component } from 'react';
import Header from './Header/Header';
import Signup from './sessions/Signup';
import Login from './sessions/Login';
import { Switch, Route } from 'react-router-dom';
import LoadSpinner from './LoadSpinner/LoadSpinner';

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
        <Header />
        {/* <Signup /> */}
        <Login />
        {this.props.loadingCreatures && <LoadSpinner />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    creatures: state.creatures.data,
    loadingCreatures: state.creatures.loading
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
