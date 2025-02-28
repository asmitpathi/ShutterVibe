import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/footer'
import { Outlet } from 'react-router-dom' //Outlet willuse the layout as a base and wherever we use Outlet we can change that part of the layout

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout