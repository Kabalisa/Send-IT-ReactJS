import React, { Component } from 'react';
import NavBar from './navBar.jsx';
import Footer from './footer.jsx';

import { toggle } from '../assets/helpers/toogle';

class Signup extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavBar />
        <div className='two'>
          <p className='two-1'> Sign Up For an Account</p>
          <input
            type='button'
            value='Sign Up'
            className='two-3'
            id='7'
            onClick={toggle}
          />
        </div>
        <div className='three'>
          <div className='three-a' id='8'>
            <p className='three-1'>
              Create an Account on Send-<b className='it'>IT</b>.<br />
              <br />
              <br /> Start enjoying the benefits of Send-
              <span className='it'>IT</span> today.
            </p>
          </div>
          <div className='three-3' id='10'>
            <p>
              <b>
                <h3 className='unos'>Account Information</h3>
              </b>
            </p>

            <div className='doss'>
              <div className='rimwe col-4'>
                <span className='dos'>*</span>Required Fields.
                <br />
                <br />
                <b>
                  <h3>Contact Information:</h3>
                </b>
                <br />
                First Name<span className='dos'>*</span>
                <br />
                <input type='text' className='tres' />
                <br />
                <br />
                Last Name<span className='dos'>*</span>
                <br />
                <input type='text' className='tres' />
                <br />
                <br />
                Street number<span className='dos'>*</span>
                <br />
                <input type='text' />
                <br />
                <br />
                Town/City
                <span className='dos' id='iop'>
                  *
                </span>
                <br />
                <input type='text' className='tres' />
                <br />
                <br />
              </div>

              <div className='kabiri col-3'>
                Mobile Phone<span className='dos'>*</span>
                <br />
                <input type='text' placeholder='+250' className='tres' />
                <br />
                <br />
              </div>

              <div className='gatatu col-4'>
                <b>
                  <h3>Login Information:</h3>
                </b>
                <br />
                Email Address<span className='dos'>*</span>
                <br />
                <input type='text' className='tres' />
                <br />
                <br />
                Comfirm Email Address<span className='dos'>*</span>
                <br />
                <input type='text' className='tres' />
                <br />
                <br />
                Create a Password<span className='dos'>*</span>
                <br />
                <input type='password' className='tres' />
                <br />
                password should be at least 8 characters and contain
                <br />
                at least one uppercase letter, at least one lowercase letter, at
                <br />
                least one special character and at least one numeric character.
                <br />
                <br />
                Re-enter Password<span className='dos'>*</span>
                <br />
                <input type='password' className='tres' />
                <br />
                <br />
              </div>

              <div className='kane col-5'>
                <b>
                  <h4>Terms & Conditions</h4>
                </b>
                I have read, understood and agree to be bound by the following.
                <br />
                I also understand how Send-ITintends to use my Information.
                <br />
                <input type='checkbox' />{' '}
                <a href='#' className='cuatro'>
                  Send-IT Terms of Use
                </a>
                <br />
                <input type='checkbox' />{' '}
                <a href='#' className='cuatro'>
                  Privacy Policy
                </a>
                <br />
                <br />
                <input type='checkbox' /> I would like to receive Send-IT
                information and promotional offers via email.
                <br />
                <br />
                <a
                  href='/profile'
                  className='three-4'
                  id='12'
                  onmouseover='regular3()'
                  onmouseout='back()'
                  onclick='signup()'
                >
                  Sign-Up
                </a>
                <br />
                <br />
                <p id='pop' />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Signup;
