import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartPageContext'
import QuantityControl from './QuantityControl';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className='my-8 lg:px-10 md:px-8 sm:px-4 pt-[calc(14rem)]'>
      {cartItems?.length > 0 ? (
        <>
          <div className='flex justify-between items-center'>
            <h1 className='font-bold text-4xl md:text-5xl md:font-semibold lg:text-6xl'>Your cart</h1>
            <Link to='/products' className='hover:border-b border-rose-500 text-lg font-semibold'>Continue shopping</Link>
          </div>

          <ul className='flex mx-auto border-b border-rose-200 py-4 text-rose-400'>
            <li className='flex-2/4'>Product</li>
            <li className='md:flex-1/4 md:flex hidden'>Quantity</li>
            <li className=' min-w-32'>Total</li>
          </ul>

          {cartItems.map((item) => (
          <div key={item.id}>
            <div className='py-4 flex items-center gap-8'>
              <div className='flex flex-2/4 items-center'>
                <img src={item.images[0]} alt={item.title} className='w-32' />
                <div>
                  <p className='font-bold text-lg'>{item.title}</p>
                  <p>Price: ${item.price}</p>
                </div>
              </div>

              {/* BIG SCREEN */}
              <div className='my-4 md:flex-1/4 md:flex hidden'>
                <QuantityControl item={item} />
              </div>

              <div>
                <p className='font-semibold min-w-32'>
                  LE {item.price * item.quantity}
                </p>
              </div>
            </div>

            {/* QUANTITY FOR MOBILE SCREENS */}
            <div className='my-4 flex -translate-y-3 items-center justify-center md:hidden'>
              <QuantityControl item={item} />
            </div>
          </div>
          ))} 
          <div className='border-t border-rose-200 py-8 justify-end flex'>
            <div>
              <div className='flex gap-8 items-center py-2'> 
                <h3 className='md:text-3xl text-2xl'>Estimated total</h3>
                <h3 className='md:text-2xl text-xl'>LE {totalPrice}</h3>
              </div>
              <p>Taxes, discounts and shipping calculated at checkout.</p>
              <button 
                className='items-center justify-center border bg-black font-semibold text-gray-300 min-w-40 w-full max-w-96 h-14 my-2 flex flex-row overflow-hidden cursor-pointer'
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className='flex flex-col place-items-center gap-8'>
          <h1 className=' text-6xl'>Your cart is empty</h1>
          <Link to='/products' className=' bg-rose-600 text-rose-50 font-semibold text-lg px-10 py-5'>Continue shopping</Link>
        </div>
      )}
    </div>
  )
}

export default Cart