import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/userActions';

import './forms.css';

class Signup extends Component {
  state = {
    username: '',
    password: '',
    hemisphere: ''
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.signup(this.state, this.props.history.push);
    this.setState({ username: '', password: '', hemispher: '' })

  }

  render() {
    return (
      <div className="Signup">
        <form onSubmit={this.handleOnSubmit}>
          <div className="input-container">
            <label>Username</label><br />
            <input type="text" name="username" onChange={this.handleOnChange} value={this.state.username} required />
          </div>
          <div className="input-container">
            <label>Password</label><br />
            <input type="password" name="password" onChange={this.handleOnChange} value={this.state.password} required />
          </div>
          <div className="input-container">
            <p>Select Your Hemisphere:</p>
            <div className="radio-container">
              <label>North</label>
              <input type="radio" name="hemisphere" value="north" checked={this.state.hemisphere === "north"} onChange={this.handleOnChange} />
            </div>
            <div className="radio-container">
              <label>South</label>
              <input type="radio" name="hemisphere" value="south" checked={this.state.hemisphere === "south"} onChange={this.handleOnChange} />
            </div>
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: (credentials, push) => dispatch(signup(credentials, push))
  }
};

export default connect(null, mapDispatchToProps)(Signup);