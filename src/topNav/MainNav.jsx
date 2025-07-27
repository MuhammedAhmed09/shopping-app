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
    };
      
    const [isVisible, setIsVisible] = React.useState(true);
    
    React.useEffect(() => {
        const handleScroll = () => {
            // إذا نزلت تحت 100 بكسل، نخفيه
            if (window.scrollY > 100) {
            setIsVisible(false);
            } else {
            setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
  return (
    <nav 
        className={`
            py-18 fixed left-0 w-full bg-white z-50 px-[10%] border-b border-rose-200 flex justify-between items-center transition-all ease-in-out
            ${isVisible ? 'top-[3rem]' : 'top-0'} 
        `} 
    >
        <div className='flex justify-between w-3/5 flex-row-reverse lg:justify-start lg:w-10/12 lg:flex-row items-center'>
            
            <Link to='/' className='font-bold text-3xl text-rose-600 -translate-x-3 lg:translate-x-0'>LUNA</Link>
            
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

            <button onClick={toggleMenu} className='lg:hidden text-3xl text-gray-700 focus:outline-none transition-transform duration-500 transform hover:scale-105' aria-label='Toggle menu'>
                <LiaBarsSolid />
            </button>
        </div>

        <div className='text-3xl flex justify-end gap-6 w-1/3'>
            <Link to={'profile'} aria-label='Profile'  className="transition-transform duration-500 transform hover:scale-105"><i><CiUser /></i></Link>
            <Link to={'cart'} aria-label='Cart'  className="transition-transform duration-500 transform hover:scale-105"><i><CiShoppingCart /></i></Link>
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