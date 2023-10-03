import React from 'react'
import './Modal.css'
import Nav from './nav'
import { ShopContext } from '../stores/ContextCheck/Context'
import { useContext } from 'react'
import { Link ,useLocation } from 'react-router-dom'
const Modal = () => {
    const {Modal,HandleModal,setModal,Manage,dispatch} = useContext(ShopContext)
    
    
    const location = useLocation()
    
    function NumberItems(){
        let Number = 0
        const {TotalPrice,
        HeadphonesXX59,
        HeadphonesXX99,
        HeadphonesXX99M2,
        SpeakerZX7,
        SpeakerZX9,
        EarphonesYX1,
        ActualXX59,
        ActualXX99,
        ActualXX99M2,
        ActualZX7,
        ActualZX9,
        ActualYX1 }=Manage

    const  ArrayNumber = [HeadphonesXX59,HeadphonesXX99,HeadphonesXX99M2,SpeakerZX7,SpeakerZX9,EarphonesYX1]

        for (let i = 0; i < ArrayNumber.length; i++) {
        if(ArrayNumber[i] > 0){
                Number++
        }
        }
        return Number
    }

    var NumbItems = NumberItems()
    
    return (
        
        <div className="ModalContainer" 
        style={
            {
                display:Modal ? 'block' : 'none'
        }}
        >
            <div className="ModalWrapper">
                <div className="Modal">
                    {Manage.TotalPrice && <div className="ModalEnTitle">
                        <h1>Cart (<span>{ NumbItems}</span>)</h1>
                        <p onClick={()=> dispatch({path:'RESET'})} className='RemoveAll'>Remove All</p>
                    </div>}
                    { Manage.HeadphonesXX59> 0 &&
                    <div className="ModalContent">
                        <div className="ModalBlock">
                            <img className='ModalImage' src="/assets/product-xx59-headphones/desktop/image-product.jpg" alt="headphones-xx59" />
                            <div className="ModalEnwrap">
                                <h3>
                                XX59
                                </h3>
                                <p>$ 8999</p>
                            </div>
                        </div>
                            <div className="ModalAdd">
                                <img   onClick={()=> dispatch({path:"/XX59Headphones",type:'REMOVE_PANIER'})} className="IconModal" src="/assets/moins.svg" alt="moins" />
                                <span>{Manage.HeadphonesXX59}</span>
                                <img onClick={()=> dispatch({path:"/XX59Headphones",type:'ADD_1PANIER'})} className="IconModal" src="/assets/plus.png" alt="plus" />
                            </div>
                
                    </div>}
                    { Manage.HeadphonesXX99M2 > 0 &&
                    <div className="ModalContent">
                        <div className="ModalBlock">
                            <img className='ModalImage' src="/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg" alt="headphones-xx59" />
                            <div className="ModalEnwrap">
                                <h3>
                                    XX99 MK II
                                </h3>
                                <p>$ 2.999</p>
                            </div>
                        </div>
                            <div className="ModalAdd">
                                <img className="IconModal"  onClick={()=> dispatch({path:"/XX99MarkIIHeadphones",type:'REMOVE_PANIER'})} src="/assets/moins.svg" alt="moins" />
                                <span>{Manage.HeadphonesXX99M2}</span>
                                <img className="IconModal"  onClick={()=> dispatch({path:"/XX99MarkIIHeadphones",type:'ADD_1PANIER'})} src="/assets/plus.png" alt="plus" />
                            </div>
                
                    </div>}
                    { Manage.HeadphonesXX99 > 0 &&
                    <div className="ModalContent">
                        <div className="ModalBlock">
                            <img className='ModalImage' src="/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg" alt="headphones-xx59" />
                            <div className="ModalEnwrap">
                                <h3>
                                    XX99 MK I
                                </h3>
                                <p>$ 1.750</p>  
                            </div>
                        </div>
                            <div className="ModalAdd">
                                <img className="IconModal" onClick={()=> dispatch({path:"/XX99MarkIHeadphones",type:'REMOVE_PANIER'})} src="/assets/moins.svg" alt="moins" />
                                <span>{Manage.HeadphonesXX99}</span>
                                <img className="IconModal" onClick={()=> dispatch({path:"/XX99MarkIHeadphones",type:'ADD_1PANIER'})} src="/assets/plus.png" alt="plus" />
                            </div>
                
                    </div>}
                    { Manage.EarphonesYX1 > 0 &&
                    <div className="ModalContent">
                        <div className="ModalBlock">
                            <img className='ModalImage' src="/assets/product-yx1-earphones/desktop/image-product.jpg" alt="headphones-xx59" />
                            <div className="ModalEnwrap">
                                <h3>
                                    YX1
                                </h3>
                                <p>$ 599</p>
                            </div>
                        </div>
                            <div className="ModalAdd">
                                <img className="IconModal" onClick={()=> dispatch({path:"/YX1Earphones",type:'REMOVE_PANIER'})} src="/assets/moins.svg" alt="moins" />
                                <span>{Manage.EarphonesYX1}</span>
                                <img className="IconModal" onClick={()=> dispatch({path:"/YX1Earphones",type:'ADD_1PANIER'})} src="/assets/plus.png" alt="plus" />
                            </div>
                
                    </div>}
                    { Manage.SpeakerZX9 > 0 &&
                    <div className="ModalContent">
                        <div className="ModalBlock">
                            <img className='ModalImage' src="/assets/product-zx9-speaker/desktop/image-product.jpg" alt="headphones-xx59" />
                            <div className="ModalEnwrap">
                                <h3>
                                    ZX9
                                </h3>
                                <p>$ 4.500</p>
                            </div>
                        </div>
                            <div className="ModalAdd">
                                <img className="IconModal"  onClick={()=> dispatch({path:"/ZX9Speaker",type:'REMOVE_PANIER'})} src="/assets/moins.svg" alt="moins" />
                                <span>{Manage.SpeakerZX9}</span>
                                <img className="IconModal" onClick={()=> dispatch({path: "/ZX9Speaker",type:'ADD_1PANIER'})} src="/assets/plus.png" alt="plus" />
                            </div>
                
                    </div>}
                    { Manage.SpeakerZX7 > 0 &&
                    <div className="ModalContent">
                        <div className="ModalBlock">
                            <img className='ModalImage' src="/assets/product-zx7-speaker/desktop/image-product.jpg" alt="headphones-xx59" />
                            <div className="ModalEnwrap">
                                <h3>
                                    ZX7
                                </h3>
                                <p>$ 3.500</p>
                            </div>
                        </div>
                            <div className="ModalAdd">
                                <img className="IconModal" onClick={()=> dispatch({path:"/ZX7Speaker",type:'REMOVE_PANIER'})} src="/assets/moins.svg" alt="moins" />
                                <span>{Manage.SpeakerZX7}</span>
                                <img className="IconModal"  onClick={()=> dispatch({path: "/ZX7Speaker",type:'ADD_1PANIER'})} src="/assets/plus.png" alt="plus" />
                            </div>
                
                    </div>}
                    
                    { Manage.TotalPrice>0 &&
                    
                    <div className="ModalTotal">
                        <p className='TotalText'>Total</p>
                        <p className='ModalPriceTotal'>$ {Manage.TotalPrice}</p>
                    </div> }
                    { Manage.TotalPrice>0 &&
                    <Link className='Link' to={"/checkout"} onClick={() => { setModal(false) } }><button className='ModalCheckout'>CHECKOUT</button></Link>}



                {Manage.TotalPrice ===0 &&  <div className="EmptyModal">
                        <h1 className='EmptyTitle'>Your Cart is Empty </h1>
                        <img className='BasketEmpty' src="/assets/basket.png" alt="basket" />
                        </div>}
                        </div> 
            </div>
        </div>
    )
}

export default Modal
