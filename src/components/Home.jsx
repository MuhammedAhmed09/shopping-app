import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import lunaImage from '/image/luna.png'

//IMPORT DATA CATEGORIES & PRODUCTS INSTEAD OF API
import { ProductsContext } from '../context/ProductContext';

//IMPORT SWIPER COMPONENTS
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios';
import LoaderPage from '../pages/LoaderPage';


const Home = () => {
  const { products, loadingInProducts } = useContext(ProductsContext);
  const [categories, setCategories] = useState([]);
  const [loadingOnCategories, setLoadingOnCategories] = useState(true);
  
  // MAKE BEST SELLING FUNCTION
  const bestSelling = [...products]
  .sort(( a, b ) => a.stock - b.stock)
  .slice( 0, 6 );

  const getWomenCategories = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products/categories');
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
    <div className='pt-[calc(14rem)]'>
    {/* BANNER */}
      <div className='w-full h-[100vh] bg-hero bg-cover text-primary bg-center flex flex-col items-center justify-center lg:justify-end' style={{ backgroundImage: `url(${lunaImage})`}}>
        <h2 className='text-3xl lg:-translate-y-20'>Browse the Collection</h2>
        <Link to='/products' className='border transition-transform duration-500 transform hover:scale-105 border-primary-border p-4 mt-6 lg:-translate-y-20 box-border'>Show all</Link>
      </div> 

    {/* CATEGORIES */}
      <div className='my-8 lg:px-10 md:px-8 sm:px-4'>
        <Swiper 
          spaceBetween={10}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 6 },
            2048: { slidesPerView: 8 }
          }}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: false }}
          navigation
        >
          {loadingOnCategories ? (
            <p><LoaderPage /></p>
          ) : (
            categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <Link to={`/collections/${cat.slug}`}>
                <div
                  className='h-[30vh] bg-black/50 w-full bg-cover bg-center rounded-xl flex text-center items-center justify-center text-white text-xl font-bold hover:scale-105 transition'                  
                >
                  <div className=' px-4 py-2 rounded w-full'>
                    {cat.name.replace(/-/g, ' ')}
                  </div>
                </div>
              </Link>
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
                  <img src={cat.images[0]} alt={cat.title} width={800} className='h-[40vh] duration-500 hover:scale-105' />
                  <h2 className="text-lg font-bold">{cat.title}</h2>
                  <p>Price: LE {Math.round(cat.price)}</p>
                  <p className='text-primary absolute z-9 top-0 font-bold'> {cat.stock > 0 ? '' : 'Sold Out'}</p>
                </Link>
              </SwiperSlide>
            )) 
          )}
          
        </Swiper>
      </div>
    </div>
  )
}

export default Home 