import image1thumb from '../../assets/image-product-1-thumbnail.jpg'
import IconDelete from '../../assets/icon-delete.svg?react'
import { useCart } from '../../context/CartContext';



const Cart = () => {
    const { cartItems, setCartItems } = useCart();

    return ( 
        <div className="cart-dropdown">
          <h4>Cart</h4>
                <div className="cart-content">
                    {(!cartItems || cartItems.length === 0) ? (
                        <p className="emptycart">Your cart is empty.</p>
                    ) : (
                        <>
                            {cartItems.map((item) => (
                                <div className="cart-item" key={item.id ?? item.name}>
                                    <img src={image1thumb} alt="product thumbnail" className="cart-prodthumbnail"/>
                                    <div className="cart-itemdetails">
                                        <p>{item.name}</p>
                                        <p>
                                            ${item.price} x {item.qty}
                                            <span className="totalprice">
                                                ${(item.price * item.qty).toFixed(2)}
                                            </span>
                                        </p>
                                    </div>
                                    <IconDelete className="deleteicon" onClick={() => setCartItems(prev => prev.filter(i => i.id !== item.id))}/>
                                </div>
                            ))}

                            <button className="checkoutbtn">Checkout</button>
                        </>
                    )}

                </div>
        </div>
     );
}
 
export default Cart;