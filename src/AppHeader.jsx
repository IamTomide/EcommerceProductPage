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
        
        <ul className="icons">
          <li><img src={iconcart} alt="cart"  /></li>
          <li><img src={avatar} alt="img" className='avatar'/></li>
        </ul>
        {/* <div className=''>
          <div className="main">
            <img src={iconmenu} alt="" className="menubar" onClick={() => setOpen(!open)} />
            <h2>sneakers</h2>
          </div>
          <img src={iconmenu} alt="" className="menubar" onClick={() => setOpen(!open)} />
          <h2>sneakers</h2>
          <nav>
            <Menubar open={open}/>
          </nav>
        </div> */}
          {/* <ul className="icons">
            <li><img src={iconcart} alt="cart"  /></li>
            <li><img src={avatar} alt="img" className='avatar'/></li>
          </ul> */}
      </header>
      {/* <div className="header">
        <nav className="navbar">
          <div className='menudiv'>
            <img src={iconmenu} alt="" className="menubar" onClick={() => setOpen(!open)} />
            <h2>sneakers</h2>
          </div>
          <Menubar open={open}/>
        </nav>
        <ul className="icons">
          <li><img src={iconcart} alt="cart"  /></li>
          <li><img src={avatar} alt="img" className='avatar'/></li>
        </ul>
      </div> */}
    </>
  )
}

export default AppHeader
