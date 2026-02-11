import { Navigation, Thumbs, EffectFlip } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-flip';
import './Lightbox.css'
import productData from '../../data/productsData'
import IconClose from '../../assets/icon-close.svg?react'


export function Lightbox({ startIndex, setIsLightbox, isLightbox, lighboxSwiper, setLightboxSwiper }) {
    const productImages = productData[0].images;
    const imageThumbs = productData[0].thumbnail;

    return (
          <div className="lightbox mainstyle">
                <div className="lb-overlay" onClick={() => { setIsLightbox(false); setLightboxSwiper(null); }}></div>
                <div className="lb-content">
                    <IconClose className="lb-close" onClick={() => { setIsLightbox(false); setLightboxSwiper(null); }}/>

                    <button className="lb-prev" aria-label="none"></button>
                    <button className="lb-next" aria-label="none"></button>

                    <div className="lb-viewport">
                        <Swiper
                            modules={[Navigation, Thumbs, EffectFlip]}
                            spaceBetween={50}
                            slidesPerView={1}
                            effect={'flip'}
                            initialSlide={startIndex}
                            key={isLightbox ? `lb-open-${startIndex}` : 'lb-closed'}
                            navigation={{ prevEl: '.lb-prev', nextEl: '.lb-next' }}
                            thumbs={{ swiper: lighboxSwiper }}
                            >
                                {productImages.map((image, index)=> {
                                    return <SwiperSlide key={index}><img src={image} alt="product image" className="lb-prod" /></SwiperSlide>
                                })}
                        </Swiper>
                    </div>

                    <Swiper
                    modules={[Thumbs]}
                    watchSlidesProgress
                    onSwiper={setLightboxSwiper}
                    className="lb-thumbnail"
                    slidesPerView={4}
                    spaceBetween={30} 
                    >
                        {imageThumbs.map((image, index)=> {
                            return <SwiperSlide className='lb-thumbnailwrapper' key={index}><img src={image} alt="product image" className="lb-imgthumbnail" /></SwiperSlide> 
                        }
                    )}
                    </Swiper>
                </div>
            </div>  
    )
}

export default Lightbox;