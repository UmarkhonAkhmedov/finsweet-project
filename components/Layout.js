import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Copyright from './Copyright'


const Layout = ({ children }) => {
  return (
    <>
      <Navbar/> 
      {children}
      <Footer/>
      <Copyright/>
    </>
  )
}

export default Layout