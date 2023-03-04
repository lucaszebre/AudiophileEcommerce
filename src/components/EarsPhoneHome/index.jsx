import React from 'react'
import Button from '../Button'
import './EarsPhoneHome.css'
const EarsPhoneHome = () => {
    return (
        <div className="EarsPhoneContainer">
            <div className="EarsPhoneWrapper">
                <img className='EarsPhoneImageD' src="/assets/home/desktop/image-earphones-yx1.jpg" alt="earphones-yx1" />
                <img className='EarsPhoneImageT' src="/assets/home/tablet/image-earphones-yx1.jpg" alt="earphones-yx1" />
                <img className='EarsPhoneImageM' src="/assets/home/mobile/image-earphones-yx1.jpg" alt="earphones-yx1" />
                <div className="EarsPhoneText">
                    <h2>YX1 EARPHONES</h2>
                    <Button
                    
                        text='See Product'
                        backgroundColor='transparent'
                        color='black'
                        border='2px solid black'
                        link="/YX1Earphones" details={true}
                    />
                </div>
                        
            </div>
        </div>
    )
    }

export default EarsPhoneHome
