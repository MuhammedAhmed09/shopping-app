import { useContext } from 'react'
import { MdClose } from 'react-icons/md'
import { ProductsContext } from '../context/ProductContext'

const SearchBtn = ({ handleSearchClick }) => {
    const { search, setSearch } = useContext(ProductsContext);
  return (
    <div className='flex w-full justify-evenly gap-8'>
        <input 
            className='outline-1 w-full p-4'
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <button
            className="transition-transform duration-500 transform hover:scale-105 text-2xl cursor-pointer"    
            onClick={handleSearchClick}
        >
            <MdClose />
        </button>
    </div>
  )
}

export default SearchBtn