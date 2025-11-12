import './appheader.css';
import './Product'
import Menubar from './Menubar'
import MenuIcon from './assets/icon-menu.svg?react';
import IconCart from './assets/icon-cart.svg?react'
import Logo from './assets/logo.svg?react'
import avatar from './assets/image-avatar.png'
import Cartcontent from './Cartcontent';


import { useState } from 'react'


function AppHeader({ cartItems, setCartItems }) {
  const [ cartOpen, setCartOpen ] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className='mainstyle'>

        <div className="navcontainer">
          <div>
            <MenuIcon className="menubar" onClick={() => setOpen(!open)} />
            <Logo />
          </div>
          <nav>
            {open && <div className="overlay"></div>}
            <Menubar open={open} setOpen={setOpen}/>
          </nav>          
        </div>
        
        <div className="icons">
          <IconCart className="cart" onClick={() => setCartOpen(!cartOpen)}/>
          <img src={avatar} alt="avatar" className='avatar'/>
        </div>

  {cartOpen && <Cartcontent cartItems={cartItems} setCartItems={setCartItems}/>}
      </header>
    </>
  )
}

export default AppHeader
