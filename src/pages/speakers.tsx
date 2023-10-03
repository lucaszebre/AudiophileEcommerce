import React from 'react'
import ProductCart from '../components/productCart'
import Layout from '../components/layout'
import TitleCategory from '../components/titleCategory'
import Category from '../components/category'
import Bottom from '../components/bottom'

const Speakers = () => {
    return (
        <>
        <Layout>
        <TitleCategory
                title='SPEAKERS'
                    />
                <ProductCart 
                imageD="/DESIGNO/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg" 
                imageT="/DESIGNO/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg"
                imageM="/DESIGNO/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"
                title='ZX9
                SPEAKER'
                description='Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.'
                news={true}
                reverse={false}
                link='/ZX9Speaker'
                linked={true}

                />
                <ProductCart 
                imageD="/DESIGNO/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg" 
                imageT="/DESIGNO/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg"
                imageM="/DESIGNO/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg"
                title='ZX7
                SPEAKER'
                description='Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.'
                news={false}
                reverse={true}
                link='/ZX7Speaker'
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

export default Speakers
