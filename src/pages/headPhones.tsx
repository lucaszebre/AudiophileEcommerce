import React from 'react'
import Bottom from '../components/bottom'
import Layout from '../components/layout'
import TitleCategory from '../components/titleCategory'
import ProductCart from '../components/productCart'
import Category from '../components/category'



const Headphones = () => {
    return (
        <>
            <Layout>
           
                <TitleCategory
                title='HEADPHONES'
                    />
                <ProductCart 
                imageD="/DESIGNO/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg" 
                imageT="/DESIGNO/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg"
                imageM="/DESIGNO/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
                title='XX99 Mark II
                Headphones'
                description='The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'
                news={true}
                reverse={false}
                link='/XX99MarkIIHeadphones'
                linked={true}
                />
                <ProductCart 
                imageD="/DESIGNO/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg" 
                imageT="/DESIGNO/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg"
                imageM="/DESIGNO/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"
                title='XX99 Mark I
                Headphones'
                description='As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.'
                news={false}
                reverse={true}
                link='/XX99MarkIHeadphones'
                linked={true}
                />
                <ProductCart
                imageD="/DESIGNO/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"
                imageT="/DESIGNO/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg"
                imageM="/DESIGNO/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg"
                title='XX59 Headphones'
                description='Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.'
                news={false}
                reverse={false}
                link='/XX59Headphones'
                linked={true}
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

export default Headphones
