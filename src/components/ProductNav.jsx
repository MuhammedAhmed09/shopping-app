import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/ProductContext';
import Filter from './Filter';
import { CiSearch } from 'react-icons/ci';
import SearchBtn from './SearchBtn';

const ProductNav = () => {
    const { setSortOrder, setCategory, categories, sortedProducts } = useContext(ProductsContext);
    const [filterBtn, setFilterBtn] = useState(false);
    const [search, setSearch] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const handleFilterClick = () => {       
        setFilterBtn(prev => !prev);
    }

    const handleSearchBtn = () => {
        setSearch(prev => !prev);
    }

    useEffect(() => {
            const handleScroll = () => {
                // إذا نزلت تحت 50 بكسل، نخفيه
                if (window.scrollY > 50) {
                setIsVisible(false);
                } else {
                setIsVisible(true);
                }
            };
    
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);
    
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
        <div className='text-primary/70 translate-x-24 flex-1/4 flex text-center items-center gap-4'>
            <h3>{sortedProducts.length+ [' ']}products</h3>
            <button
                className="transition-transform text-primary text-2xl font-bold cursor-pointer duration-500 transform hover:scale-105"
                onClick={handleSearchBtn}
            >
                <CiSearch />
            </button>
        </div>

        {search && (
            <div 
                className={`
                    py-18 fixed left-0 w-full bg-white z-50 px-[10%] border-b border-primary-border/40 flex justify-between items-center transition-all ease-in-out
                    ${isVisible ? 'top-[3rem]' : 'top-0'} 
                `} 
            >
                <SearchBtn handleSearchClick={handleSearchBtn}/>
            </div>
        )}
    </div>
  )
}

export default ProductNav