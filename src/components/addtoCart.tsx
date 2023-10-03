import React, { useReducer } from 'react'
import Button from './button'
import { ShopContext } from '../stores/ContextCheck/Context'
import { useLocation } from 'react-router'
import './AddtoCart.css'
const AddtoCart = (props) => {
    const location = useLocation()
    const {Manage,
        dispatch } = React.useContext(ShopContext)
console.log(Manage)
        function WhoChoose(path) {  // This function is used to know which product is selected
                switch (path) {
                    case '/XX99MarkIHeadphones':
                        return Manage.ActualXX99
                    case '/XX99MarkIIHeadphones':
                        return Manage.ActualXX99M2
                    case '/XX59Headphones':
                        return Manage.ActualXX59
                    case '/ZX7Speaker':
                        return Manage.ActualZX7
                    case '/ZX9Speaker':
                        return Manage.ActualZX9
                    case '/YX1Earphones':
                        return Manage.ActualYX1
                    default:
                        return 0
                }
            }
    
var quantity = WhoChoose(location.pathname) // This is the quantity of the product selected
     
    return (
        <div className="AddtoCartContainer">
            <div className='AddtoCartPrice'>
                $ {props.price}
            </div>
            <div className="AddtoCartBlock">
                <div  className="AddtoCartRow">
                <div className="wrap" onClick={()=> dispatch({path:location.pathname,type:'REMOVE'})}><img  className='moins'    src="/assets/moins.svg" alt="plus" /></div>
                        <div className="wrap">{quantity} </div>
                        
                        <div onClick={()=> dispatch({path:location.pathname,type:'ADD'})}   className="wrap1">
                            <img className="plus"    src="/assets/plus.png" alt="plus" />
                                            </div>
                        </div>
                
                    <Button 
                    onClick={()=> dispatch({path:location.pathname,type:'ADD_PANIER'})}
                    text='ADD TO CART'
                    color='white'
                    backgroundColor='#D87D4A'
                    border='none'
                    link={props.link}
                    details={props.details}
                    // 
                    />
            </div>
        </div>
    )
    }

export default AddtoCart
