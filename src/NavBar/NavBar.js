import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/userActions';
import './NavBar.css';

const NavBar = props => {
  const handleLogout = () => {
    props.logout();
    props.history.push('/') /** reroute to home */
  }

  return (
    <div className="Nav">
      <NavLink data-page="home" exact to='/'>Currently Available Creatures</NavLink>
      {!props.username ?
        (<>
          <NavLink data-page="login" exact to='/login'>Log In</NavLink>
          <NavLink data-page="signup" exact to='/signup'>Sign Up</NavLink>
        </>) :
        (
          <>
            {/** I only want a user that's signed in to be able to access their own page,
           * which is why I went with ${props.username} vs :username
           */}
            <NavLink data-page="user" exact to={`/${props.username}/creatures`}>My Creatures</NavLink>
            <button className="logout-btn" onClick={handleLogout}>Log Out</button>
          </>
        )
      }
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(NavBar));