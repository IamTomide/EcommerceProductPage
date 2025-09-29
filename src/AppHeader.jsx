import './App.css'
import Menubar from './Menubar'
import MenuIcon from './assets/icon-menu.svg?react';
import IconCart from './assets/icon-cart.svg?react'
import Logo from './assets/logo.svg?react'
import avatar from './assets/image-avatar.png'

import { useState } from 'react'


function AppHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header>

        <div className="navcontainer">
          <div className='navmenu'>
            <MenuIcon className="menubar" onClick={() => setOpen(!open)} />
            <Logo />
          </div>
          <nav>
            {open && <div className="overlay"></div>}
            <Menubar open={open} setOpen={setOpen}/>
          </nav>          
        </div>
        
        <div className="icons">
          <IconCart className="cart"/>
          <img src={avatar} alt="avatar" className='avatar'/>
        </div>
      </header>
    </>
  )
}

export default AppHeader
