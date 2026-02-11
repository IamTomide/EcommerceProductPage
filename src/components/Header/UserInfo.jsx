import { useState } from 'react'
import IconCart from '../../assets/icon-cart.svg?react'
import Cart from './Cart'
import './appheader.css';
import avatar from '../../assets/image-avatar.png'
import { useCart } from '../../context/CartContext';



function UserInfo() {
    const [ cartOpen, setCartOpen ] = useState(false);
    const { cartItems } = useCart();


    return (
        <>
            <div className="icons">
                <div className="cartdiv">
                    <IconCart className="cart" onClick={() => setCartOpen(!cartOpen)}/>
                    {(!cartItems || cartItems.length !== 0) ? (<span>{cartItems.reduce((sum, it) => sum + (it.qty ?? it.quantity ?? 0), 0)}</span>) : (null)}
                </div>
                <img src={avatar} alt="avatar" className='avatar'/>
        </div>

  {cartOpen && <Cart />}
        </>
    )
}

export default UserInfo