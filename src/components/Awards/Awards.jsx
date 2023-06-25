import React from 'react'
import './Awards.css'
const Awards = ({imgUrl,title,subtitle}) => {
  return (
    <div className='app__awards flex__center'>
    <div className='app__awards_img'>
        <img src={imgUrl} alt='award' />
    </div>
    <div  className='app__awards_content'>
    <h4 className='headtext__menu'>{title}</h4>

    <p className='p__awards'>{subtitle}</p>
    </div>

    </div>
  )
}

export default Awards