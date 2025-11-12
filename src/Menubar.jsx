import './appheader.css'
import IconClose from './assets/icon-close.svg?react'

const Menubar = ({open, setOpen}) => {

    return ( 
        <>
            <ul className={`mobilemenu ${open ? "active" : ""}`}>
                {open && <IconClose className='closeicon' onClick={() => setOpen(false)} />}
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </>
     );
}
 
export default Menubar;