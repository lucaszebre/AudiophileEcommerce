import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../Context'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useFormik } from 'formik';


import './Checkout.css'
const Checkout = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 60});  // This is for the scroll to top
        };
    const navigate = useNavigate();
    const {Manage,ModalChecked, setModalCheck,dispatch,form, setForm} = useContext(ShopContext) // This is for the context

    const [isValid, setIsValid] = React.useState(false)   // This is for the validation
 
    const schema = yup.object().shape({  // This is for the validation
        FullName: yup.string().required('Name is required'),
        email: yup.string().email('Email is invalid').required('Email is required'),
        Number: yup.string().required('Number is required'),
        Adresse: yup.string().required('Adress is required'),
        Zip: yup.string().required('Zip is required'),
        City: yup.string().required('City is required'),
        Country: yup.string().required('Country is required'),
        Cash: yup.string().required('Cash is required'),
        EmoneyNumber: yup.string().required('EmoneyNumber is required'),
        EmoneyPin: yup.string().required('EmoneyPin is required'),
    })

    const onSubmit = async (values,actions) => {
        console.log("submit")
        handleScrollToTop();
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
       
        setModalCheck(true)
    }
    const {values,errors,touched,handleBlur,handleChange,handleSubmit,isSubmitting} = useFormik({
        initialValues: {
            FullName: '',
            email: '',
            Number: '',
            Adresse: '',
            Zip: '',
            City: '',
            Country: '',
            Cash: '',
            EmoneyNumber: '',
            EmoneyPin: '',
        },
        validationSchema: schema,
        onSubmit,
    })
    
    
    

    var VAT = 0.2*Manage.TotalPrice
