import './App.css'

const Menubar = ({open}) => {
    console.log(open)

    return ( 
        <>
            <ul className={`mobilemenu ${open ? "active" : ""}`}>
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