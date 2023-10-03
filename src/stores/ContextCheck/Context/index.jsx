import React, { createContext, useState ,useReducer, } from 'react'
export const ShopContext = createContext()
const ContextProvider = (props) => {
    const [Modal , setModal] = useState(false)
    function handleModal() {
        setModal(!Modal)
    }

    const getInitialState = () => {
        const storageState = localStorage.getItem('Manage'); // Get the state from localStorage
        if (storageState) {
            return JSON.parse(storageState);
        } else {
            return {
            TotalPrice: 0, 
            HeadphonesXX59: 0,
            HeadphonesXX99: 0,
            HeadphonesXX99M2: 0,
            SpeakerZX7: 0,
            SpeakerZX9: 0,
            EarphonesYX1: 0,
            ActualXX59: 0,
            ActualXX99: 0,
            ActualXX99M2: 0,
            ActualZX7: 0,
            ActualZX9: 0,
            ActualYX1: 0,
            };
        }
        };

    const reducer = (state, action) => { // This is the reducer function that will be called by the dispatch function
        switch (action.path) {
            case "/XX59Headphones": 
                switch (action.type) {
                    case 'ADD_PANIER':
                            const newHeadphonesXX59 = state.HeadphonesXX59 + state.ActualXX59;
                            const newTotalPrice = state.TotalPrice + state.ActualXX59 * 899;
                            const newActualXX59 = 0;
                            const newState = {
                                ...state,
                                HeadphonesXX59: newHeadphonesXX59,
                                TotalPrice: newTotalPrice,
                                ActualXX59: newActualXX59,
                            };
                            localStorage.setItem('Manage', JSON.stringify(newState));
                            return newState;
                    case 'REMOVE_PANIER':
                        localStorage.setItem('Manage', JSON.stringify({
                            ...state,
                            HeadphonesXX59: state.HeadphonesXX59 - 1,
                            TotalPrice: state.TotalPrice - 899,
                            ActualXX59: 0,}));
                        return {
                            ...state,
                            HeadphonesXX59: state.HeadphonesXX59 - 1,
                            TotalPrice: state.TotalPrice - 899,
                            ActualXX59: 0,
                        }
                    case 'REMOVE':
                        if (state.ActualXX59 > 0) {
                            localStorage.setItem('Manage', JSON.stringify({
                                ...state,
                                ActualXX59: state.ActualXX59 - 1,
                            }));
                            return {
                                ...state,
                                ActualXX59: state.ActualXX59 - 1,
                            }
                        }
                    case 'ADD':
                        if (state.ActualXX59 >= 0) {
                            localStorage.setItem('Manage', JSON.stringify({
                                ...state,
                                ActualXX59: state.ActualXX59 + 1,
                            }));
                            return {
                                ...state,
                                ActualXX59: state.ActualXX59 + 1,
                            }
                        }
                        case 'ADD_1PANIER':
                            localStorage.setItem('Manage', JSON.stringify({
                                ...state,
                                HeadphonesXX59: state.HeadphonesXX59 + 1,
                                TotalPrice: state.TotalPrice + 899,
                                ActualXX59: 0,
                            }));
                            return {
                                ...state,
                                HeadphonesXX59: state.HeadphonesXX59 + 1,
                                TotalPrice: state.TotalPrice + 899,
                                ActualXX59: 0,
                            }
                    }
            case "/XX99MarkIHeadphones":
                switch (action.type) {
                        case 'ADD_PANIER':
                            localStorage.setItem('Manage', JSON.stringify({
                                ...state,
                                HeadphonesXX99: state.HeadphonesXX99 + state.ActualXX99,
                                TotalPrice: state.TotalPrice + (state.ActualXX99*1750),
                            }));
                            return {
                                ...state,
                                HeadphonesXX99: state.HeadphonesXX99 + state.ActualXX99,
                                TotalPrice: state.TotalPrice + (state.ActualXX99*1750),
                            }
                        
                            case 'ADD':
                                localStorage.setItem('Manage', JSON.stringify({
                                    ...state,
                                    ActualXX99: state.ActualXX99 + 1,
                                }));
                                if (state.ActualXX99 >= 0) {
                                return {
                                    ...state,
                                    ActualXX99: state.ActualXX99 + 1,
                                }   
                            }         
                                case 'REMOVE':
                                    localStorage.setItem('Manage', JSON.stringify({
                                        ...state,
                                        ActualXX99: state.ActualXX99 - 1,
                                    }));
                                    if (state.ActualXX99 > 0) {
                                    return {
                                        ...state,
                                        ActualXX99: state.ActualXX99 - 1,
                                    }
                                }
                        case 'REMOVE_PANIER':
                            localStorage.setItem('Manage', JSON.stringify({
                                ...state,
                                HeadphonesXX99: state.HeadphonesXX99 - 1,
                                TotalPrice: state.TotalPrice - 1750,
                                ActualXX99: 0,
                            }));
                            return {
                                ...state,
                                HeadphonesXX99: state.HeadphonesXX99 - 1,
                                TotalPrice: state.TotalPrice - 1750,
                                ActualXX99: 0,
                            }
                            case 'ADD_1PANIER':
                                localStorage.setItem('Manage', JSON.stringify({
                                    ...state,
                                    HeadphonesXX99: state.HeadphonesXX99 + 1,
                                    TotalPrice: state.TotalPrice + 1750,
                                    ActualXX99: 0,
                                }));
                                return {
                                    ...state,
                                    HeadphonesXX99: state.HeadphonesXX99 + 1,
                                    TotalPrice: state.TotalPrice + 1750,
                                    ActualXX99: 0,
                                }
                    }
            case "/XX99MarkIIHeadphones":
                switch (action.type) {
                    case 'ADD_PANIER':
                        localStorage.setItem('Manage', JSON.stringify({
                            ...state,
                            HeadphonesXX99M2: state.HeadphonesXX99M2 + state.ActualXX99M2,
                            TotalPrice: state.TotalPrice + (state.ActualXX99M2*2999),
                        }));
                        return {
                            ...state,
                            HeadphonesXX99M2: state.HeadphonesXX99M2 + state.ActualXX99M2,
                            TotalPrice: state.TotalPrice + (state.ActualXX99M2*2999),
                        }
                    case 'ADD':
                        if (state.ActualXX99M2 >= 0) {
                            localStorage.setItem('Manage', JSON.stringify({
                                ...state,
                                ActualXX99M2: state.ActualXX99M2 + 1,
                            }));
                    
                        return {
                            ...state,
                            ActualXX99M2: state.ActualXX99M2 + 1,
                        }
                    }
                    case 'REMOVE':
                        if (state.ActualXX99M2 > 0) {
                            localStorage.setItem('Manage', JSON.stringify({
                                ...state,
                                ActualXX99M2: state.ActualXX99M2 - 1,
                            }));
                        return {
                            ...state,
                            ActualXX99M2: state.ActualXX99M2 - 1,
                        }
                    }
                    case 'REMOVE_PANIER':
                        localStorage.setItem('Manage', JSON.stringify({
                            ...state,
                            HeadphonesXX99M2: state.HeadphonesXX99M2 - 1,
                            TotalPrice: state.TotalPrice - 2999,
                            ActualXX99M2: 0,
                        }));
                        return {
                            ...state,
                            HeadphonesXX99M2: state.HeadphonesXX99M2 - 1,
                            TotalPrice: state.TotalPrice - 2999,
                            ActualXX99M2: 0,
                        }
                        case 'ADD_1PANIER':
                            localStorage.setItem('Manage', JSON.stringify({
                                ...state,
                                HeadphonesXX99M2: state.HeadphonesXX99M2 + 1,
                                TotalPrice: state.TotalPrice + 2999,
                                ActualXX99M2: 0,
                            }));
                            return {
                                ...state,
                                HeadphonesXX99M2: state.HeadphonesXX99M2 + 1,
                                TotalPrice: state.TotalPrice + 2999,
                                ActualXX99M2: 0,
                            }
                }
            case "/ZX7Speaker":
                switch (action.type) {
                    case 'ADD_PANIER':
                        localStorage.setItem('Manage', JSON.stringify({
                            ...state,
                            SpeakerZX7: state.SpeakerZX7 + state.ActualZX7,
                            TotalPrice: state.TotalPrice + (state.ActualZX7*3500),
                        }));

                        return {
                            ...state,
                            SpeakerZX7: state.SpeakerZX7 + state.ActualZX7,
                            TotalPrice: state.TotalPrice + (state.ActualZX7*3500),
                        }
                    case 'ADD':
                        if (state.ActualZX7 >= 0) {
                            localStorage.setItem('Manage', JSON.stringify({
                                ...state,
                                ActualZX7: state.ActualZX7 + 1,
                            }));

                        return {
                            ...state,
                            ActualZX7: state.ActualZX7 + 1,
                        }
                    }
                    case 'REMOVE':
                        if (state.ActualZX7 > 0) {
                            localStorage.setItem('Manage', JSON.stringify({
                                ...state,
                                ActualZX7: state.ActualZX7 - 1,
                            }));

                        return {
                            ...state,
                            ActualZX7: state.ActualZX7 - 1,
                        }
                    }
                    case 'REMOVE_PANIER':
                        localStorage.setItem('Manage', JSON.stringify({
                            ...state,
                            SpeakerZX7: state.SpeakerZX7 - 1,
                            TotalPrice: state.TotalPrice - 3500,
                            ActualZX7: 0,
                        }));
                        return {
                            ...state,
                            SpeakerZX7: state.SpeakerZX7 - 1,
                            TotalPrice: state.TotalPrice - 3500,
                            ActualZX7: 0,
                        }
                        case 'ADD_1PANIER':
                            localStorage.setItem('Manage', JSON.stringify({
                                ...state,
                                SpeakerZX7: state.SpeakerZX7 + 1,
                                TotalPrice: state.TotalPrice + 3500,
                                ActualZX7: 0,
                            }));
                            return {
                                ...state,
                                SpeakerZX7: state.SpeakerZX7 + 1,
                                TotalPrice: state.TotalPrice + 3500,
                                ActualZX7: 0,
                            }
                }
            case "/ZX9Speaker":
                switch (action.type) {

                    case 'ADD_PANIER':
                        localStorage.setItem('Manage', JSON.stringify({
                            ...state,
                            SpeakerZX9: state.SpeakerZX9 + state.ActualZX9,
                            TotalPrice: state.TotalPrice + (state.ActualZX9*4500),
                        }));

                        return {
                            ...state,
                            SpeakerZX9: state.SpeakerZX9 + state.ActualZX9,
                            TotalPrice: state.TotalPrice + (state.ActualZX9*4500),
                        }
                    case 'ADD':
                        if  (state.ActualZX9 >= 0) {
                            localStorage.setItem('Manage', JSON.stringify({
                                ...state,
                                ActualZX9: state.ActualZX9 + 1,
                            }));
                        return {
                            ...state,
                            ActualZX9: state.ActualZX9 + 1,
                        }
                    }   
                    case 'REMOVE':
                        if (state.ActualZX9 > 0) {
                            localStorage.setItem('Manage', JSON.stringify({
                                ...state,
                                ActualZX9: state.ActualZX9 - 1,
                            }));

                        return {
                            ...state,
                            ActualZX9: state.ActualZX9 - 1,
                        }
                    }
                    case 'REMOVE_PANIER':
                        localStorage.setItem('Manage', JSON.stringify({
                            ...state,
                            SpeakerZX9: state.SpeakerZX9 - 1,
                            TotalPrice: state.TotalPrice - 4500,
                            ActualZX9: 0,
                        }));
                        return {
                            ...state,
                            SpeakerZX9: state.SpeakerZX9 - 1,
                            TotalPrice: state.TotalPrice - 4500,
                            ActualZX9: 0,
                        }
                        case 'ADD_1PANIER':
                            localStorage.setItem('Manage', JSON.stringify({
                                ...state,
                                SpeakerZX9: state.SpeakerZX9 + 1,
                                TotalPrice: state.TotalPrice +4500,
                                ActualZX9: 0,
                            }));
                            return {
                                ...state,
                                SpeakerZX9: state.SpeakerZX9 + 1,
                                TotalPrice: state.TotalPrice +4500,
                                ActualZX9: 0,
                            }
                }
            case "/YX1Earphones":
                switch (action.type) {
                    case 'ADD_PANIER':
                        localStorage.setItem('Manage', JSON.stringify({
                            ...state,
                            EarphonesYX1: state.EarphonesYX1 + state.ActualYX1,
                            TotalPrice: state.TotalPrice + (state.ActualYX1*599),
                        }));
                        return {
                            ...state,
                            EarphonesYX1: state.EarphonesYX1 + state.ActualYX1,
                            TotalPrice: state.TotalPrice + (state.ActualYX1*599),
                        }
                    case 'ADD':
                        if (state.ActualYX1 >= 0) {
                            localStorage.setItem('Manage', JSON.stringify({
                                ...state,
                                ActualYX1: state.ActualYX1 + 1,
                            }));

                        return {
                            ...state,
                            ActualYX1: state.ActualYX1 + 1,
                        }
                    }
                    case 'REMOVE':
                        if (state.ActualYX1 > 0) {
                            localStorage.setItem('Manage', JSON.stringify({
                                ...state,
                                ActualYX1: state.ActualYX1 - 1,
                            }));
                        return {
                            ...state,
                            ActualYX1: state.ActualYX1 - 1,
                        }
                    }
                    case 'REMOVE_PANIER':
                        localStorage.setItem('Manage', JSON.stringify({
                            ...state,
                            EarphonesYX1: state.EarphonesYX1 - 1,
                            TotalPrice: state.TotalPrice - 599,
                            ActualYX1: 0,
                        }));
                        return {
                            ...state,
                            EarphonesYX1: state.EarphonesYX1 - 1,
                            TotalPrice: state.TotalPrice - 599,
                            ActualYX1: 0,
                        }
                    case 'ADD_1PANIER':
                        localStorage.setItem('Manage', JSON.stringify({
                            ...state,
                            EarphonesYX1: state.EarphonesYX1 + 1,
                            TotalPrice: state.TotalPrice + 599,
                            ActualYX1: 0,
                        }));
                        return {
                            ...state,
                            EarphonesYX1: state.EarphonesYX1 + 1,
                            TotalPrice: state.TotalPrice + 599,
                            ActualYX1: 0,
                        }
                }
            case 'RESET':
                localStorage.setItem('Manage', JSON.stringify({
                    ...state,
                    TotalPrice: 0,
                    HeadphonesXX59: 0,
                    HeadphonesXX99: 0,
                    HeadphonesXX99M2: 0,
                    SpeakerZX7: 0,
                    SpeakerZX9: 0,
                    EarphonesYX1: 0,
                    ActualXX59: 0,
                    ActualXX99: 0,
                    ActualXX99M2: 0,
                    ActualZX7: 0,
                    ActualZX9: 0,
                    ActualYX1: 0,
                }));
                return {
                    ...state,
                    TotalPrice: 0,
                    HeadphonesXX59: 0,
                    HeadphonesXX99: 0,
                    HeadphonesXX99M2: 0,
                    SpeakerZX7: 0,
                    SpeakerZX9: 0,
                    EarphonesYX1: 0,
                    ActualXX59: 0,
                    ActualXX99: 0,
                    ActualXX99M2: 0,
                    ActualZX7: 0,
                    ActualZX9: 0,
                    ActualYX1: 0,
                }
            default:
                return state
        }
    }

    const [ModalChecked, setModalCheck] = useState(false) //ModalChecked = true => Modal is open
    const [Manage, dispatch] = useReducer(reducer, getInitialState()) //Manage = state
    
    React.useEffect(() => { 
        if(Modal || ModalChecked){
        document.body.style.overflow = 'hidden'; //Disable scroll when Modal is open
        } else {
        document.body.style.overflow = 'unset'; //Enable scroll when Modal is close
        }
      }, [Modal, ModalChecked]); 
    

    const ContextValue = {   //ContextValue = value of the context
        Modal,
        handleModal,
        setModal,
        Manage,
        dispatch,
        ModalChecked,
        setModalCheck,
    

    }

    return (
        <ShopContext.Provider value={ContextValue}>
        {props.children}
        </ShopContext.Provider>
    )
}

export default ContextProvider
