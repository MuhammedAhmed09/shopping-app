import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const getProductById = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      console.log(res.data);
      setProduct(res.data);

    } catch (error) {
      console.error('Some thing wrong at product details', error.message);
    } finally {
        setLoading(false);
    } 
  }

  useEffect(() => {
    getProductById();
  }, [id]);

  const handleDecreaseClick = () => {
    setQuantity(quantity - 1)
  }

  const handleIncreaseClick = () => {
    setQuantity(quantity + 1)
  }
  

  return (
    <div>
      {loading ? (
        <p className='text-center'>Loading...</p>
      ) : (
        product && (
          <div key={product.id} className='my-8 p-2 lg:px-10 md:px-8 sm:px-4 flex flex-col md:flex-row'>

            <div className='w-full flex '>
              <img 
                alt={product.title}
                src={product.images[0]}
                loading="lazy"
                className='w-fit h-2/4 bg-cover'
              />
            </div>

            <div className=' flex-2/3'>
              <p className='text-black/50 text-sm'>LUNA</p>
              <h1 className='text-5xl my-4'>{product.title}</h1>
              <div className='flex items-center gap-10 my-4'>

                <h3 className='text-xl text-black/80'>LE {product.price} USA</h3>
                {product.stock < 1 && <p className='rounded-3xl bg-red-600 text-white font-semibold py-1 px-3'>'Sold out'</p>}
              
              </div>
              {/* QUANTITY BTN */}
              <div className='my-4'>
                <p className='text-black/80'>Quantity</p>
                <div className='border w-40 h-14 my-2 flex flex-row overflow-hidden '>

                  <button className='w-2/3 justify-items-center disabled:text-black/40' onClick={handleDecreaseClick} disabled={quantity <= 1}><FaMinus /></button>
                  <input 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => setQuantity(e.target.value)}
                    className='text-center items-center w-full'
                  />
                  <button className='w-2/3 justify-items-center' onClick={handleIncreaseClick}><FaPlus /></button>

                </div>

              </div>
              <p className='text-black/50 font-semibold mt-8 text-xl'>{product.description}</p>
            </div>
          </div>

        )
      )}
    </div>
  )
}

export default ProductDetails