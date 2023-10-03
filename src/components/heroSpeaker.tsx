import React from 'react'
import './HeroSpeaker.css'
import Button from './button'
const HeroSpeaker = () => {
    return (
        <div className='HeroSpeakerContainer'>
            {/* <img className='HeroSpeakerPattern' src="/assets/home/desktop/pattern-circles.svg" alt="pattern-circle" /> */}
            
                <div className="HeroSpeakerWrapper">
                
                    <img className="HeroSpeakerImage" src="/assets/home/desktop/image-speaker-zx9.png" alt="image-speaker-sx9" />
                    <div className="HeroSpeakerText">
                        <h1 className='HeroSpeakerTitle'>ZX9 SPEAKER</h1>
                        <p className='HeroSpeakerDescription'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                        <div className="HeroSpeakerDiv">
                            <Button text='SEE PRODUCT' color='#fff' backgroundColor='#000' border='none'link="/ZX9Speaker" details={true}/>
                        </div>
               
                </div>
            </div>
        </div>
    )
}

export default HeroSpeaker
