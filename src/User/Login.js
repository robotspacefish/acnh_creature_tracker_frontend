import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/userActions';
import './forms.css';

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.login(this.state, this.props.history.push);
    this.setState({ username: '', password: '' });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleOnSubmit}>
          <div className="input-container">
            <label>Username</label><br />
            <input type="text" name="username" onChange={this.handleOnChange} value={this.state.username} />
          </div>
          <div className="input-container">
            <label>Password</label><br />
            <input type="password" name="password" onChange={this.handleOnChange} value={this.state.password} />
          </div>

          <button>Log In</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (credentials, push) => dispatch(login(credentials, push))
  }
};

export default connect(null, mapDispatchToProps)(Login);