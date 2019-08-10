import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className='one smallone'>
          <Link to='/' className='one-1' id='1'>
            Send-<span className='it'>IT</span>
          </Link>
          <a href='#p' className='one-2' id='4'>
            username
          </a>
          <a href='#p' className='one-2' id='5'>
            <span style={{ color: '#FF4560' }}>Log Out</span>
          </a>
        </div>
        <div className='conta'>
          <div class='info col-s-6 col-s-8 col-s-11 col-s-11-5'>
            <div className='messi'>
              <h3>
                <b>My Profile</b>
              </h3>
              <h4>Personal Profle:</h4>
              First Name
              <br /> <input type='text' />
              <br />
              <br />
              Last Name
              <br /> <input type='text' />
              <br />
              <br />
              Mobile Phone
              <br /> <input type='text' />
              <br />
              <br />
              Street number
              <br /> <input type='text' />
              <br />
              <br />
            </div>

            <div className='dembele'>
              Town/City
              <br /> <input type='text' />
              <br />
              <br />
              <h3>
                <b>Login Information</b>
              </h3>
              Email Address
              <br /> <input type='text' />
              <br />
              <br />
              Password
              <br /> <input type='Password' />
              <br />
              <br />
              <input type='button' value='Edit' className='do' />
              <input type='button' value='Save' className='do' />
              <input type='button' value='Delete Profile' className='do' />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className='block-1'>
          <a href='../index.html'>Home</a>
          <a href='contactus'>Contact Us</a>
          <a href='contactus#contact'>About Us</a>
          <a href='myprofile.html' id='x'>
            username
          </a>
          <a href='signin.html'>
            <span style={{ color: '#FF4560' }}>Log Out</span>
          </a>
        </div>
        <hr />
        <footer>Copyright © 2084 Send-IT</footer>
      </div>
    );
  }
}

export default Profile;
