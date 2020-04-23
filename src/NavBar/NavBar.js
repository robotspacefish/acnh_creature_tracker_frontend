import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/userActions';
import { setPage } from '../actions/appActions';
import './NavBar.css';
import { withRouter } from 'react-router-dom'

const NavBar = props => {
  const handleOnClick = e => (props.setPage(e.target.dataset.page));

  const handleLogout = () => {
    props.logout();
    props.setPage('home');
    props.history.push('/') // reroute to home
  }

  return (
    <div className="Nav">
      <NavLink data-page="home" exact to='/' onClick={handleOnClick}>Currently Available Creatures</NavLink>
      {!props.username ?
        (<>
          <NavLink data-page="login" exact to='/login' onClick={handleOnClick}>Log In</NavLink>
          <NavLink data-page="signup" exact to='/signup' onClick={handleOnClick}>Sign Up</NavLink>
        </>) :
        (
          <>
            <NavLink data-page="user" exact to={`/${props.username}/creatures`} onClick={handleOnClick}>My Creatures</NavLink>
            <button className="logout-btn" onClick={handleLogout}>Log Out</button>
          </>
        )
      }
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    setPage: page => dispatch(setPage(page))
  };
};

// export default connect(null, mapDispatchToProps)(NavBar);
export default withRouter(connect(null, mapDispatchToProps)(NavBar));