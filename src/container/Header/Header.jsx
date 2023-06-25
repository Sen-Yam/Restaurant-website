import React from 'react';
import images from '../../constants/images'
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__haeder app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase The New Flavour' />
      <h1 className='app_header-h1'>The Key To Fine Dining</h1>
      <p className='p__opensans'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis
         quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
         <button className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
    <img src={images.welcome} alt='welcome' />
    </div>
  </div>
);

export default Header;
