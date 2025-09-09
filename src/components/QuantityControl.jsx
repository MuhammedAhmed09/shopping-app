import React, { useContext } from 'react'
import { CartContext } from '../context/CartPageContext';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { ToastContext } from '../context/TaosterContext';

const QuantityControl = ({ item }) => {
    const { decreaseQuantity, updateQuantity, increaseQuantity, removeItem } = useContext(CartContext);
    const { deleteFromCartToast } = useContext(ToastContext);

  return (
    <div className='flex items-center gap-4'>
        <div className='flex border h-12 w-fit my-2 overflow-hidden'>
            <button 
                className='w-12 h-full flex items-center justify-center disabled:text-black/40 cursor-pointer disabled:cursor-default'
                onClick={() => decreaseQuantity(item.id)}
            >
                <FaMinus />
            </button>
            <input 
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => {updateQuantity(item.id, parseInt(e.target.value))}}
                className='text-center w-16 h-full outline-none appearance-none'
            />
            <button
                className='w-12 h-full flex items-center justify-center cursor-pointer'
                onClick={() => increaseQuantity(item.id)}
            >
                <FaPlus />
            </button>
        </div>
        <div>
            <p 
                className='text-3xl text-primary/50 cursor-pointer'
                onClick={ 
                    () => {
                        removeItem(item.id),
                        deleteFromCartToast()
                    }
                } 
            >
                <MdOutlineDeleteOutline />
            </p>
        </div>
    </div>
  )
}

export default QuantityControl