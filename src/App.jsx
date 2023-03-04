import Home from './components/Pages/Home'
import Speakers from './components/Pages/Speakers'
import Earsphones from './components/Pages/Earsphones'
import Headphones from './components/Pages/HeadPhones'
import HeadphonesMark from './components/Pages/HeadphonesMark'
import HeadphonesMark2 from './components/Pages/HeadphonesMark2'
import XX59 from './components/Pages/XX59'
import ZX7 from './components/Pages/ZX7'
import ZX9 from './components/Pages/ZX9'
import YX1 from './components/Pages/YX1'
import Checkout from './components/Pages/Checkout'
import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import ContextProvider from './components/Context'
import ContextCheckProvider from './components/ContextCheck'
function App() {

  return (
    
    
    <ContextProvider>
     
    <HashRouter basename='/'>  
      <Routes>
        <Route  path="/" element={<Home />}/>

        
        <Route  path="/headphones" element={<Headphones />}/>
        <Route  path="/speakers" element={<Speakers />}/>
        <Route  path="/XX99MarkIHeadphones" element={<HeadphonesMark />}/>
        <Route  path="/XX99MarkIIHeadphones" element={<HeadphonesMark2 />}/>
        <Route  path="/XX59Headphones" element={<XX59 />}/>
        <Route  path="/ZX7Speaker" element={<ZX7 />}/>
        <Route  path="/ZX9Speaker" element={<ZX9 />}/>
        <Route  path="/YX1Earphones" element={<YX1 />}/>
        <Route  path="/earsphones" element={<Earsphones/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </HashRouter> 
    
    </ContextProvider>
    
  )
}

export default App
