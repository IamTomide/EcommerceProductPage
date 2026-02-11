import AppHeader from '../components/Header/AppHeader'
import ProductInfo from '../components/Product/ProductInfo';
import CartProvider from '../context/CartContext';

function ProductPage() {

    return (
        <>
        {/* <div> */}
            <CartProvider>
                <AppHeader />
                <ProductInfo />
            </CartProvider>

        {/* </div> */}
        </>
    )
}

export default ProductPage;