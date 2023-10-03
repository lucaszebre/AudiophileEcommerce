import React from 'react'
import Nav from './nav'
import Footer from './footer'
import Modal from './modal'
import ModalCheck from './modalCheck'
import { ShopContext } from '../stores/ContextCheck/Context'
import { useContext } from 'react'
const Layout = ({children}) => {
    const {HandleModal,setModal,Manage,dispatch,ModalChecked} = useContext(ShopContext)

    
    return (
        <>
            <Nav 
            color='black'
            />
            <Modal/> 
        {ModalChecked &&  <ModalCheck /> }
            <main>
                {children}
            </main>
            <Footer />
        </>
    
    )
}

export default Layout
