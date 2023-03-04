import React from 'react'
import Category from '../Category'
import { Link } from 'react-router-dom'
import './NavStyle.css'
import { ShopContext } from '../Context'
import { useContext } from 'react'
const Nav = (props) => {
    const [menu, setMenu] = React.useState(false)

    function handleMenu() {
        setMenu(!menu)
    }
    const {Modal , setModal,handle} = useContext(ShopContext)
    return (
        <>
    <div className="NavContainer"
    style={
        {
            background:props.color

    }}
    >
        
            <nav>
                <div className="BlockNav">
                    <img onClick={handleMenu} className='NavHamburger1' src="/DESIGNO/assets/shared/tablet/icon-hamburger.svg" alt="logo" />
                    <Link className='NavLink' to={"/"}><img className='NavLogo' src="/DESIGNO/assets/shared/desktop/logo.svg" alt="logo" /></Link>
                </div>
                <Link className='NavLink' to={"/"}><img className='NavLogoMobile' src="/DESIGNO/assets/shared/desktop/logo.svg" alt="logo" /></Link>
                <ul className='NavList'>
                    <li><Link className='NavLink' to={"/"}>Home</Link></li>
                    <li><Link className='NavLink' to={"/headphones"}>Headphones</Link></li>
                    <li><Link className='NavLink' to={"/speakers"}>Speakers</Link></li>
                    <li><Link className='NavLink' to={"/earsphones"}>Earphones</Link></li>
                </ul>
                <img  onClick={()=>(setModal(!Modal))} className='CartNav' src="/DESIGNO/assets/shared/desktop/icon-cart.svg" alt="cart" />
            </nav>
    </div>
    <div className="MenuBackGround"
    style={
        {
            display:menu ? 'block' : 'none'
    }}
    >
        <div className="MenuSection">
            <Category />
        </div>
    </div>
        </>

    )
}

export default Nav
