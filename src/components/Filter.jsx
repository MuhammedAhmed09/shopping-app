import React, { useEffect, useRef } from 'react'
import { ProductsContext } from '../context/ProductContext'
import { IoClose } from "react-icons/io5";

const Filter = ({ setFilterBtn }) => {
  const { sortedProducts, setSortOrder, setCategory, categories } = React.useContext(ProductsContext);
  const filterRef = useRef(null);

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setFilterBtn(false);
    }
  };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setFilterBtn]);

  return (
    <div className="fixed inset-0 z-99 bg-black/50 flex justify-center items-center ">
      <div className="bg-white w-[80%] max-w-sm shadow-lg p-6 h-screen absolute right-0 top-0" ref={filterRef}>
        <div className='flex justify-between p-4 border-b mb-6 border-primary/50'>
          <div>
            <h3 className='font-bold text-xl'>Sort and Categories</h3>
            <h4 className='font-semibold text-primary/60'>{sortedProducts.length+ [' ']}products</h4>
          </div>
          <button 
            onClick={() => setFilterBtn(false)} 
            className='text-3xl duration-500 hover:scale-105 cursor-pointer'
          >
            <IoClose />
          </button>
        </div>
        <div className='flex flex-col px-4 gap-8'>
          <div className='flex justify-between'>
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
          <div className='flex justify-between'>
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
      </div>
    </div>
  )
}

export default Filter