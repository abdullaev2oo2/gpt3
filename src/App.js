import React from 'react'

import {Footer, Header, Possibility, Features, WhatModern, Blog} from './containers'
import {Brand, CTA, Navbar } from './components'
import './App.css'
import './index.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        
        <Brand/>
        <WhatModern/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    
    </div>
  )
}

export default App