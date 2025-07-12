import React from 'react'
import { Link, useLocation } from 'react-router-dom';

//ICONS
import { CiShoppingCart, CiUser } from 'react-icons/ci';



const MainNav = () => {
    const navItems = [
        {id: 0, path: '/', page: 'Home'},
        {id: 1, path: '/products', page: 'Products'},
        {id: 2, path: '/about', page: 'About Us'},
        {id: 3, path: '/contact-us', page: 'Contact Us'}
    ];

    const location = useLocation();

  return (
    <nav className='p-20 border-b border-gray-200 flex items-center justify-between'>
        <div className='flex items-center '>
            <Link to={'/'}><h2 className='font-bold text-3xl'>LUNA</h2></Link>
            
            <ul className='flex justify-around w-2xl'>
                {navItems.map((item) => (
                    <li key={item.id} className={`${item.path == location.pathname ? 'border-b hover:border-b-2 border-rose-400 font-semibold': 'text-gray-600 hover:text-gray-950 hover:border-b border-rose-400'}, text-lg`}>
                        <Link to={item.path}>
                            <h4>{item.page}</h4>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

        <ul className='flex justify-around w-1/12'>
            <Link to={'profile'} className='text-3xl hover:text-4xl duration-600 transition-transform'><i><CiUser /></i></Link>
            <Link to={'cart'} className='text-3xl  duration-300'><i><CiShoppingCart /></i></Link>
        </ul>
    </nav>
  )
}

export default MainNav