import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';

//IMPORT SWIPER COMPONENTS
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const BestSelling = () => {
    const { sortedProducts, loading } = useContext(ProductsContext)

    const bestSelling = [...sortedProducts]
    .sort(( a, b ) => a.stock - b.stock)
    .slice( 0, 6 );

  return (
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
            {loading ? (
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
  )
}

export default BestSelling