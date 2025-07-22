import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import lunaImage from '/image/luna.png'

//IMPORT DATA CATEGORIES & PRODUCTS INSTEAD OF API
import { ProductsContext } from '../context/ProductContext';

//IMPORT SWIPER COMPONENTS
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios';

// IMAGES FOR CATEGORIES
const categoryImages = {
  smartphones: "https://cdn.dummyjson.com/product-images/1/1.jpg",
  laptops: "https://cdn.dummyjson.com/product-images/6/1.png",
  fragrances: "https://cdn.dummyjson.com/product-images/11/1.jpg",
  skincare: "https://cdn.dummyjson.com/product-images/16/1.png",
  groceries: "https://cdn.dummyjson.com/product-images/21/1.png",
  'home-decoration': "https://cdn.dummyjson.com/product-images/26/1.jpg",
  furniture: "https://cdn.dummyjson.com/product-images/30/1.jpg",
  tops: "https://cdn.dummyjson.com/product-images/36/1.jpg",
  'womens-dresses': "https://cdn.dummyjson.com/product-images/38/1.jpg",
  'womens-shoes': "https://cdn.dummyjson.com/product-images/44/1.jpg",
  'mens-shirts': "https://cdn.dummyjson.com/product-images/50/1.jpg",
  'mens-shoes': "https://cdn.dummyjson.com/product-images/57/1.jpg",
  'mens-watches': "https://cdn.dummyjson.com/product-images/61/1.jpg",
  'womens-watches': "https://cdn.dummyjson.com/product-images/66/1.jpg",
  'womens-bags': "https://cdn.dummyjson.com/product-images/71/1.jpg",
  'womens-jewellery': "https://cdn.dummyjson.com/product-images/76/1.jpg",
  sunglasses: "https://cdn.dummyjson.com/product-images/81/1.jpg",
  automotive: "https://cdn.dummyjson.com/product-images/86/1.jpg",
  motorcycle: "https://cdn.dummyjson.com/product-images/91/1.jpg",
  lighting: "https://cdn.dummyjson.com/product-images/96/1.jpg",
};

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
            <p>Loading...</p>
          ) : (
            categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <Link to={`/collections/${cat.slug}`}>
                <div
                  className='h-[30vh] w-full bg-cover bg-center rounded-xl flex text-center items-center justify-center text-white text-xl font-bold hover:scale-105 transition'
                  style={{  backgroundImage: `url(${categoryImages[cat.slug] || 'https://via.placeholder.com/300x200?text=No+Image'})` }}
                >
                  <div className='bg-black/50 px-4 py-2 rounded'>
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