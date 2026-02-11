import image1 from '../assets/image-product-1.jpg'
import image2 from '../assets/image-product-2.jpg'
import image3 from '../assets/image-product-3.jpg'
import image4 from '../assets/image-product-4.jpg'
import image1thumb from '../assets/image-product-1-thumbnail.jpg'
import image2thumb from '../assets/image-product-2-thumbnail.jpg'
import image3thumb from '../assets/image-product-3-thumbnail.jpg'
import image4thumb from '../assets/image-product-4-thumbnail.jpg'



const productData = [
     {
        company: "SNEAKER COMPANY",
        name: "Fall Limited Edition Sneakers",
        desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        Price: 125.00,
        bonus: 50,
        thumbnail: [
            image1thumb,
            image2thumb,
            image3thumb,
            image4thumb
        ],
        images: [
            image1,
            image2,
            image3,
            image4
        ]
    }
]

export default productData