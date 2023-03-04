import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import Modal from '../Modal'
import ModalCheck from '../ModalCheck'
import { ShopContext } from '../Context'
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
