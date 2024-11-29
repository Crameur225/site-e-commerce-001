import React from 'react'

const Footer = () => {
    const date = new Date();
     const dateYear = date.getFullYear();
  return (
    <div className='w-full h-80 bg-slate-600 flex items-center justify-center'>
       <p className='text-center text-3xl font-bold'>Gael Agbe :)</p>
    </div>
  )
}

export default Footer