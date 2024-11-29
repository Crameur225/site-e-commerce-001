import React from 'react'
import { products } from '../products'
import ProductsCard from '../components/ProductsCard'

const Home = () => {
  return (
    <div>
       <h1 className='text-3xl my-5'>List des Produits</h1>
       <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10'>
        {products.map((product, key) =>(
          <ProductsCard key={key} data={product} />
        ))}
       </div>
    </div>
  )
}

export default Home