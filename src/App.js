import React, { Component } from 'react';
import Header from './Header/Header';
import Signup from './User/Signup';
import Login from './User/Login';
import Home from './Home/Home';
import UserCreatures from './User/UserCreatures';

import { Switch, Route } from 'react-router-dom';

import './App.css';

import { connect } from 'react-redux';
import { fetchCurrentCreatures, fetchAllCreatures } from './actions/creatureActions';
import { getCurrentUser } from './actions/userActions';

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
    this.props.fetchCurrentCreatures();
    if (this.props.currentUser) this.props.fetchAllCreatures();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.props.currentUser} />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path={`/${this.props.currentUser.username}/creatures`} component={UserCreatures} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
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
