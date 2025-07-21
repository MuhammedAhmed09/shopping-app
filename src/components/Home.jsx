import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import lunaImage from '/image/luna.png'

//IMPORT DATA CATEGORIES & PRODUCTS INSTEAD OF API
import { ProductsContext } from '../context/ProductContext';

//IMPORT SWIPER COMPONENTS
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios';


const Home = () => {
  const { products, loadingInProducts } = useContext(ProductsContext);
  const [categories, setCategories] = useState([]);
  const [loadingOnCategories, setLoadingOnCategories] = useState([]);
  
  // MAKE BEST SELLING FUNCTION
  const bestSelling = [...products]
  .sort(( a, b ) => a.stock - b.stock)
  .slice( 0, 6 );

  const getWomenCategories = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products/categories');
      console.log(res.data);
      setCategories(res.data);
    } catch (error) {
      console.error('Error fetching categories:', error.message);      
    } finally {
      setLoadingOnCategories(false);
    }
  };
  
  useEffect(() => {
    getWomenCategories();
  }, []);

  return (
    <>
    {/* BANNER */}
      <div className='w-full h-[100vh] bg-hero bg-cover text-rose-600 bg-center flex flex-col items-center justify-center lg:justify-end' style={{ backgroundImage: `url(${lunaImage})`}}>
        <h2 className='text-3xl lg:-translate-y-20'>Browse the Collection</h2>
        <Link to='/products' className='border border-white p-4 mt-6 lg:-translate-y-20 hover:font-bold box-border'>Show all</Link>
      </div> 

    {/* CATEGORIES */}
      <div className='my-8 lg:px-10 md:px-8 sm:px-4'>
        <Swiper 
          spaceBetween={3}
          breakpoints={{
            0: {
              slidesPerView: 2
            },
            640: {
              slidesPerView: 3
            },
            1024: {
              slidesPerView: 6
            },
            2048: {
              slidesPerView: 8
            }
          }}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: false }}
          navigation
        >
          {loadingOnCategories ? (
            <p>Loading...</p>
          ) : (
            categories.map((cat) => (
            <SwiperSlide key={cat.slug}>
              {/* <img src={cat.images[2]} alt={cat.name} width={900} className=' h-[30vh]' /> */}
              <h3 className='font-semibold text-lg text-center'>{cat.name}</h3>
            </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>

      {/* BEST SELLING */}
      <div className='my-4 lg:px-10 md:px-8 sm:px-4'>
      <h2 className='my-8 text-4xl font-bold'>Best Selling</h2>
        <Swiper 
          spaceBetween={3}
          breakpoints={{
            0: {
              slidesPerView: 2
            },
            640: {
              slidesPerView: 3
            },
            1024: {
              slidesPerView: 5
            },
            2048: {
              slidesPerView: 8
            }
          }}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: false }}
          navigation
        >
          {loadingInProducts ? (
            <p>Loading...</p>
          ) : (
            bestSelling.map((cat) => (
              <SwiperSlide key={cat.id} className='text-center'>
                <Link
                 to={`/product/${cat.id}`}
                 
                 >
                  <img src={cat.images[0]} alt={cat.title} width={800} className=' h-[40vh]' />
                  <h2 className="text-lg font-bold">{cat.title}</h2>
                  <p>Price: ${cat.price}</p>
                  <p className='text-red-600 absolute z-9 top-0 font-bold'> {cat.stock > 0 ? '' : 'Sold Out'}</p>
                </Link>
              </SwiperSlide>
            )) 
          )}
          
        </Swiper>
      </div>
    </>
  )
}

export default Home 