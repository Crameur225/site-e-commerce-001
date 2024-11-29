import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import CartToAdd from './CartToAdd'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='bg-zinc-200'>
        <main className='w-[1200px] max-w-full m-auto p-5'>
        <Header />
        <Outlet/>
        </main>
        <CartToAdd />
        <Footer/>
    </div>
  )
}

export default Layout