// import { useState } from 'react'
import './App.css'
import Menubar from './menubar'
import iconmenu from './assets/icon-menu.svg'
import iconcart from './assets/icon-cart.svg'
import avatar from './assets/image-avatar.png'
import { useState } from 'react'
// import { Link } from 'react-router-dom'


function AppHeader() {
  const [open, setOpen] = useState(false);
  console.log("header" + open);

  return (
    <>
      <header>

        <div className="navcontainer">
          <div className='navmenu'>
            <img src={iconmenu} alt="" className="menubar" onClick={() => setOpen(!open)} />
            <h2>sneakers</h2>
          </div>
          <nav>
            <Menubar open={open}/>
          </nav>          
        </div>
        
        <div className="icons">
          <img src={iconcart} alt="cart"  />
          <img src={avatar} alt="img" className='avatar'/>
        </div>
      </header>
    </>
  )
}

export default AppHeader
