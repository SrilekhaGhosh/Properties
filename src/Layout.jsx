import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen w-full">
   
    <div className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <Header />
    </div>

  
    <div className="flex-1 flex justify-center w-full pt-[80px]">
      <div className="w-full max-w-[1200px] px-4">
        <Outlet />
      </div>
    </div>

    
    <Footer />
  </div>

  )
}

export default Layout