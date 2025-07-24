import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CartContext } from '../context/CartPageContext';

const ProductDetails = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useContext(CartContext)

  const getProductById = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(res.data);

    } catch (error) {
      console.error('Some thing wrong at product details', error.message);
    } finally {
        setLoading(false);
    } 
  }

  useEffect(() => {
    getProductById();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleDecreaseClick = () => {
    setQuantity(quantity - 1)
  }

  const handleIncreaseClick = () => {
    setQuantity(Number(quantity) + 1)
  }
  

  return (
    <div>
      {loading ? (
        <p className='text-center'>Loading...</p>
      ) : (
        product && (
          <div key={product.id} className='max-w-7xl mx-auto flex flex-col md:flex-row gap-10 bg-white rounded-2xl shadow-lg p-6'>

            <div className="md:w-1/2 w-full rounded-xl overflow-hidden">
              <Swiper
                slidesPerView={1}
              >
                {product.images.map((img, index) => (
                  <SwiperSlide className='w-fit bg-cover' key={index}>
                    <img 
                      alt={product.title}
                      src={img}
                      loading="lazy"
                      className="w-full h-[400px] object-cover rounded-xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className='w-full'>
              <p className='text-black/50 text-sm'>LUNA</p>
              <h1 className='text-5xl my-4'>{product.title}</h1>
              <div className='flex items-center gap-10 my-4'>

                <h3 className='text-xl text-black/80'>LE {product.price} USA</h3>
                {product.stock < 1 && <p className='rounded-3xl bg-red-600 text-white font-semibold py-1 px-3'>Sold out</p>}
              
              </div>
              {/* QUANTITY BTN */}
              <div className='my-4'>
                <p className='text-black/80'>Quantity</p>
                <div className='border w-40 h-14 my-2 flex flex-row overflow-hidden '>
                  <button className='w-2/3 justify-items-center disabled:text-black/40 disabled:cursor-default cursor-pointer' onClick={handleDecreaseClick} disabled={quantity <= 1}><FaMinus /></button>
                  <input 
                    type="number" 
                    min="1"
                    value={quantity} 
                    onChange={(e) => setQuantity(e.target.value)}
                    className='text-center items-center w-full'
                  />
                  <button className='w-2/3 justify-items-center cursor-pointer' onClick={handleIncreaseClick}><FaPlus /></button>
                </div>
              </div>
              <div className='felx flex-col lg:flex-row'>
                <div>
                  {product.stock < 1 ? (
                    <button disabled className='disabled:text-black/40 disabled:cursor-default items-center justify-center border min-w-40 w-full max-w-96 h-14 my-2 flex flex-row overflow-hidden '>
                      Sold Out
                    </button>
                  ) : (
                  <button
                    onClick={() => addToCart({ ...product, quantity })}
                    className='items-center justify-center border min-w-40 w-full max-w-96 h-14 my-2 flex flex-row overflow-hidden cursor-pointer'
                  >
                    Add to cart
                  </button>
                )}
                </div>
                <div>
                  {product.stock >= 1 && (<button className='items-center justify-center border min-w-40 w-full max-w-96 h-14 my-2 flex flex-row overflow-hidden cursor-pointer'>But it now</button>)}
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