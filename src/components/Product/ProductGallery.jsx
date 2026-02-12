import { useState, useEffect } from 'react'
import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Lightbox from '../Lightbox/Lightbox';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-flip';
import productData from '../../data/productsData'
import './App.css'



function ProductGallery() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const productImages = productData[0].images;
    const imagesThumbs = productData[0].images;
    const [lightboxStartIndex, setLightboxStartIndex] = useState(0);
    const [isLightbox, setIsLightbox] = useState(false);
    const [lighboxSwiper, setLightboxSwiper] = useState(null);
    const [isMobile, setIsMobile] = useState(() => {
            return window.matchMedia("(max-width: 560px)").matches;
        });
    
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 560px)");
        setIsMobile(mediaQuery.matches);

        const handler = (e) => setIsMobile(e.matches);
        mediaQuery.addEventListener("change", handler);

        return () => mediaQuery.removeEventListener("change", handler);
    }, []);


    useEffect(() => {
        if (!isLightbox) {
            setLightboxSwiper(null);
        }
    }, [isLightbox]);

    useEffect(() => {
        if (isMobile && isLightbox) {
            setIsLightbox(false);
            setLightboxSwiper(null);
        }
    }, [isMobile, isLightbox]);


    return (
        <>
            <section className="prodgallery">
                <Swiper
                    modules={[Navigation, Thumbs]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={isMobile && !isLightbox}
                    thumbs={isMobile ? undefined : { swiper: thumbsSwiper }}
                    >
                        {productImages.map((image, index)=> {
                            return <SwiperSlide key={index}><img src={image} alt="product image" className="prod" onClick={() => {
                                if (isMobile) {
                                    setIsLightbox(false);
                                } else {
                                    setLightboxStartIndex(index);
                                    setIsLightbox(true);
                                }
                            }}/></SwiperSlide>
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
                        {imagesThumbs.map((image, index)=> {
                            return <SwiperSlide className='thumbnailwrapper' key={index}><img src={image} alt="product image" className="imgthumbnail" /></SwiperSlide> 
                        }
                    )}
                </Swiper>}

            </section>
            {isLightbox && <Lightbox lighboxSwiper={lighboxSwiper} setLightboxSwiper={setLightboxSwiper} StartIndex={lightboxStartIndex} setIsLightbox={setIsLightbox} isLightbox={isLightbox}/>}
            
        </>
    )
}

export default ProductGallery