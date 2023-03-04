import React from 'react'
import AlsoLikeCart from '../AlsoLikeCart'
import './AlsoLike.css'

const AlsoLike = (props) => {
    return (
        <div className="AlsoLikeContainer"> 
            <h2>YOU MAY ALSO LIKE</h2>
            <div className="AlsoLikeWrapper">
                <AlsoLikeCart
                // image="/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
                // title="XX99 Mark I"
                imageD={props.imageD1}
                imageT={props.imageT1}
                imageM={props.imageM1}
                title={props.title1}
                details={props.details1}
                link={props.link1}
                
                />
                <AlsoLikeCart
                // image="/assets/product-xx59-headphones/desktop/image-product.jpg"
                // title="XX59"
                imageD={props.imageD2}
                imageT={props.imageT2}
                imageM={props.imageM2}
                title={props.title2}
                details={props.details2}
                link={props.link2}

                />
                <AlsoLikeCart
                // image="/assets/product-zx9-speaker/desktop/image-product.jpg"
                // title="ZX9 Speaker"
                imageD={props.imageD3}
                imageT={props.imageT3}
                imageM={props.imageM3}
                title={props.title3}
                details={props.details3}
                link={props.link3}
                />
            </div>
        </div>
    )
}

export default AlsoLike
