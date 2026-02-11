import { useState} from 'react'
import { Navigation, Thumbs, EffectFlip } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-flip';
import productData from '../../data/productsData'
import './App.css'


function ProductGallery({ isLightbox, setIsLightbox, setLightboxStartIndex, isMobile }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const productImages = productData[0].images
    const imagesThumbs = productData[0].images

    return (
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
    )
}

export default ProductGallery