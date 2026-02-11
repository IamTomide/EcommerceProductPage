import Lightbox from '../Lightbox/Lightbox';
import './App.css'
import ProductDetails from './ProductDetails'
import ProductGallery from './ProductGallery'
import { useState, useEffect } from 'react'

function ProductInfo() {
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
        <div className="mainstyle">
            <main>
                <ProductGallery isMobile
                ={isMobile} isLightbox={isLightbox} setIsLightbox={setIsLightbox} setLightboxStartIndex={setLightboxStartIndex}/>
                <ProductDetails />
                {isLightbox && <Lightbox lighboxSwiper={lighboxSwiper} setLightboxSwiper={setLightboxSwiper} StartIndex={lightboxStartIndex} setIsLightbox={setIsLightbox} isLightbox={isLightbox}/>}
            </main>
        </div>
    )
}

export default ProductInfo