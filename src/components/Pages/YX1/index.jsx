import React from 'react'
import Layout from '../../Layout'
import Bottom from '../../Bottom'
import Category from '../../Category'
import ProductCart from '../../ProductCart'
import Features from '../../Features'
import DisplayImage from '../../DisplayImage'
import AlsoLike from '../../AlsoLike'
const YX1 = () => {
    return (
        <>
        <Layout>
    
    <ProductCart 
                imageD="/DESIGNO/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg" 
                imageT="/DESIGNO/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg"
                imageM="/DESIGNO/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"
                title='YX1 WIRELESS
                EARPHONES'
                description='Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'
                news={true}
                reverse={false}
                details = {true}
                price="599"
                quantity="1"
                />
                <Features
                text1="Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound."
                text2="
                The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black."
                text3="Speaker Unit"
                text4="Speaker Cloth Panel"
                text5="User Manual"
                text6="3.5mm 7.5m Audio Cable"
                text7="7.5m Optical Cable"
                />
                <DisplayImage 
                image1D="/DESIGNO/assets/product-yx1-earphones/desktop/image-gallery-1.jpg"
                image1T="/DESIGNO/assets/product-yx1-earphones/tablet/image-gallery-1.jpg"
                image1M="/DESIGNO/assets/product-yx1-earphones/mobile/image-gallery-1.jpg"
                image2D="/DESIGNO/assets/product-yx1-earphones/desktop/image-gallery-2.jpg"
                image2T="/DESIGNO/assets/product-yx1-earphones/tablet/image-gallery-2.jpg"
                image2M="/DESIGNO/assets/product-yx1-earphones/mobile/image-gallery-2.jpg"
                image3D="/DESIGNO/assets/product-yx1-earphones/desktop/image-gallery-3.jpg"
                image3T="/DESIGNO/assets/product-yx1-earphones/tablet/image-gallery-3.jpg"
                image3M="/DESIGNO/assets/product-yx1-earphones/mobile/image-gallery-3.jpg"
                />
                <AlsoLike
                imageD3="/DESIGNO/assets/product-zx9-speaker/desktop/image-product.jpg"
                imageT3="/DESIGNO/assets/product-zx9-speaker/tablet/image-product.jpg"
                imageM3="/DESIGNO/assets/product-zx9-speaker/mobile/image-product.jpg"
                title3="ZX9 SPEAKER"
                link3="/ZX9Speaker"
                details3={true}
                imageD1="/DESIGNO/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
                imageT1="/DESIGNO/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg"
                imageM1="/DESIGNO/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg"
                title1="XX99 MARK I"
                link1="/XX99MarkIHeadphones"
                details1={true}
                imageD2="/DESIGNO/assets/product-xx59-headphones/desktop/image-product.jpg"
                imageT2="/DESIGNO/assets/product-xx59-headphones/tablet/image-product.jpg"
                imageM2="/DESIGNO/assets/product-xx59-headphones/mobile/image-product.jpg"
                title2="XX59"
                link2="/XX59Headphones"
                details2={true}
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

export default YX1