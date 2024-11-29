import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import {products} from '../products'
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from '../stores/cart';
const Details = () => {
  const {slug} = useParams();
  const carts = useSelector(store => store.cart.items)
  const [details, setDetails] = useState([]);
  const [quantity, setQuantity] = useState(1)
  const dipatch = useDispatch()
  useEffect(()=>{
   const filterDetail = products.filter((product) => product.slug === slug); 
   if (filterDetail.length > 0){
      setDetails(filterDetail[0])
   }else{
      window.location.href = "/";
   }
   
  }, [slug])
   const handleMinusCart = () =>{
     setQuantity(quantity - 1 < 1 ? 1 :  quantity-1)
   }
   const handlePlusCart = () =>{
    setQuantity(quantity + 1)
   }

  const handleAddToCart = () =>{
    dipatch(addTocart({
      productId: details.id,
      quantity: quantity
    }))
  }
  console.log(carts);
  
  return (
    <div>
     <h2 className='text-3xl text-center'>Produit Detail</h2>
     <div className='grid grid-cols-2 gap-5 mt-5'>
        <div>
           <img src={details.image} alt="" className='w-full'/>
        </div>
        <div className='flex flex-col gap-5'>
           <h3 className='text-3xl uppercase font-bold'>{details.name}</h3>
           <p className='text-3xl font-bold'>
            ${details.price}
           </p>
           <div className='flex gap-5'>
            <div className='flex gap-5 justify-center items-center'>
            <button className='bg-gray-100 rounded-xl w-10 font-bold text-xl flex items-center justify-center' onClick={handleMinusCart}>-</button>
              <span className='font-bold text-xl'>{quantity}</span>
              <button className='bg-gray-100 rounded-xl w-10 font-bold text-xl flex items-center justify-center' onClick={handlePlusCart}>+</button>
            </div>
             <button className='bg-slate-900 text-white px-7 rounded-xl shadow-2xl'  onClick={handleAddToCart}>
              Add to Cart 
             </button>
           </div>
           <p>
            {details.description}
           </p>
        </div>
     </div>
    </div>
  )
}

export default Details

















// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { products } from '../products';

// const Details = () => {
//   const [detail, setDetails] = useState([])
//     const {slug} = useParams();
//   useEffect(()=>{
//    const filterDetail = products.filter((product) => product.slug === slug)
//    if(filterDetail.length > 0){
//     setDetails(filterDetail([0]))
//    }else{
//     window.location.href = "/"
//    }

//   }, [slug])
//   return (
//     <div className=''>
        
//     </div>
//   )
// }

// export default Details