import React from 'react'
import { Link } from 'react-router-dom'
import iconCart from '../assets/images/iconCart.png'
import { useDispatch, useSelector } from 'react-redux'
import { addTocart } from '../stores/cart'


const ProductsCard = (props) => {
    const {id, name, image,price, description, slug} = props.data
    const carts = useSelector(store => store.cart.items)
    const dispatch = useDispatch()
    const handleAddToCart = () =>{
      dispatch(addTocart({
        productId: id,
        quantity: 1
      }))
    }
    console.log(carts);
    
  return (
    <div className='bg-white p-5 rounded-xl shadow-sm'>
     <Link to={slug}>
     <img src={image} alt="" className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]'/>
     </Link>
     <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
     <div className='flex justify-between items-center'>
       <p>
           $<span className='text-3xl font-medium'>{price}</span>
       </p>
         <button className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2' onClick={handleAddToCart}>
            <img src={iconCart} alt="" className='w-5'/>
            Add to Cart
         </button>
     </div>
    </div>
  )
}

export default ProductsCard