console.log(errors)
    return (
        <div className="CheckoutContainer">
            <div className="gobackPlain" >
                <p className="goback2" onClick={()=>{navigate(-1)}}>Go back</p>
            </div>

            <form onSubmit={handleSubmit}  className="CheckoutWrapper">

                <div className="CheckoutLeft">
                        <h1>
                            CHECKOUT
                        </h1>
                        <h2>
                            billing details
                        </h2>
                        
                        <div className="CheckoutRow">
                            <label className='SmallLabel' htmlFor="">
                                <h3 className='InputTitle'>Name</h3>
                                <input className={`SmallInput   ${errors.FullName && touched.FullName? "input-error" : ""  } `} type="text" placeholder="Alexei ward"
                                value={values.FullName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="FullName"
                                name='FullName'

                                /> 
                    
                                <p className='error'>{errors.FullName}</p>
                            </label>
                            <label className='SmallLabel' htmlFor="">
                                <h3 className='InputTitle'>Email address</h3>
                                <input className={`SmallInput   ${errors.email && touched.email? "input-error" : ""  } `} type="email" placeholder="alexei@mail.com" 
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="email"
                                name='email'
                                />
                                
                                <p className='error'>{errors.email}</p>
                            </label>
                        </div>
                        <label className='Input2' htmlFor="">
                            <h3 className='InputTitle'>Phones number</h3>
                            <input className={`SmallInput   ${errors.Number && touched.Number? "input-error" : ""  } `} type="number" placeholder="+ 2340 456789"
                            value={values.Number}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="Number"
                            name='Number'
                            />
                            <p className='error'>{errors.Number}</p>
                        </label>

                        <h2>
                            SHIPPING INFO
                        </h2>
                        
                            <label className='LargeLabel' htmlFor="">
                                <h3 className='InputTitle'>Adress</h3>
                                <input className={`LargeInput   ${errors.Adresse && touched.Adresse? "input-error" : ""  } `} type="text" placeholder="67 Avenue de la porte"
                                value={values.Adresse}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="Adresse"
                                name='Adresse'
                                />
                                <p className='error'>{errors.Adresse}</p>
                            </label>
                        <div className="CheckoutRow">
                            <label className='Input2' htmlFor="">
                                <h3 className='InputTitle'>ZIP CODE</h3>
                                <input className={`SmallInput   ${errors.Zip && touched.Zip ? "input-error" : ""  } `} type="number" placeholder="10001" 
                                value={values.Zip}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="Zip"
                                name='Zip'
                                />
                                <p className='error'>
                                    {errors.Zip}
                                </p>
                            </label>
                            <label className='Input2' htmlFor="">
                                <h3 className='InputTitle' >City</h3>
                                <input className={`SmallInput   ${errors.City && touched.City? "input-error" : ""  } `} type="text" placeholder="New York" 
                                value={values.City}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="City"
                                name='City'
                                />
                                <p className='error'>
                                    {errors.City}
                                </p>
                            </label>
                        </div>
                        <label className="Input2" htmlFor="">
                            <h3 className='InputTitle' >Country</h3>
                            <input className={`SmallInput   ${errors.Country && touched.Country ? "input-error" : ""  } `} type="number" placeholder="United states" 
                            value={values.Country}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="Country"
                            name='Country'
                            />
                            <p className='error'>
                                {errors.Country}
                            </p>
                        </label>
    
                    <h2>
                        PAYMENT DETAILS
                        </h2>
                        
                            <div className="CheckoutBlock">
                                
                                    <h3 className='InputTitle'>Payment Method</h3>
                                    <div className="PaymentCols">
                                
                                
                                        <label className={`LabelInput ${errors.Cash && touched.Cash? "input-error" : ""  }`} htmlFor="">
                                            <h4>Cash on delivery</h4>
                                            <input  className='checkbox' type="checkbox" placeholder="Cash on delivery" 
                                            value={values.Cash}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            id="cash"
                                            name='Cash'

                                            />
                                            <p className='error'>
                                                {errors.Cash}
                                            </p>
                                            </label>
                                    </div>
                            </div>
                            
                        <div className="CheckoutRow">
                            <label className='SmallLabel' htmlFor="">
                                <h3 className='InputTitle' >e-money Number</h3>
                                <input className={`SmallInput   ${errors.EmoneyNumber && touched.EmoneyNumber? "input-error" : ""  } `} type="number" placeholder="2385219993" 
                                value={values.EmoneyNumber}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="EmoneyNumber"
                                name='EmoneyNumber'
                                />
                                <p className='error'>
                                    {errors.EmoneyNumber}
                                </p>
                            </label>
                            <label className='SmallLabel' htmlFor="">
                                <h3 className='InputTitle' >e-money PIN</h3>
                                <input className={`SmallInput   ${errors.EmoneyPin && touched.EmoneyPin? "input-error" : ""  } `} type="number" placeholder="6891"  
                                value={values.EmoneyPin}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id="EmoneyPin"
                                name='EmoneyPin'
                                />
                                <p
                                className='error'>
                                    {errors.EmoneyPin}
                                </p>
                            </label>
                        </div>
                    
                </div>
                <div className="CheckoutRight">
                    <h1 className='CheckoutTitle'>
                    SUMMARY
                    </h1>
                    {Manage.HeadphonesXX59 >0 &&
                    <div className="CheckoutRightWrapper">
                        <div className="Block1">
                            <img className='ImageCart' src="/assets/cart/image-xx59-headphones.jpg" alt="image-xx59-headphones" />
                            <div className="CheckoutRightInfo">
                                <h2>
                                    XX59
                                </h2>
                                <p>8.999$</p>
                            </div>
                        </div>
                        <div className='Qauntity'>
                            x{Manage.HeadphonesXX59}
                        </div>
                    </div>
}                      {Manage.EarphonesYX1 >0 &&
                    <div className="CheckoutRightWrapper">
                        <div className="Block1">
                            <img className='ImageCart' src="/assets/cart/image-yx1-earphones.jpg" alt="image-yx1-earphones" />
                            <div className="CheckoutRightInfo">
                                <h2>
                                    YX1
                                </h2>
                                <p>899$</p>
                            </div>
                        </div>
                        <div className='Qauntity'>
                            x{Manage.EarphonesYX1}
                        </div>
                    </div>
}                      {Manage.HeadphonesXX99 >0 &&
                    <div className="CheckoutRightWrapper">
                        <div className="Block1">
                            <img className='ImageCart' src="/assets/cart/image-xx99-mark-one-headphones.jpg" alt="image-xx99-mark-one-headphones" />
                            <div className="CheckoutRightInfo">
                                <h2>
                                    XX99 Mark I Headphones
                                </h2>
                                <p>1.750$</p>
                            </div>
                        </div>
                        <div className='Qauntity'>
                            x{Manage.HeadphonesXX99}
                        </div>
                    </div>
}                      {Manage.HeadphonesXX99M2 >0 &&
                    <div className="CheckoutRightWrapper">
                        <div className="Block1">
                            <img className='ImageCart' src="/assets/cart/image-xx99-mark-two-headphones.jpg" alt="image-xx99-mark-two-headphones" />
                            <div className="CheckoutRightInfo">
                                <h2>
                                    XX99 Mark II Headphones
                                </h2>
                                <p>2.999$</p>
                            </div>
                        </div>
                        <div className='Qauntity'>
                            x{Manage.HeadphonesXX99M2}
                        </div>
                    </div>
}                      {Manage.SpeakerZX7 >0 &&
                    <div className="CheckoutRightWrapper">
                        <div className="Block1">
                            <img className='ImageCart' src="/assets/cart/image-zx7-speaker.jpg" alt="image-speaker-zx7" />
                            <div className="CheckoutRightInfo">
                                <h2>
                                    ZX7 Speaker
                                </h2>
                                <p>2.999$</p>
                            </div>
                        </div>
                        <div className='Qauntity'>
                            x{Manage.SpeakerZX7}
                        </div>
                    </div>
}                      {Manage.SpeakerZX9 >0 &&
                    <div className="CheckoutRightWrapper">
                        <div className="Block1">
                            <img className='ImageCart' src="/assets/cart/image-zx9-speaker.jpg" alt="image-speaker-zx9" />
                            <div className="CheckoutRightInfo">
                                <h2>
                                    XX59 Headphones
                                </h2>
                                <p>2.999$</p>
                            </div>
                        </div>
                        <div className='Qauntity'>
                            x{Manage.SpeakerZX9}
                        </div>
                    </div>
}                      
                    <div className="Total">
                        <p className='righttext'>TOTAL</p>
                        <p className='lefttext'>{Manage.TotalPrice}</p>
                    </div>
                    <div className="Shipping">
                        <p className='righttext'>SHIPPING</p>
                        <p className='lefttext'>50$</p>
                    </div>
                    <div className="Vat">
                        <p className='righttext'>VAT(INCLUDED)</p>
                        <p className='lefttext'>{VAT}</p>
                    </div>
                    <div className="GrandTotal">
                        <p className='righttext'>GRAND TOTAL</p>
                        <p className='lefttext'>{Manage.TotalPrice + 50 +VAT}</p>
                    </div>
                    <button disabled={isSubmitting}     type='submit'  className={`CheckoutSubmit ${isSubmitting? "disabledButton" : ""}`}>
                        CONTINUE  & PAY
                    </button>
                    
                </div>
                
            </form>
        </div>
    )
}

export default Checkout
