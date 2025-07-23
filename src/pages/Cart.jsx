import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className='flex flex-col place-items-center gap-8'>
      <h1 className=' text-6xl'>Your cart is empty</h1>
      <Link to='/products' className=' bg-rose-600 text-rose-50 font-semibold text-lg px-10 py-5'>Continue shopping</Link>
    </div>
  )
}

export default Cart