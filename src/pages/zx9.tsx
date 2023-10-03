import React from 'react'
import Layout from '../components/layout'
import Bottom from '../components/bottom'
import Category from '../components/category'
import ProductCart from '../components/productCart'
import Features from '../components/features'
import DisplayImage from '../components/displayImage'
import AlsoLike from '../components/alsoLike'
const ZX9 = () => {
    return (
        <>
        <Layout>
    
    <ProductCart 
                imageD="/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg" 
                imageT="/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg"
                imageM="/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"
                title='ZX9
                SPEAKER'
                description='Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.'
                news={true}
                reverse={false}
                details = {true}
                price="4,500"
                quantity="1"
                />
                <Features
                text1="These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos."
                text2="More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
                text3="Speaker Unit"
                text4="Speaker Cloth Panel"
                text6="10m Optical Cable"
                text5="User Manual"
                text7="3.5mm Audio Cable"
                />
                <DisplayImage 
                image1D="/assets/product-zx9-speaker/desktop/image-gallery-1.jpg"
                image1T="/assets/product-zx9-speaker/tablet/image-gallery-1.jpg"
                image1M="/assets/product-zx9-speaker/mobile/image-gallery-1.jpg"
                image2D="/assets/product-zx9-speaker/desktop/image-gallery-2.jpg"
                image2T="/assets/product-zx9-speaker/tablet/image-gallery-2.jpg"
                image2M="/assets/product-zx9-speaker/mobile/image-gallery-2.jpg"
                image3D="/assets/product-zx9-speaker/desktop/image-gallery-3.jpg"
                image3T="/assets/product-zx9-speaker/tablet/image-gallery-3.jpg"
                image3M="/assets/product-zx9-speaker/mobile/image-gallery-3.jpg"
                />
                <AlsoLike
                imageD1="/assets/product-zx7-speaker/desktop/image-product.jpg"
                imageT1="/assets/product-zx7-speaker/tablet/image-product.jpg"
                imageM1="/assets/product-zx7-speaker/mobile/image-product.jpg"
                title1="ZX7 SPEAKER"
                link1="/ZX7Speaker"
                details1={true}
                imageD2="/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
                imageT2="/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg"
                imageM2="/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg"
                title2="XX99 MARK I"
                details2={true}
                link2="/XX99MarkIHeadphones"
                imageD3="/assets/product-xx59-headphones/desktop/image-product.jpg"
                imageT3="/assets/product-xx59-headphones/tablet/image-product.jpg"
                imageM3="/assets/product-xx59-headphones/mobile/image-product.jpg"
                title3="XX59"
                link3="/XX59Headphones"
                details3={true}
                />
                <Category
                    marginTop='3em'
                    marginBottom='3em'
                    />    
                <Bottom />
        
        </Layout>
        </>
    )
}

export default ZX9
