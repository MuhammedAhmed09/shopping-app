import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import LoaderPage from '../components/LoaderPage';
import ProductNav from '../components/ProductNav';
import { ProductsContext } from '../context/ProductContext';

const CollectionBrand = () => {
    const { categoryName } = useParams();
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const { getProductsByCategory } = useContext(ProductsContext)

    useEffect(() => {
        const fetchByCategory = async () => {
            const data = await getProductsByCategory(categoryName);
            setProducts(data);
            setLoading(false);
        }

        fetchByCategory()
    }, [categoryName, getProductsByCategory]);
    
  return (
    <section className='flex flex-col px-[10%] my-8 pt-[calc(14rem)]'>
        <section>
        {loading ? (
            <p className='text-center'><LoaderPage /></p>
        ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {products.map((product) => (
                <Link
                    key={product.id}
                    className='border border-primary-border/30 p-2 rounded hover:shadow-lg transition shadow'
                    to={`/product/${product.id}`}
                > 
                    <img 
                        src={product.thumbnail} 
                        alt={product.title} 
                        className='h-[40vh] w-full object-cover rounded mb-2 hover:scale-105 duration-300' 
                    />
                    <h2 className="text-lg font-bold">{product.title}</h2>
                    <p>Price: LE {Math.round(product.price)}</p>
                </Link>
            ))}
            </div>
        )}
        </section>
    </section>
  )
}

export default CollectionBrand