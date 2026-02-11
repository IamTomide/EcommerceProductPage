import './appheader.css'
import IconClose from '../../assets/icon-close.svg?react'
import MenuIcon from '../../assets/icon-menu.svg?react';
import Logo from '../../assets/logo.svg?react'
import { useState } from 'react'

const Menubar = () => {

      const [menuOpen, setMenuOpen] = useState(false);

    return ( 
        <>
            <div className="navcontainer">
                <div>
                    <MenuIcon className="menubar" onClick={() => setMenuOpen(!menuOpen)} />
                    <Logo />
                </div>
                <nav>
                    {menuOpen && <div className="overlay"></div>}
                    <ul className={`mobilemenu ${menuOpen ? "active" : ""}`}>
                        {menuOpen && <IconClose className='closeicon' onClick={() => setMenuOpen(false)} />}
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>          
            </div>
            
        </>
     );
}
 
export default Menubar;