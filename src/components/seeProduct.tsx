import React from 'react'
import './SeeProduct.css'
import Button from './button'
const SeeProduct = () => {
    return (
    <div className="SeeProductContainer">
            <div className="SeeProductWrapper">
                
                <div className="SeeProductContent">
                    <h1 className='SeeProductTitle'>
                    ZX7 SPEAKER
                    </h1>
                    <Button
                    
                        text='See Product'
                        backgroundColor='transparent'
                        color='black'
                        border='2px solid black'
                        link="/ZX7Speaker" details={true}
                    />
                </div>
            </div>
    </div>
    )
    }

export default SeeProduct
