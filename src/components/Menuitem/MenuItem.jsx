import React from 'react';

import './MenuItem.css';

const MenuItem = ({title,price,tags}) => (
  <div className='app__menuItem'>
  <div className='app__menuItem-title '>
<h4 className='headtext__menu'>{title}</h4>
<div />
<p className='p__opensans'>{price}</p>
  </div>
  <div className='app__menuItem-tags'>
<p >{tags}</p>
  </div>
  </div>
);

export default MenuItem;
