import React, { useState } from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg'

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT ?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case studies</a></p>
    <p><a href="#blogs">Lirary</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='modern__navbar'>
        <div className='modern__navbar-links'>
          <div className='modern__navbar-links_logo'>
            <img src={logo} alt='logo' />
          </div>

          <div className='modern__navbar-link_container'>
            <Menu/>
          </div>
        </div>
        <div className='modern__navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>

        <div className='modern__navbar-menu'>
          { toggleMenu
          ? <RiCloseLine color='#FFF' size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#FFF' size={27} onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className='modern__navbar-menu_container scale-up-center'>
              <div className='modern__navbar-menu_container-links'> 
                <Menu/>
                <div className='modern__navbar-menu_container-links-sign'>
                  <p>Sign in</p>
                  <button type='button'>Sign up</button>
                </div>
              </div>
            </div>
          )}
        </div>

    </div>
  )
}

export default Navbar