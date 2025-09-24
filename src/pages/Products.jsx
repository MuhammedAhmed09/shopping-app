import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context/ProductContext';
import LoaderPage from '../components/LoaderPage';
import ProductNav from '../components/ProductNav';

const Products = () => {
 const { sortedProducts, loading } = useContext(ProductsContext);
  const [filterBtn, setFilterBtn] = useState(false);

  const filterRef = useRef(null);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setFilterBtn(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFilterClick = () => {
    setFilterBtn(prev => !prev);
  }
 
  return (
    <section className='flex flex-col px-[10%] pt-[calc(14rem)]'>

      <div ref={filterRef}>
        <ProductNav 
          handleFilterClick={handleFilterClick} 
          filterBtn={filterBtn} 
          setFilterBtn={setFilterBtn} 
        />
      </div>
      
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