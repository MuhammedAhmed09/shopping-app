import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const CollectionBrand = () => {
    const { categoryName } = useParams();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const fetchProductsByCategory = async () => {
        try {
            const res = await axios.get(`https://dummyjson.com/products/category/${categoryName}`);
            setProducts(res.data.products);
            console.log(res.data.products);

        } catch(error) {
            console.error('Some thing wrong at collection products', error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProductsByCategory();
    }, [categoryName]);
    
  return (
    <section className='flex flex-col px-[10%] pt-[calc(14rem)]'>
        <nav className='my-10'>
            <h3 className='text-2xl font-semibold'>Availability & Price Sort (Coming Soon)</h3>
        </nav>

        <section>
        {loading ? (
            <p className='text-center'>Loading...</p>
        ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {products.map((product) => (
                <Link
                    key={product.id}
                    className='border border-rose-100 p-2 rounded hover:shadow-lg transition shadow'
                    to={`/product/${product.id}`}
                > 
                    <img src={product.thumbnail} alt={product.title} className='h-[40vh] w-full object-cover rounded mb-2' />
                    <h2 className="text-lg font-bold">{product.title}</h2>
                    <p>Price: ${product.price}</p>
                </Link>
            ))}
            </div>
        )}
        </section>
    </section>
  )
}

export default CollectionBrand