import React from 'react'
import './CategoryCart.css'
import { Link } from 'react-router-dom'
const CategoryCart = (props) => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        };
    return (
    <div className='CategoryCartContainer'>
        <img className='CategoryCartImage' src={props.image} alt={props.title} />
        <div className="CategoryCartWrapper">
            <h3 className='CategoryCartTitle'>{props.title}</h3>
            <div className='CategoryCartRow'>
                <Link className='Link' onClick={handleScrollToTop} to={props.link}>
                    <p>SHOP</p>
                </Link>
                <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="arrow" />
            </div>
        </div>
    </div>
    )
}

export default CategoryCart
