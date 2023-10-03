import React from 'react'
import Button from './button'
import './HeroHome.css'
const HeroHome = () => {
    return (
        <div className='HeroHomeContainer'>
            <img className='HeroImageDesktop' src="/assets/home/desktop/image-hero.jpg" alt="hero-home-pc" />
            <img className='HeroImageTablet' src="/assets/home/tablet/image-header.jpg" alt="hero-home-tablet" />
            <img className='HeroImageMobile' src="/assets/home/mobile/image-header.jpg" alt="hero-home-mobile" />
            <div className="HeroHomeWrapper">
                <h2 className='HeroHomeH2'>
                    NEW PRODUCT
                </h2>
                <h1 className='HeroHomeH1'>
                    XX99 MARK II HEADPHONES
                </h1>
                <p className='HeroHomeDescription'>
                Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.                </p>
                <Button
                    
                    text='See Product'
                    backgroundColor='#D87D4A'
                    color='white'
                    border='none'
                    link="/XX99MarkIIHeadphones"
                    details={true}

                />
            </div>
        </div>
    )
    }

export default HeroHome
