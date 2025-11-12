import image1thumb from './assets/image-product-1-thumbnail.jpg'



const Cartcontent = ({ cart }) => {
    

    let cartcontent = <p className="emptycart">Your cart is empty.</p>;
    
    if (cart.length == 0) {
        cartcontent = <>
                        <div className="cart-item">
                            <img src={image1thumb} alt="product thumbnail" className="cart-prodthumbnail"/>
                            <div className="cart-itemdetails">
                                <p>Fall Limited Edition Sneakers</p>
                                <p>$125.00 x 3 <span className="totalprice">$375.00</span></p>
                            </div>
                            <IconDelete className="deleteicon"/>
                            </div>
                            <button className="checkoutbtn">Checkout</button>
                    </>}

    return ( 
        <div className="cart-dropdown">
          <h4>Cart</h4>
          <div className="cart-content">
            {cartcontent}
        </div>
        </div>
     );
}
 
export default Cartcontent;