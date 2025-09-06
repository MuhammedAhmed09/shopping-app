import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartPageContext'
import QuantityControl from '../components/QuantityControl';
import OrderSummary from '../components/OrderSummary';

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
            <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl md:font-semibold lg:text-5xl my-6'>Your cart</h1>
            <Link to='/products' className='hover:border-b border-primary-border text-lg font-semibold'>Continue shopping</Link>
          </div>

          <OrderSummary />

          <div className='border-t border-primary-border/40 py-8 md:justify-end justify-center flex'>
            <div>
              <div className='flex gap-8 items-center py-2'> 
                <h3 className='md:text-3xl text-2xl'>Estimated total</h3>
                <h3 className='md:text-2xl text-xl'>LE {Math.round(totalPrice)}</h3>
              </div>
              <p>Taxes, discounts and shipping calculated at checkout.</p>
              <Link
                to='/checkout' 
                className='items-center justify-center border bg-black font-semibold text-gray-300 min-w-40 w-full max-w-96 h-14 my-2 flex flex-row overflow-hidden cursor-pointer'
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className='flex flex-col place-items-center gap-8'>
          <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl md:font-semibold lg:text-5xl'>Your cart is empty</h1>
          <Link to='/products' className=' bg-primary text-white font-semibold text-lg px-10 py-5 hover:scale-105 duration-300'>Continue shopping</Link>
        </div>
      )}
    </div>
  )
}

export default Cart