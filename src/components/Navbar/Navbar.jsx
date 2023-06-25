import React ,{useState} from 'react'
import './Navbar.css'
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/gericht.png'
const Menu=()=>(
  <>
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#menu">Menu</a></p>
          <p><a href="#awards">Awards</a></p>
          <p><a href="#contact">Contact</a></p>
          
  </>
)
const Navbar = () => {
  const [Toggle,setToggle]=useState(false)
  return (
    <div className='restau__navbar section__padding' >
      <div className='restau__navbar-links' >
      <div className='restau__navbar-links_logo' >
      <img src={logo} alt='logo' />

      </div>
      <div className='restau__navbar-links_container'>
      <Menu />
      </div>

      </div>
    <div className='restau__navbar-sign'>
      <p>Sign in</p>
      <button><p>Sign up</p></button>
    </div>
    <div className='restau__navbar-menu'>
      {Toggle?<RiCloseLine  color='white' size={27} onClick={()=>{setToggle(false)}} />
      : <RiMenu3Line  color='white' size={27} onClick={()=>{setToggle(true)}}  />          }
      {Toggle && (
        <div className='restau__navbar-menu_container scale-up-center'>
          <div className='restau__navbar-menu_container-links'>
            <Menu /> 
            <div className='restau__navbar-menu_container-links-sign'>
      <p>Sign in</p>
      <button><p>Sign up</p></button>
    </div>
              </div>
           </div>
      )}
    </div>
    </div>
  )
}

export default Navbar