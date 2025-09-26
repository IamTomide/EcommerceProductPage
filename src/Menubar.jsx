import './App.css'
import iconclose from './assets/icon-close.svg'

const Menubar = ({open, setOpen}) => {

    return ( 
        <>
            <ul className={`mobilemenu ${open ? "active" : ""}`}>
                {open && <img src={iconclose} className='closeicon' onClick={() => setOpen(false)}/>}
                <li><a href="http://"></a>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </>
     );
}
 
export default Menubar;