import React from 'react'
import Header from './Pages/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Pages/Footer.jsx/Footer'

function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout