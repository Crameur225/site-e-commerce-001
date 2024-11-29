import React, { useEffect, useState } from 'react';
import iconCart from '../assets/images/iconCart.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusTab } from '../stores/cart';

const Header = () => {
  const carts = useSelector(store => store.cart.items)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const dispatch = useDispatch()
  useEffect(()=>{
  let total = 0;
  carts.forEach(item => total += item.quantity);
  setTotalQuantity(total)
  }, [carts])
  const handleOpenCart = () =>{
    dispatch(toggleStatusTab())
  }
  return (
    <header className="flex items-center justify-between ">
      <Link to="/" className='text-3xl font-semibold'>Home.</Link>
       <div className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative hover:cursor-pointer' onClick={handleOpenCart}>
        <img src={iconCart} alt="" className='w-6'/>
        <span className='absolue top-2/3 right-1/2 bg-red-500 text-white rounded-full text-sm w-5 h-5 flex items-center justify-center '>{totalQuantity}</span>
       </div>
    </header>
  )
}

export default Header