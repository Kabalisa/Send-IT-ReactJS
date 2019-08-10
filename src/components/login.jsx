import React, { Component } from 'react';
import NavBar from './navBar.jsx';
import Footer from './footer.jsx';

class Login extends Component {
  state = {};
  render() {
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
            />{' '}
            <br />
            Password
            <input
              type='password'
              className='text1'
              id='pas'
              name='pswd'
              placeholder='Password'
            />{' '}
            <br />
            <p id='invalid' className='popup' />
            <label>
              {' '}
              <input type='checkbox' name='remember' /> Remember me{' '}
            </label>{' '}
            <br />
            <br />
            <a href='#' className='bt' id='sig'>
              Sign In
            </a>{' '}
            <br />
            <br />
            <br />
            <a href=''>Forgot Password or Email?</a> <br />
            <br />
            <a href='signup.html' className='btn'>
              Sign Up
            </a>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
