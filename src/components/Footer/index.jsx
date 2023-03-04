import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        };
    return (
        <div className="FooterContainer">
            <footer>
                <div className="FooterBlock1">
                    <img className='FooterLogo' src="/assets/shared/desktop/logo.svg" alt="logo" />
                    <ul className="FooterList">
                        <li className="FooterListItem">
                            <Link className="FooterListItem" onClick={handleScrollToTop} to={"/"}>
                            HOME 
                            </Link>
                        </li>
                        <li className="FooterListItem">
                            <Link className="FooterListItem" onClick={handleScrollToTop} to={"/headphones"}>
                            HEADPHONES
                            </Link>
                        </li>
                        <li className="FooterListItem">
                        <Link className="FooterListItem" onClick={handleScrollToTop} to={"/speakers"}>
                            SPEAKERS
                            </Link>
                        </li>
                        <li className="FooterListItem">
                        <Link className="FooterListItem" onClick={handleScrollToTop} to={"/earsphones"}>
                            EARPHONES
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="FooterBlock2">
                    <div className="FooterEnwrap">
                        <p className="FooterDescription">
                        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                        </p>
                        
                        <p className="FooterCopyrightText">
                    Copyright 2021. All Rights Reserved
                    </p>
                    </div>
                    <div className="FooterSocials">
                            <img className='FooterSocialsIcon' src="/assets/shared/desktop/icon-facebook.svg" alt="icon-facebook" />
                            <img className='FooterSocialsIcon' src="/assets/shared/desktop/icon-twitter.svg" alt="icon-twitter" />
                            <img className='FooterSocialsIcon' src="/assets/shared/desktop/icon-instagram.svg" alt="icon-instagram" />
                        </div>
                    
                </div>
                
            </footer>
        </div>
    )}

export default Footer
