import React from 'react';
import NavBar from './navBar.jsx';
import Footer from './footer.jsx';

import homeImage from '../assets/images/contact-5.jpeg';
import imageOne from '../assets/images/1-1.jpg';
import imageTwo from '../assets/images/1-2.jpg';
import imageThree from '../assets/images/1-3.jpg';

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className='slide'>
        <img className='sliding' src={homeImage} />
        <div className='content-slide col-8'>
          <h1> Welcome To Send-IT</h1>
          <p>Wherever You are In Rwanda We Send Your Parcel </p>
        </div>
      </div>
      <div className='main'>
        <div className='para1 col-s-3' id='about'>
          <img src={imageOne} />
          <h3 className='zero'>Simple</h3>
          <p>sending parcels with Send-IT makes it simple and clear</p>
          <input
            type='button'
            className='butt1'
            name='butt1'
            value='Send Parcels With Send-IT'
          />
        </div>

        <div className='para2 col-s-3'>
          <img src={imageTwo} />
          <h3 className='one1'>Fast</h3>
          <p>our services are everywhere in Rwanda</p>
          <input
            type='button'
            className='butt2'
            name='butt2'
            value='See the difference'
          />
        </div>

        <div className='para3 col-s-3'>
          <img src={imageThree} />
          <h3 className='two'>Reliable</h3>
          <p>Join the journey to the future of courier services</p>
          <input
            type='button'
            className='butt3'
            name='butt3'
            value='Enjoy the service'
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
