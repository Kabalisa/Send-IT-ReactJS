import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='one smallone'>
      <Link to='/' className='one-1' id='1'>
        Send-<span className='it'>IT</span>
      </Link>
      <Link to='/signup' className='one-2' id='4'>
        Sign up
      </Link>
      <Link to='/login' className='one-2' id='5'>
        Sign In
      </Link>
    </div>
  );
};

export default NavBar;
