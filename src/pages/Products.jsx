import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context/ProductContext';
import LoaderPage from '../components/LoaderPage';
import ProductNav from '../components/ProductNav';

const Products = () => {
 const { sortedProducts, loading } = useContext(ProductsContext);
 
  return (
    <section className='flex flex-col px-[10%] pt-[calc(14rem)]'>
      <ProductNav />
      <section>
        {loading ? (
          <p className='text-center'><LoaderPage /></p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {sortedProducts.map((product) => (
              <Link
               key={product.id}
               className='border border-primary-border/40 p-2 rounded hover:shadow-2xl transition shadow'
               to={`/product/${product.id}`}
              >
                <img
                 src={product.images[0]}
                 alt={product.title}
                 className='h-[40vh] w-full object-cover rounded mb-2 transition-transform duration-800 hover:scale-105' 
                 loading="lazy"
                />
                <h2 className="text-lg font-bold">{product.title}</h2>
                <p>Price: ${Math.round(product.price)}</p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </section>
  )
}

export default Products