import React from 'react';
import {images,data} from '../../constants'
import { SubHeading,MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits your palette' />
    <h1 className='headtext__cormorant '>
    Today's Special
    </h1>
    </div>
    <div className='app__specialMenu-menu flex__start'>
    <div className='app__specialMenu-menu_wine flex__center'>
    <div  className='app__specialMenu-menu_heading'>
     <p> Wine & Beer</p>
    </div >
    <div className='app__specialMenu-menu_items'>
    {data.wines.map((wine,index)=>(
      <MenuItem  title={wine.title} price={wine.price} tags={wine.tags} />
    ))}
    </div>
    </div>
    <div  className='app__specialMenu-menu_img '>
      <img src={images.menu} alt='menu' />
    </div>
    <div  className='app__specialMenu-menu_cocktails'>
    <p  className='app__specialMenu-menu_heading'>
      Cocktails
    </p >
    <div className='app__specialMenu-menu_items'>
    {data.cocktails.map((cocktail,index)=>(
      <MenuItem  title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
    ))}
    </div>
    </div>
    </div>
    <button className='custom__button'>View Menu</button>
  </div>
);

export default SpecialMenu;
