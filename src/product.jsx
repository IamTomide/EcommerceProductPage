import image1 from './assets/image-product-1.jpg'
import image1thumbnail from './assets/image-product-1-thumbnail.jpg'
import image2 from './assets/image-product-2-thumbnail.jpg'
import image3 from './assets/image-product-3-thumbnail.jpg'
import image4 from './assets/image-product-4-thumbnail.jpg'
import iconcart from './assets/icon-cart.svg'
import iconplus from './assets/icon-plus.svg'
import iconminus from './assets/icon-minus.svg'
import { useState } from 'react'

const Product = () => {
    const [qty, setQty] = useState(1);

    const changeQty = (amount) => {
        setQty((prev) => Math.max(0, prev + amount));
    };

    const products = [
        {
            company: "SNEAKER COMPANY",
            name: "Fall Limited Edition Sneakers",
            desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
            Price: "$250.00",
            bonus: 50
        }

    ];

    const thumbnail = [
            image1thumbnail,
            image2,
            image3,
            image4
        ];


    return (  
        <>
        <main>
            <section className="prodgallery">
                <img src={image1} alt="product image" className="prod" />
                <div className="thumbnail">
                    {thumbnail.map((image, index)=> {
                        return <div className="thumbnailwrapper"><img key={index} src={image} alt="image thumbnail" className='imgthumbnail'/></div>
                    })}
                </div>
            </section>
            <section className="prodinfo">
                <h1>{products[0].company}</h1> 
                <h2>{products[0].name}</h2>
                <p>{products[0].desc}</p>
                <h3>{products[0].Price} <span className="bonus">{products[0].bonus}%</span></h3>
                <p className='price'>$250.00</p>

                <div className="cartactions">
                    <div className='qtydetail'>
                        <span className="imgoverlay"><img src={iconminus} onClick={() => {changeQty(-1)}}></img></span>
                        <span className="quantity">{qty}</span>
                        <span className="imgoverlay"><img src={iconplus} onClick={() => {changeQty(1)}}></img></span>
                    </div>
                    <button className='addtocart'><img src={iconcart} alt="cart" className='carticon'/>Add to cart</button>
                </div>                    
               
            </section>
        </main>      
        </>
    );
}
 
export default Product;