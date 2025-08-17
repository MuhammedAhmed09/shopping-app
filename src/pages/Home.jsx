import { useContext } from 'react'
import { Link } from 'react-router-dom'
import lunaImage from '/image/luna.png'

//IMPORT DATA CATEGORIES & PRODUCTS INSTEAD OF API
import { ProductsContext } from '../context/ProductContext';

//IMPORT SWIPER COMPONENTS
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import LoaderPage from '../components/LoaderPage';


const Home = () => {
  const { loading, categories } = useContext(ProductsContext);


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
          {loading ? (
            <LoaderPage />
          ) : (
            categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <Link to={`/collections/${cat.slug}`}>
                <div
                  className='h-[30vh] bg-black/50 w-full bg-cover bg-center rounded-xl flex text-center items-center justify-center text-white text-xl font-bold hover:scale-105 transition'                  
                >
                  <div className=' px-4 py-2 rounded w-full'>
                    {cat.name}
                  </div>
                </div>
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