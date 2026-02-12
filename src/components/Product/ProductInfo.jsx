import './App.css'
import ProductDetails from './ProductDetails'
import ProductGallery from './ProductGallery'

function ProductInfo() {
    
    return (
        <div className="mainstyle">
            <main>
                <ProductGallery />
                <ProductDetails />
            </main>
        </div>
    )
}

export default ProductInfo