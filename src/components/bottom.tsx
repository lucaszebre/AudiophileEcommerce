import React from 'react'
import './Bottom.css'
const Bottom = () => {
    return (
        <div className="BottomContainer">
            <div className="BottomWrapper">
                <div className="BottomText">
                    <h1>Bringing you the <span>best</span> audio gear</h1>
                    <p>
                        Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                    </p>
                </div>
                <img className='BottomImageD' src="/assets/shared/desktop/image-best-gear.jpg" alt="image-best-gear" />
                <img className='BottomImageT' src="/assets/shared/tablet/image-best-gear.jpg" alt="image-best-gear" />
                <img className='BottomImageM' src="/assets/shared/mobile/image-best-gear.jpg" alt="image-best-gear" />
            </div>
        </div>
    )
}

export default Bottom
