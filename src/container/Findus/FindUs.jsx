import React from 'react';
import {images,data} from '../../constants'
import { SubHeading,Awards} from '../../components'
import './FindUs.css'
const FindUs = () => (
  <div className='app__wrapper section__padding findUs ' id='contact'>
    <div className='app__wrapper_info'>
    <SubHeading title='Contact' />
    <h1 className='headtext__cormorant mb-[3rem]' > Find Us</h1>
    <div className='app__wrapper-content'>
      <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
      <h4 className='headtext__menu'>Opening Hours</h4>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
    </div>
    <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>
    <div className='app__wrapper_img'>
    <img src={images.findus} alt='findUs' />
    </div>
  </div>
);

export default FindUs;
