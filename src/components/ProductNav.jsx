import { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../context/ProductContext';
import Filter from './Filter';
import { CiSearch } from 'react-icons/ci';
import SearchBtn from './SearchBtn';

const ProductNav = () => {
    const { setSortOrder, setCategory, categories, sortedProducts } = useContext(ProductsContext);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [filterBtn, setFilterBtn] = useState(false);

    const handleFilterClick = () => {
        setFilterBtn(prev => !prev);
    }
    const handleSearchBtn = () => {
        setIsSearchOpen(prev => !prev);
    }

    const countsOfProducts = (
        <div className='flex items-center gap-4'>
            <h3>{sortedProducts.length+ [' ']}products</h3>
            <button
                className="transition-transform text-primary text-2xl font-bold cursor-pointer duration-500 transform hover:scale-105"
                onClick={handleSearchBtn}
            >
                <CiSearch />
            </button>
        </div>
    )

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
        <div className='hidden md:flex w-full'>
            <div className='flex justify-between w-full'>
                {/* SORTING */}
                <div className='flex gap-2'>
                    <h3 className='text-primary/80'>Sort by:</h3>
                    <select 
                    className='text-primary/60 cursor-pointer rounded text-center justify-center outline-none px-2'
                    onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="asc">Title: A-Z</option>
                        <option value="desc">Title: Z-A</option>
                        <option value="priceLowHigh">Price: Low to High</option>
                        <option value="priceHighLow">Price: High to Low</option>
                    </select>
                </div>

                {/* CATEGORIES && COUNTS OF PRODUCT && SEARCH*/}
                <div className='flex gap-6'>
                    <div className='flex gap-2 justify-end '>
                        <h3 className='text-primary/80'>Choise:</h3>
                        <select 
                        className='text-primary/60 cursor-pointer rounded text-center justify-center outline-none px-2'
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
                    {countsOfProducts}
                </div>
            </div>
        </div>

        {/* MOBILE SCREEN */}
        <div className='flex justify-between w-full md:hidden text-primary/80'>
            <div>
                <button onClick={handleFilterClick}>Filter</button>
                {filterBtn && <Filter setFilterBtn={setFilterBtn} />}
            </div>

            {countsOfProducts}
        </div>
        {isSearchOpen && (
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