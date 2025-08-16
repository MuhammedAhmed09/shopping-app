import { useContext, useState } from 'react'
import { ProductsContext } from '../context/ProductContext';
import Filter from './Filter';

const ProductNav = () => {
    const { setSortOrder, setCategory, categories, sortedProducts } = useContext(ProductsContext);
    const [filterBtn, setFilterBtn] = useState(false);

    const handleFilterClick = () => {       
        setFilterBtn(prev => !prev);
    }
    
  return (
    <div className='flex my-10 text-center justify-between'>
        <div className='flex-4/4 hidden md:flex'>
            <div className='flex flex-2/4 gap-2'>
                <h3 className='text-primary/80'>Sort by:</h3>
                <select 
                className='text-primary/60 cursor-pointer rounded text-center justify-center outline-none'
                onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="asc">Title: A-Z</option>
                    <option value="desc">Title: Z-A</option>
                    <option value="priceLowHigh">Price: Low to High</option>
                    <option value="priceHighLow">Price: High to Low</option>
                </select>
            </div>
            <div className='flex gap-6 flex-1/4 justify-end lg:translate-x-20'>
                <h3 className='text-primary/80'>Choise:</h3>
                <select 
                className='text-primary/60 cursor-pointer rounded text-center justify-center outline-none'
                onChange={(e) => setCategory(e.target.value)}
                >
                    <option value='all'>all</option>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat.slug}>
                            {cat.slug}
                        </option>
                    ))}
                </select>
            </div>
        </div>
        <div className='flex md:hidden text-primary/80'>
            <button onClick={handleFilterClick}>Filter</button>
            {filterBtn && <Filter setFilterBtn={setFilterBtn} />}
        </div>
        <div className='text-primary/70 flex-1/4 text-end'>
            {sortedProducts.length+ [' ']}products
        </div>
    </div>
  )
}

export default ProductNav