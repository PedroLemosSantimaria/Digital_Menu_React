import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import App from './App.jsx'
import './App.css'
import './components/Header.css'
import './components/ProductPhoto.css'
function AppShell(){
    return(
        <>
            <BrowserRouter>
                
                <Routes>
                    <Route exact path='/' element={<App/>}/>
                    <Route path='/product' element={<ProductPage/>}/>
                </Routes>
                
            </BrowserRouter>
            
        </>
    )
}

export default AppShell
