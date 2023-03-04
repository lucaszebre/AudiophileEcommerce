import React from 'react'
import Button from '../Button'
import AddtoCart from '../AddtoCart'
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../Context'
import { useLocation } from 'react-router'
import './ProductCart.css'
const ProductCart = (props) => {
    const navigate = useNavigate();
    const {Cart,ManageCart , MoreLess ,SetMoreLess } = React.useContext(ShopContext)
    return (
        <div className="ProductCartContainer">
            {props.details && <div  className="goback">
                <p onClick={()=>{navigate(-1)}} className='gobacklink'>Go back</p> </div>}
            <div className="ProductCartWrapper"
            style={{
                flexDirection: props.reverse ? 'row-reverse' : 'row',
            }
            }
            >
                <img className='ProductCartImageD' src={props.imageD} alt={props.title} />
                <img className='ProductCartImageT' src={props.imageT}  alt={props.title} />
                <img className='ProductCartImageM' src={props.imageM}  alt={props.title} />
                <div className="ProductCartText">
                    {props.news && <h2>NEW PRODUCT</h2>}
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                    {!props.details &&
                    <Button 
            
                    text='SEE PRODUCT'
                    color='white'
                    backgroundColor='#D87D4A'
                    border='none'
                    link={props.link}
                    details={props.linked}
                    />}
                        {props.details && <AddtoCart
                price={props.price}
                quantity={props.quantity}
                />}
                </div>
                            
            </div>
        </div>
    )
}

export default ProductCart
