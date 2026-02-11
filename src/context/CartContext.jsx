import { useContext, useState, createContext, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({children}) {

    const getCart = () => {
        const savedCart = localStorage.getItem('cart');
        try {
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (err) {
            console.error('Invalid cart in localStorage, resetting.', err);
            localStorage.removeItem('cart');
            return [];
        }
    }

    const [cartItems, setCartItems] = useState(() => getCart());

    useEffect(() => {
        try {
            if (cartItems && cartItems.length) {
                localStorage.setItem('cart', JSON.stringify(cartItems))
            } else {
                localStorage.removeItem('cart');
            }
        } catch (err) {
            console.error('Failed saving cart', err)
        }
    }, [cartItems]);
    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const val = useContext(CartContext);
    if (val === undefined) throw new Error("Context is not defined");
    return val;
}


export default CartProvider;