import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context/ProductContext';

const Products = () => {
 const { products, loadingInProducts } = useContext(ProductsContext);
  return (
    <section className='flex flex-col px-[10%] pt-[calc(14rem)]'>
      <nav className='my-10'>
        <h3 className='text-2xl font-semibold'>Availability & Price Sort (Coming Soon)</h3>
      </nav>

      <section>
        {loadingInProducts ? (
          <p className='text-center'>Loading...</p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {products.map((product) => (
              <Link
               key={product.id}
               className='border border-rose-100 p-2 rounded hover:shadow-lg transition shadow'
               to={`/product/${product.id}`}
               > 
                <img src={product.images[0]} alt={product.title} className='h-[40vh] w-full object-cover rounded mb-2' />
                <h2 className="text-lg font-bold">{product.title}</h2>
                <p>Price: ${product.price}</p>
                <p>In Stock: {product.stock}</p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </section>
  )
}

export default Products