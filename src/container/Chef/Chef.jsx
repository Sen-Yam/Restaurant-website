import React from 'react';
import {images} from '../../constants'
import './Chef.css';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className='app__chef section__padding'>
    <div className='app__wrapper_img '>
    <img src={images.chef} alt='chef' />
    </div>
    <div className='app__wrapper_info '>
    <div  className='app__wrapper_info-header '>
    <SubHeading title="Chef's Word" />
    <h1 className='headtext__cormorant'>
      What We Believe In
    </h1>
    </div>
    <div className='app__chef-content'>
    <div className='app__chef-content_quote'>
  <div>
  <img src={images.quote} alt='quote' />
  </div>
    <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu.
       Congue iaculis integer curabitur semper sit nunc.</p>
    </div>
    
    </div>
    <div className='app__chef-sign'>
    <div>Kevin Luo</div>
    <p className='p__opensans'>Chef & Founder</p>
    <img src={images.sign} alt='signature' />
    </div>
    </div>
  </div>
);

export default Chef;
