import { useContext } from 'react';
import OrderSummary from '../components/OrderSummary'
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import UserInfo from '../components/UserInfo';
import { CartContext } from '../context/CartPageContext';

const Checkout = () => {
    const { user } = useContext( UserContext );
    const { cartItems } = useContext(CartContext);

  return (
    <div className="mx-auto min-h-screen px-4 py-10 flex flex-col-reverse gap-8 lg:flex-row">
        <div className="bg-gray-50 rounded-2xl shadow p-6 w-full">
            <div className='flex justify-between items-center'>                
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <Link
                to='/products'
                className='hover:border-b border-primary-border text-lg font-semibold'
                >
                    Continue shopping
                </Link>
            </div>
            {cartItems?.length > 0 ? (
                <OrderSummary />
            ) : (
                <div className='flex flex-col place-items-center gap-8 justify-center text-center my-20'>
                    <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl md:font-semibold lg:text-5xl'>Your cart is empty</h1>
                    <Link to='/products' className=' bg-primary text-white font-semibold text-lg px-10 py-5 hover:scale-105 duration-300'>Continue shopping</Link>
                </div>
            )}
        </div>
        <div className="bg-gray-50 rounded-2xl shadow p-6 w-full">
            <div className='flex justify-between items-center'>
                <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
                {!user && <Link to='/signin' className='text-primary/90 hover:scale-105 duration-300 hover:border-b w-fit text-sm'>log-In</Link>}
            </div>
            <form className="flex flex-col gap-4">                
                {!user ? <input type="email" placeholder="Email" className="border-b py-2 outline-0" /> : <UserInfo />}
                <input type="text" placeholder="Full Name" className="border rounded-lg p-3" />
                <input type="text" placeholder="Address" className="border rounded-lg p-3" />
                <input type="text" placeholder="City" className="border rounded-lg p-3" />
                <input type="text" placeholder="Phone Number" className="border rounded-lg p-3" />
                
                <h2 className="text-xl font-bold mt-6 mb-2">Payment Method</h2>
                <select className="border rounded-lg p-3 cursor-pointer">
                    <option>Cash on Delivery</option>
                    <option>Credit Card</option>
                </select>
            </form>
        </div>
    </div>
)
}

export default Checkout