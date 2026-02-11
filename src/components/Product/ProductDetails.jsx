import { useState } from 'react'
import productData from '../../data/productsData'
import { useCart } from '../../context/CartContext';
import IconCart from '../../assets/icon-cart.svg?react'
import IconPlus from '../../assets/icon-plus.svg?react'
import IconMinus from '../../assets/icon-minus.svg?react'

function ProductDetails() {
    const productSummary = productData[0];
    const [qty, setQty] = useState(1);
    const { cartItems, setCartItems } = useCart();

    const changeQty = (amount) => {
        setQty((prev) => Math.max(1, prev + amount));
    };

    const handleaddition = (name, qty) => {
        const itemexists = cartItems.some(item => item.name === name)
        if (!itemexists) {
            setCartItems(prev => [...prev, {name: name, qty: qty, price: productSummary.Price.toFixed(2)}])
        } else {
                setCartItems(prev =>
                prev.map(item =>
                item.name === name
                ? { ...item, qty: qty } 
                : item
            )
    );
        }
    }

    return (
        <section className="prodinfo">
            <h1>{productSummary.company}</h1> 
            <h2>{productSummary.name}</h2>
            <p>{productSummary.desc}</p>

            <div className="flexprice">
                <h3>${productSummary.Price.toFixed(2)} <span className="bonus">{productSummary.bonus}%</span></h3>
                <p className='price'>$250.00</p>
            </div>
        
            <div className="cartactions">
                <div className='qtydetail'>
                    <IconMinus className="actionicon" onClick={() => {changeQty(-1)}}/>
                    <span className="quantity">{qty}</span>
                    <IconPlus className="actionicon" onClick={() => {changeQty(1)}}/>
                </div>
                <button className='addtocart' onClick={() => handleaddition(productSummary.name, qty)}><IconCart className="carticon"/><span>Add to cart</span></button>
            </div>                    
        
        </section>
    )
}

export default ProductDetails