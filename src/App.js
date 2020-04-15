import React, { Component } from 'react';
import Header from './Header/Header';
import Signup from './sessions/Signup';
import Login from './sessions/Login';
import LoadSpinner from './LoadSpinner/LoadSpinner';

import './App.css';

import { connect } from 'react-redux';
import { fetchCurrentCreatures } from './actions/creatureActions';
import { getCurrentUser } from './actions/userActions';

class App extends Component {
  componentDidMount() {
    // this.props.fetchCurrentCreatures();
    // this.props.getCurrentUser();
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
    getCurrentUser: () => dispatch(getCurrentUser())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
