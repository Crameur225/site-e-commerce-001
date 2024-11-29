import React, { useEffect, useState } from 'react'
import { products } from '../products'
import { changeQuantity } from '../stores/cart'
import { useDispatch } from 'react-redux'

const CartItem = (props) => {
    const {productId, quantity} = props.data
    const [details, setDetails] = useState([])
     const dispatch = useDispatch()
    useEffect(()=>{
    const filterProduct = products.filter(product => product.id === productId)[0];
    setDetails(filterProduct)
    }, [productId])
    const handleMinusCart = () =>{
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity - 1
        }))
    }

    const handleAddCart = () =>{
        dispatch(changeQuantity({
            productId: productId,
            quantity: quantity + 1
        }))
    }
  return (
    <div className='flex justify-between items-center bg-slate-700 border-slate-700 p-2 text-white border-b-2 gap-5 rounded-md'>
      <img src={details.image} alt="" className='w-12'/>
      <h3>{details.name}</h3>
      <p>${details.price * quantity}</p>
       <div className='flex justify-between items-center'>
         <button className='bg-gray-200  rounded-full w-6 h-6 font-bold text-cyan-500' onClick={handleMinusCart}>-</button>
         <span>{quantity}</span>
         <button className='bg-gray-200  rounded-full w-6 h-6 font-bold text-cyan-500' onClick={handleAddCart}>+</button>
       </div>
    </div>
  )
}

export default CartItem