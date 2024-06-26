import React from 'react';
import images from '../../constants/images'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center '>
    <img src={images.G} alt='G' />
    </div>
    <div className='app__aboutus-content flex__center section__padding'>
    <div className='app__aboutus-content_about'>
    <h1 className='headtext__cormorant'>About Us</h1>
    <img src={images.spoon} alt='spoon' className='spoon__img reverse'  />
    <p className='p__opensans'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis
         quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
         <button className='custom__button' >Explore Menu</button>
    </div>
    <div className='app__aboutus-content_knife'>
   
      < img src={images.knife} alt='knife' />

    </div>
    <div className='app__aboutus-content_history'>
    <h1 className='headtext__cormorant'>Our History</h1>
    <img src={images.spoon} alt='spoon' className='spoon__img' />
    <p className='p__opensans'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi 
    volutpat habitasse interdum mi aliquam In sed odio nec aliquet</p>
         <button className='custom__button'>Explore Menu</button>
    </div>

  
    </div>
  </div>
);

export default AboutUs;
