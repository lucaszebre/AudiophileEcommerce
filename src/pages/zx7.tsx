import React from 'react'
import Layout from '../../Layout'
import Bottom from '../../Bottom'
import Category from '../../Category'
import ProductCart from '../../ProductCart'
import Features from '../../Features'
import DisplayImage from '../../DisplayImage'
import AlsoLike from '../../AlsoLike'
const ZX9 = () => {
    return (
        <>
        <Layout>
    
    <ProductCart 
                imageD="/DESIGNO/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg" 
                imageT="/DESIGNO/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg"
                imageM="/DESIGNO/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg"
                title='ZX7
                SPEAKER'
                description='Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.'
                news={false}
                reverse={false}
                details = {true}
                price="3,500"
                quantity="1"
                />
                <Features
                text1="Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage."
                text2="The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience."
                text3="Speaker Unit"
                text4="Speaker Cloth Panel"
                text5="User Manual"
                text6="3.5mm 7.5m Audio Cable"
                text7="7.5m Optical Cable"
                />
                <DisplayImage 
                image1D="/DESIGNO/assets/product-zx7-speaker/desktop/image-gallery-1.jpg"
                image1T="/DESIGNO/assets/product-zx7-speaker/tablet/image-gallery-1.jpg"
                image1M="/DESIGNO/assets/product-zx7-speaker/mobile/image-gallery-1.jpg"
                image2D="/DESIGNO/assets/product-zx7-speaker/desktop/image-gallery-2.jpg"
                image2T="/DESIGNO/assets/product-zx7-speaker/tablet/image-gallery-2.jpg"
                image2M="/DESIGNO/assets/product-zx7-speaker/mobile/image-gallery-2.jpg"
                image3D="/DESIGNO/assets/product-zx7-speaker/desktop/image-gallery-3.jpg"
                image3T="/DESIGNO/assets/product-zx7-speaker/tablet/image-gallery-3.jpg"
                image3M="/DESIGNO/assets/product-zx7-speaker/mobile/image-gallery-3.jpg"
                />
                <AlsoLike
                imageD1="/DESIGNO/assets/product-zx9-speaker/desktop/image-product.jpg"
                imageT1="/DESIGNO/assets/product-zx9-speaker/tablet/image-product.jpg"
                imageM1="/DESIGNO/assets/product-zx9-speaker/mobile/image-product.jpg"
                title1="ZX9 SPEAKER"
                link1="/ZX9Speaker"
                details1={true}
                imageD2="/DESIGNO/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
                imageT2="/DESIGNO/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg"
                imageM2="/DESIGNO/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg"
                title2="XX99 MARK I"
                link2="/XX99MarkIHeadphones"
                details2={true}
                imageD3="/DESIGNO/assets/product-xx59-headphones/desktop/image-product.jpg"
                imageT3="/DESIGNO/assets/product-xx59-headphones/tablet/image-product.jpg"
                imageM3="/DESIGNO/assets/product-xx59-headphones/mobile/image-product.jpg"
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
