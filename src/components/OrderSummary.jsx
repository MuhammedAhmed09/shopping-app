import React, { useContext } from 'react'
import { CartContext } from '../context/CartPageContext';
import QuantityControl from './QuantityControl';

const OrderSummary = () => {
    const { cartItems } = useContext(CartContext);
  
  return (
    <>
        <ul className='flex mx-auto border-b border-primary-border/40 py-4 text-primary/80'>
            <li className='flex-2/4'>Product</li>
            <li className='md:flex-1/4 md:flex hidden'>Quantity</li>
            <li className=' min-w-32'>Total</li>
        </ul>

        {cartItems.map((item) => (
            <div key={item.id}>
                <div className='py-4 flex items-center gap-8'>
                    <div className='flex flex-2/4 items-center'>
                        <img 
                            src={item.images[0]} 
                            alt={item.title} 
                            className='w-32' 
                            loading="lazy"
                        />
                        <div>
                            <p className='font-bold text-lg'>{item.title}</p>
                            <p>Price: ${Math.round(item.price)}</p>
                        </div>
                    </div>

                    {/* BIG SCREEN */}
                    <div className='my-4 md:flex-1/4 md:flex hidden'>
                        <QuantityControl item={item} />
                    </div>

                    <div>
                        <p className='font-semibold min-w-32'>
                            LE {Math.round(item.price * item.quantity)}
                        </p>
                    </div>
                </div>

                {/* QUANTITY FOR MOBILE SCREENS */}
                <div className='my-4 flex -translate-y-3 items-center justify-center md:hidden'>
                    <QuantityControl item={item} />
                </div>
            </div>
        ))}
    </>
  )
}

export default OrderSummary