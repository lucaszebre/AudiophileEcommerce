import React, { createContext, useState ,useReducer, } from 'react'
export const ShopCheckContext = createContext()
const ContextCheckProvider = (props) => {
    const  InitForm ={
        FullName: '',
        email: '',
        Number: '',
        Adresse: '',
        Zip: '',
        City: '',
        Country: '',
        PaymentEMoney: '',
        PaymentCash: '',
        Emoney: '',
        EmoneyPin: '',
    }
    function estMailValide(email) {
        // Expression régulière pour valider une adresse e-mail.
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        // Vérifier si l'adresse e-mail est valide.
        return regex.test(email);
        }
    function TextNumber(number){
        const regex = /^[0-9]+$/
        return regex.test(number)
    }
    const [DataForm, setDataForm] = useReducer(ReducerForm, InitForm)

    function ReducerForm(state, action) {
        
        switch (action.type) {
            case 'FullName':
                return { ...state, FullName: action.value}
            
            case 'email':
                return { ...state, email: action.value }
            
            case 'Number':
                return { ...state, Number: action.value  }
            
    
            case 'Adresse':
                return { ...state, Adresse: action.value }
            
            case 'Zip':
                return { ...state, Zip: action.value  }
            
            case 'City':
                return { ...state, City: action.value }
            
            case 'Country':
                return { ...state, Country: action.value  }
        
            case 'PaymentEMoney':
                return { ...state, PaymentEMoney: action.value  }
            
            case 'PaymentCash':
                return { ...state, PaymentCash: action.value  }
            
            case 'Emoney':
                return { ...state, Emoney: action.value  }
            
            case 'EmoneyPin':
                return { ...state, EmoneyPin: action.value  }
            
            case 'Reset':
                return { ...state, FullName: '', ValidFullName: false, email: '', ValidEmail: false, Number: '', ValidNumber: false, Adresse: '', ValidAdresse: false, Zip: '', ValidZip: false, City: '', ValidCity: false, Country: '', ValidCountry: false, PaymentEMoney: '', ValidPaymentEMoney: false, PaymentCash: '', ValidPaymentCash: false, Emoney: '', ValidEmoney: false, EmoneyPin: '', ValidEmoneyPin: false,}
            default:
                return state
        }
    }

    const ErrorForm = {
        ValidFullName: true,
        ValidEmail: true,
        ValidNumber: true,
        ValidAdresse: true,
        ValidZip: true,
        ValidCity: true,
        ValidCountry: true,
        ValidPaymentEMoney: true,
        ValidPaymentCash: true,
        ValidEmoney: true,
        ValidEmoneyPin: true,
        ValidAll:false,
    }

    const [Error, setError] = useReducer(ReducerError, ErrorForm)
    
    function ReducerError(state, action) {
        let IsValid= false;
        switch (action.type) {

            case 'ValidFullName':
                
                IsValid = action.payLoad.FullName.length > 0 ? true : false
            
            return {
                    ...state,
                    ...({
                        ValidFullName: IsValid,
                        ValidAll: (state.ValidFullName && state.ValidEmail && state.ValidNumber && state.ValidAdresse && state.ValidZip && state.ValidCity && state.ValidCountry && state.ValidPaymentEMoney && state.ValidPaymentCash && state.ValidEmoney && state.ValidEmoneyPin)
                    })  
                }
            case 'ValidEmail':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                IsValid= ( action.payLoad.email.length > 0 && emailRegex.test(action.payLoad.email) )?  true : false
                return {
                    ...state,
                    ...({
                        ValidEmail: IsValid,
                        ValidAll: (state.ValidFullName && state.ValidEmail && state.ValidNumber && state.ValidAdresse && state.ValidZip && state.ValidCity && state.ValidCountry && state.ValidPaymentEMoney && state.ValidPaymentCash && state.ValidEmoney && state.ValidEmoneyPin)    
                                    })              
                }
            case 'ValidNumber':
                const numberRegex = /^[0-9]+$/;
                IsValid= ( action.payLoad.Number.length > 0 && numberRegex.test(action.payLoad.Number) )?  true : false
                return {
                    ...state,
                    ...({
                        ValidNumber: IsValid,
                        ValidAll: (state.ValidFullName && state.ValidEmail && state.ValidNumber && state.ValidAdresse && state.ValidZip && state.ValidCity && state.ValidCountry && state.ValidPaymentEMoney && state.ValidPaymentCash && state.ValidEmoney && state.ValidEmoneyPin)
                    })
                }
            case 'ValidAdresse':
                IsValid = action.payLoad.Adresse.length > 0 ? true : false
                return {
                    ...state,
                    ...({
                        ValidAdresse: IsValid,
                        ValidAll: (state.ValidFullName && state.ValidEmail && state.ValidNumber && state.ValidAdresse && state.ValidZip && state.ValidCity && state.ValidCountry && state.ValidPaymentEMoney && state.ValidPaymentCash && state.ValidEmoney && state.ValidEmoneyPin)
                    })
                }
            case 'ValidZip':
                const zipRegex = /^[0-9]+$/;
                IsValid= ( action.payLoad.Zip.length > 0 && zipRegex.test(action.payLoad.Zip) )?  true : false
                return {
                    ...state,
                    ...({
                        ValidZip: IsValid,
                        ValidAll: (state.ValidFullName && state.ValidEmail && state.ValidNumber && state.ValidAdresse && state.ValidZip && state.ValidCity && state.ValidCountry && state.ValidPaymentEMoney && state.ValidPaymentCash && state.ValidEmoney && state.ValidEmoneyPin)
                    })
                }
            case 'ValidCity':
                IsValid = action.payLoad.City.length > 0 ? true : false
                return {
                    ...state,
                    ...({
                        ValidCity: IsValid,
                        ValidAll: (state.ValidFullName && state.ValidEmail && state.ValidNumber && state.ValidAdresse && state.ValidZip && state.ValidCity && state.ValidCountry && state.ValidPaymentEMoney && state.ValidPaymentCash && state.ValidEmoney && state.ValidEmoneyPin)
                    })
                }
            case 'ValidCountry':
                IsValid = action.payLoad.Country.length > 0 ? true : false
                return {
                    ...state,
                    ...({
                        ValidCountry: IsValid,
                        ValidAll: (state.ValidFullName && state.ValidEmail && state.ValidNumber && state.ValidAdresse && state.ValidZip && state.ValidCity && state.ValidCountry && state.ValidPaymentEMoney && state.ValidPaymentCash && state.ValidEmoney && state.ValidEmoneyPin)
                    })
                }
            case 'ValidPaymentEMoney':
                IsValid = action.payLoad.PaymentEMoney.length > 0 ? true : false
                return {
                    ...state,
                    ...({
                        ValidPaymentEMoney: IsValid,
                        ValidAll: (state.ValidFullName && state.ValidEmail && state.ValidNumber && state.ValidAdresse && state.ValidZip && state.ValidCity && state.ValidCountry && state.ValidPaymentEMoney && state.ValidPaymentCash && state.ValidEmoney && state.ValidEmoneyPin)
                    })
                }
            case 'ValidPaymentCash':
                IsValid = action.payLoad.PaymentCash.length > 0 ? true : false
                return {
                    ...state,
                    ...({
                        ValidPaymentCash: IsValid,
                        ValidAll: (state.ValidFullName && state.ValidEmail && state.ValidNumber && state.ValidAdresse && state.ValidZip && state.ValidCity && state.ValidCountry && state.ValidPaymentEMoney && state.ValidPaymentCash && state.ValidEmoney && state.ValidEmoneyPin)
                    })
                }
            case 'ValidEmoney':
                const emoneyRegex = /^[0-9]+$/;
                IsValid= ( action.payLoad.Emoney.length > 0 && emoneyRegex.test(action.payLoad.Emoney) )?  true : false
                return {
                    ...state,
                    ...({
                        ValidEmoney: IsValid,
                        ValidAll: (state.ValidFullName && state.ValidEmail && state.ValidNumber && state.ValidAdresse && state.ValidZip && state.ValidCity && state.ValidCountry && state.ValidPaymentEMoney && state.ValidPaymentCash && state.ValidEmoney && state.ValidEmoneyPin)
                    })
                }
            case 'ValidEmoneyPin':
                const emoneypinRegex = /^[0-9]+$/;
                IsValid= ( action.payLoad.EmoneyPin.length > 0 && emoneypinRegex.test(action.payLoad.EmoneyPin) )?  true : false
                return {
                    ...state,
                    ...({

                        ValidEmoneyPin: IsValid,
                        ValidAll: (state.ValidFullName && state.ValidEmail && state.ValidNumber && state.ValidAdresse && state.ValidZip && state.ValidCity && state.ValidCountry && state.ValidPaymentEMoney && state.ValidPaymentCash && state.ValidEmoney && state.ValidEmoneyPin)
                    })
                }
            default:
                return state
        }
    }

    const CheckContextValue = {
        DataForm, setDataForm,Error, setError

    }

    return (
        <ShopCheckContext.Provider value={CheckContextValue}>
        {props.children}
        </ShopCheckContext.Provider>
    )
}

export default ContextCheckProvider
