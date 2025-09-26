import './App.css'
import Menubar from './menubar'
import iconmenu from './assets/icon-menu.svg'
import iconcart from './assets/icon-cart.svg'
import avatar from './assets/image-avatar.png'
import logo from './assets/logo.svg'
import { useState } from 'react'


function AppHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header>

        <div className="navcontainer">
          <div className='navmenu'>
            <img src={iconmenu} alt="" className="menubar" onClick={() => setOpen(!open)} />
            <img src={logo} alt="logo" />
          </div>
          <nav>
            {open && <div className="overlay"></div>}
            <Menubar open={open} setOpen={setOpen}/>
          </nav>          
        </div>
        
        <div className="icons">
          <img src={iconcart} alt="cart"  className='cart'/>
          <img src={avatar} alt="avatar" className='avatar'/>
        </div>
      </header>
    </>
  )
}

export default AppHeader
