import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/index';
import NavBar from './navBar.jsx';
import Footer from './footer.jsx';
import { setToken } from '../helpers/setToken';

class Login extends Component {
  state = {
    credentials: {
      Email: '',
      Password: ''
    }
  };

  onChangeHandler = event => {
    const data = { ...this.state.credentials };
    data[event.target.name] = event.target.value;
    this.setState({ credentials: data });
  };
  componentDidUpdate() {
    const { isAuthenticated, token } = this.props.state.auth;
    if (isAuthenticated) {
      setToken(token);
    }
    isAuthenticated && window.location.replace('/profile');
  }
  render() {
    const { message } = this.props.state.auth;
    return (
      <div>
        <NavBar />
        <div className='signin-form'>
          <form>
            <h1>Sign-In to Send-IT </h1>
            Email{' '}
            <input
              type='text'
              className='texto'
              id='emm'
              name='Email'
              placeholder='Email'
              onChange={this.onChangeHandler}
              value={this.state.credentials.Email}
            />{' '}
            <br />
            Password
            <input
              type='password'
              className='text1'
              id='pas'
              name='Password'
              placeholder='Password'
              onChange={this.onChangeHandler}
              value={this.state.credentials.Password}
            />{' '}
            <br />
            <p id='invalid' className='popup'>
              {message}
            </p>
            <label>
              {' '}
              <input type='checkbox' name='remember' /> Remember me{' '}
            </label>{' '}
            <br />
            <br />
            <a
              href='#'
              className='bt'
              id='sig'
              onClick={() => this.props.loginUser(this.state.credentials)}
            >
              Sign In
            </a>{' '}
            <br />
            <br />
            <br />
            <a href=''>Forgot Password or Email?</a> <br />
            <br />
            <a href='/signup' className='btn'>
              Sign Up
            </a>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { state };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
