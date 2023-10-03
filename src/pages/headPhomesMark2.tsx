import React from 'react'
import Layout from '../components/layout'
import ProductCart from '../components/productCart'
import Features from '../components/features'
import DisplayImage from '../components/displayImage'
import AlsoLike from '../components/alsoLike'
import Category from '../components/category'
import Bottom from '../components/bottom'

const HeadphonesMark2 = () => {
    return (
        <Layout>
    
    <ProductCart 
                imageD="/DESIGNO/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg" 
                imageT="/DESIGNO/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg"
                imageM="/DESIGNO/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
                title='XX99 Mark II
                Headphones'
                description='The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'
                news={true}
                reverse={false}
                details = {true}
                price="2,999"
                quantity="1"
                />
                <Features
                text1="Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat."
                text2="The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
                text3="Headphones Unit"
                text4="Replacement Earcups"
                text5="User Manual"
                text6="USB-C Charging Cable"
                text7="3.5mm Audio Cable"
                />
                <DisplayImage 
                image1D="/DESIGNO/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
                image1T="/DESIGNO/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg"
                image1M="/DESIGNO/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg"
                image2D="/DESIGNO/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
                image2T="/DESIGNO/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg"
                image2M="/DESIGNO/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg"
                image3D="/DESIGNO/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
                image3T="/DESIGNO/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg"
                image3M="/DESIGNO/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg"
                />
                <AlsoLike
                imageD1="/DESIGNO/assets/product-xx59-headphones/desktop/image-product.jpg"
                imageT1="/DESIGNO/assets/product-xx59-headphones/tablet/image-product.jpg"
                imageM1="/DESIGNO/assets/product-xx59-headphones/mobile/image-product.jpg"
                title1="XX59"
                link1="/XX59Headphones"
                details1={true}
                imageD2="/DESIGNO/assets/product-zx9-speaker/desktop/image-product.jpg"
                imageT2="/DESIGNO/assets/product-zx9-speaker/tablet/image-product.jpg"
                imageM2="/DESIGNO/assets/product-zx9-speaker/mobile/image-product.jpg"
                link2="/ZX9Speaker"
                details2={true}
                title2="ZX9Speaker"
                imageD3="/DESIGNO/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
                imageT3="/DESIGNO/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg"
                imageM3="/DESIGNO/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg"
                title3="XX99 Mark I"
                link3="/XX99MarkIHeadphones"
                details3={true}
                />
                <Category
                    marginTop='3em'
                    marginBottom='3em'
                    />    
                <Bottom />
        
        </Layout>
    )
    }

export default HeadphonesMark2
