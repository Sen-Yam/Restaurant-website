import React from 'react';
import {images,data} from '../../constants'
import { SubHeading,Awards} from '../../components';
import './Laurels.css';

const Laurels = () => (
  <div className='app__laurels section__padding ' id='awards'>
   <div className='app__laurels_content'>
   <div  className='app__wrapper_info-header '>
    <SubHeading title="Awards & Recognition" />
    <h1 className='headtext__cormorant'>
      Our Laurels
    </h1>
    </div>
    <div className='app__laurels_content-laurels'>
  {data.awards.map((award,index)=>(
    <Awards imgUrl={award.imgUrl} title={award.title} subtitle={award.subtitle} />
  ))}
    </div>
   </div>
   <div  className='app__laurels_img'>
      <img  src={images.laurels} alt='laurels'/>
   </div>
  </div>
);

export default Laurels;
