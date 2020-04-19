import React, { Component } from 'react';
import Header from './Header/Header';
import Signup from './User/Signup';
import Login from './User/Login';
import Home from './Home/Home';
import UserCreatures from './User/UserCreatures';

import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import { fetchCurrentCreatures, fetchAllCreatures } from './actions/creatureActions';
import { getCurrentUser } from './actions/userActions';
import { setPage } from './actions/appActions';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser();
    this.props.fetchCurrentCreatures();
    if (this.props.currentUser) this.props.fetchAllCreatures();

    this.setPageByWindowLocation();
  }

  setPageByWindowLocation() {
    const split = window.location.href.split('/');
    let page = split[split.length - 1];
    let pageToSet;
    switch (page) {
      case 'creatures':
        pageToSet = 'user';
        break;
      case '':
        pageToSet = 'home';
        break;
      default:
        pageToSet = page;
    }
    this.props.setPage(pageToSet);
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
    getCurrentUser: () => dispatch(getCurrentUser()),
    setPage: page => dispatch(setPage(page))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
