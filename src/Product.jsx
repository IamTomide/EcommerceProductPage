import IconCart from './assets/icon-cart.svg?react'
import IconPlus from './assets/icon-plus.svg?react'
import IconMinus from './assets/icon-minus.svg?react'
import { useState,useEffect } from 'react'
import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import image1 from './assets/image-product-1.jpg'
import image2 from './assets/image-product-2.jpg'
import image3 from './assets/image-product-3.jpg'
import image4 from './assets/image-product-4.jpg'
import image1thumb from './assets/image-product-1-thumbnail.jpg'
import image2thumb from './assets/image-product-2-thumbnail.jpg'
import image3thumb from './assets/image-product-3-thumbnail.jpg'
import image4thumb from './assets/image-product-4-thumbnail.jpg'
import './App.css'

const Product = () => {
    const [qty, setQty] = useState(1);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

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
            image1thumb,
            image2thumb,
            image3thumb,
            image4thumb
        ];
    const images = [
            image1,
            image2,
            image3,
            image4
        ];

        useEffect(() => {
            if (window.innerWidth <= 560) {
                setIsMobile(true);
            }
            }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 560px)");
        setIsMobile(mediaQuery.matches);

        const handler = (e) => setIsMobile(e.matches);
        mediaQuery.addEventListener("change", handler);

        return () => mediaQuery.removeEventListener("change", handler);
        }, []);
    


    return (  
        <>
        <main>
            <section className="prodgallery">
                <Swiper
                    modules={[Navigation, Thumbs]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={isMobile}
                    thumbs={isMobile ? undefined : { swiper: thumbsSwiper }}
                    >
                        {images.map((image, index)=> {
                            return <SwiperSlide key={index}><img src={image} alt="product image" className="prod" /></SwiperSlide>
                        })}
                </Swiper>

                {!isMobile && <Swiper
                    modules={[Thumbs]}
                    watchSlidesProgress
                    onSwiper={setThumbsSwiper}
                    className="thumbnail"
                    slidesPerView={4}
                    spaceBetween={10} 
                    >
                        {thumbnail.map((image, index)=> {
                            return <SwiperSlide className='thumbnailwrapper' key={index}><img src={image} alt="product image" className="imgthumbnail" /></SwiperSlide> 
                        }
                    )}
                    </Swiper>}
            </section>


            <section className="prodinfo">
                <h1>{products[0].company}</h1> 
                <h2>{products[0].name}</h2>
                <p>{products[0].desc}</p>
                <h3>{products[0].Price} <span className="bonus">{products[0].bonus}%</span></h3>
                <p className='price'>$250.00</p>

                <div className="cartactions">
                    <div className='qtydetail'>
                        <IconMinus className="actionicon" onClick={() => {changeQty(-1)}}/>
                        <span className="quantity">{qty}</span>
                        <IconPlus className="actionicon" onClick={() => {changeQty(1)}}/>
                    </div>
                    <button className='addtocart'><IconCart className="carticon"/><span>Add to cart</span></button>
                </div>                    
               
            </section>
        </main>      
        </>
    );
}
 
export default Product;