import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

//ICONS
import { CiShoppingCart, CiUser } from 'react-icons/ci';
import { LiaBarsSolid } from 'react-icons/lia';

const MainNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        {id: 0, path: '/', page: 'Home'},
        {id: 1, path: '/products', page: 'Products'},
        {id: 2, path: '/about', page: 'About Us'},
        {id: 3, path: '/contact-us', page: 'Contact Us'}
    ];

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    }
    console.log(isOpen);
    
    

  return (
    <nav className='py-20 px-[10%] flex items-center justify-between relative'>
        <div className='flex justify-between w-7/12 flex-row-reverse lg:justify-start lg:w-10/12 lg:flex-row items-center'>
            
            <Link to='/' className='font-bold text-3xl text-rose-600'>LUNA</Link>
            
            <ul className={'hidden lg:flex justify-around w-2xl'}>
                {navItems.map((item) => (
                    <li key={item.id}>
                        <Link
                            to={item.path}
                            className={`transition-all duration-200 text-lg ${
                                item.path == location.pathname 
                                ?'border-b-2 border-rose-600 text-rose-600 font-semibold'
                                :'text-gray-600 hover:text-gray-900 hover:border-b border-rose-400'
                            }`}
                        >
                            {item.page}
                        </Link>
                    </li>
                ))}
            </ul>

            <button onClick={toggleMenu} className='lg:hidden text-3xl text-gray-700 focus:outline-none' aria-label='Toggle menu'>
                <LiaBarsSolid />
            </button>
        </div>

        <div className='text-3xl flex justify-between w-1/12'>
            <Link to={'profile'} aria-label='Profile'><i><CiUser /></i></Link>
            <Link to={'cart'} aria-label='Cart'><i><CiShoppingCart /></i></Link>
        </div>

        {/* MOBILE menu */}
        {isOpen && (
            <ul className='absolute top-full left-0  w-full bg-rose-600 text-white flex flex-col items-center gap-6 py-6 lg:hidden z-99'>
                {navItems.map((item) => (
                    <li key={item.id} >
                        <Link
                            to={item.path}
                            className={`text-lg ${
                                item.path === location.pathname ? 'font-bold underline' : ''
                            }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.page}
                        </Link>
                    </li>
                ))}
            </ul>
        )}
    </nav>
  )
}

export default MainNav