import React from 'react';
import {BsFillPlayFill,BsPauseFill} from 'react-icons/bs'
import './Intro.css';
import {meal} from '../../constants/index'
const Intro = () => {
  const vidRef=React.useRef(); //next video state (paused or played)
  const [PlayVideo, setPlayVideo] = React.useState(false)
  const handlVideo=()=>{
      setPlayVideo((previous)=>{setPlayVideo(!previous)})
      if(PlayVideo) {
        vidRef.current.pause();
      }
      else{
        vidRef.current.play();
      }
  }
  return(
  <div className='app__video'>
    <video src={meal} type='video/mp4' loop controls={false} muted ref={vidRef}/>
    <div className='app__video-overlay flex__center'>
      <div 
      className='app__video-overlay_circle flex__center'
      onClick={handlVideo}
      >
        {PlayVideo? <BsPauseFill  color='#fff' fontSize={30} /> : <BsFillPlayFill color='#fff' fontSize={30}/>}

      </div>
    </div>
  </div>
)};

export default Intro;
