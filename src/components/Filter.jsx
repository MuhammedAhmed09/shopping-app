import React from 'react'
import { ProductsContext } from '../context/ProductContext'
import { IoClose } from "react-icons/io5";

const Filter = ({ setFilterBtn }) => {
  const { sortedProducts, setSortOrder, setCategory, categories } = React.useContext(ProductsContext);

  return (
    <div className='fixed flex flex-col gap-8 z-99 bg-white sm:w-[70%] w-[80%] h-screen top-0 right-0'>
      <div className='border-primary/10 border-b flex justify-between p-4'>
        <div>
          <h3 className='font-bold text-xl'>Sort and Categories</h3>
          <h4 className='font-semibold text-primary/60'>{sortedProducts.length+ [' ']}products</h4>
        </div>
        <button 
          onClick={() => setFilterBtn(false)} 
          className='text-3xl duration-500 hover:scale-105'
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
  )
}

export default Filter