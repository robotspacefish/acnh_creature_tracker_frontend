import React, { Component } from 'react';
import Header from './Header/Header';
import Signup from './sessions/Signup';
import LoadSpinner from './LoadSpinner/LoadSpinner';

import './App.css';

import { connect } from 'react-redux';
import { fetchCurrentCreatures } from './actions/creatureActions';

class App extends Component {
  componentDidMount() {
    this.props.fetchCurrentCreatures();
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* <Signup /> */}
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
    fetchCurrentCreatures: () => dispatch(fetchCurrentCreatures())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
