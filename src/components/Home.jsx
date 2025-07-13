import React from 'react'
import { Link } from 'react-router-dom'
import lunaImage from '/image/luna.png'

//IMPORT DATA CATEGORIES & PRODUCTS INSTEAD OF API
import categories from '../data/cats.json';
import products from '../data/products.json';

//IMPORT SWIPER COMPONENTS
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Home = () => {

  //MAKE BEST SELLING FUNCTION
  const bestSelling = [...products]
  .sort(( a, b ) => b.sold - a.sold)
  .slice( 0, 6 );

  return (
    <>
    {/* BANNER */}
      <div className='w-full h-[100vh] bg-hero bg-cover text-rose-600 lg:-translate-y-4 bg-center flex flex-col items-center justify-center lg:justify-end' style={{ backgroundImage: `url(${lunaImage})`}}>
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
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <img src={cat.image} alt={cat.name} width={900} className=' h-[30vh]' />
              <h3 className='font-semibold text-lg'>{cat.name}</h3>
            </SwiperSlide>
          ))}
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
          {bestSelling.map((product) => (
            <SwiperSlide key={product.id}>
              <img src={product.image} alt={product.title} width={800} className=' h-[40vh]' />
              <h2 className="text-lg font-bold">{product.title}</h2>
              <p>Price: ${product.price}</p>
              <p>Sold: {product.sold}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Home