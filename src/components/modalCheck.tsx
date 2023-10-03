import React from 'react'
import './ModalCheck.css'
import { ShopContext } from '../stores/ContextCheck/Context'
import { useContext } from 'react'
import { useNavigate } from 'react-router'
const ModalCheck = () => {
    const {Manage,ModalChecked,HandleModalCheck,setModalCheck,dispatch} = useContext(ShopContext)
    const navigate = useNavigate();
    function HandleModalCheckClose(){
        dispatch({path:'RESET'})
        navigate('/')
        setModalCheck(false)
    }
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
    function OtherItems(){
        

        for (let i = 0; i < ArrayNumber.length; i++) {
        if(ArrayNumber[i] > 0){
                Number++
        }
        }
        return Number -1
    }

    var OtherItem = OtherItems()
    const data = [
        {
            id:1,
            image:'/assets/product-xx59-headphones/desktop/image-product.jpg',
            title:'XX59',
            price:'$ 2.999',
        },
        {
            id:2,
            image:'/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg',
            title:'XX99',
            price:'$ 2.999',
        },
        {
            id:3,
            image:'/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg',
            title:'XX99 Mark II',
            price:'$ 2.999',
        },
        {
            id:4,
            image:'/assets/product-zx7-speaker/desktop/image-product.jpg',
            title:'ZX7',
            price:'$ 2.999',
        },
        {
            id:5,
            image:'/assets/product-zx9-speaker/desktop/image-product.jpg',
            title:'ZX9',
            price:'$ 2.999',
        },
        {
            id:6,
            image:'/assets/product-yx1-earphones/desktop/image-product.jpg',
            title:'YX1',
            price:'$ 2.999',
        },
    ]

    function FirstFind(){
        for (let i = 0; i < ArrayNumber.length; i++) {
            if(ArrayNumber[i] > 0){
                return i
            }
        }
        setModalCheck(false)
        return 0
    }
    var p = FirstFind()
    return (
        <div className="ModalCheckContainer">
        <div className="ModalCheckWrapper">
            <div className="ModalCheck">
                <img src="/assets/checkout/icon-order-confirmation.svg" alt="icon-order-confirmation" />
                <h1 className='ModalCheckTitle'>THANK YOU FOR YOUR ORDER</h1>
                <p className='ModalCheckDescp'>You will receive an email confirmation shortly.</p>
                <div className="ModalCheckBlock">
                    <div className="ModalCheckBlockLeft">
                        <div className="LeftWrap">
                            <img className="LeftImage" src={data[p].image} alt="XX59" />
                            <div className="LeftWrapEn">
                                <h3>{data[p].title}</h3>
                                <p>{data[p].price}</p>
                            </div>
                            <div className="quantity">
                                {ArrayNumber[p]}x
                            </div>
                        </div>
                        <p className='otherItems'> and {OtherItem} other items</p>
                    </div>
                    <div className="ModalCheckBlockRight">
                        <h1 className="GrandTotal">
                            GRAND TOTAL
                        </h1>
                        <p className="GrandTotalPrice">
                          $ {Manage.TotalPrice + Manage.TotalPrice * 0.2 + 50}
                        </p>
                    </div>
                    </div>
                    <button onClick={()=>{
                        HandleModalCheckClose()

                    }}
                className='ModalCheckButton'
                >
                    BACK TO HOME
                </button>
                </div>
                
        </div>
    </div>
    )
}

export default ModalCheck
