import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { toggleStatusTab } from '../stores/cart'

const CartToAdd = () => {
  const carts = useSelector(store => store.cart.items)
  const statusTab = useSelector(store => store.cart.statusTab)
  const dispatch = useDispatch()
  const handleColse = () =>{
    dispatch(toggleStatusTab());
  }
  return (
    <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px]
      transform transition-transform duration-500 ${statusTab === false ? "translate-x-full" : ''} `}>
      <h2 className='p-5 text-white'>Shopping Shop</h2>
     <div>
      <div>
        {carts.map((item, key)=>(
          <CartItem key={key} data={item}/>
        ))}
      </div>
      <div className='grid grid-cols-2'>
      <button className='bg-black text-white' onClick={handleColse}>CLOSE</button>
      <button className='bg-amber-600 text-white'>CHECKHOUT</button>
      </div>
     </div>
    </div>
  )
}

export default CartToAdd