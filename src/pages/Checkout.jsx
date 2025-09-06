import { useContext } from 'react';
import OrderSummary from '../components/OrderSummary'
import { UserContext } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

const Checkout = () => {
    const { user } = useContext( UserContext );

  return (    
    user ? 
    (<div className="mx-auto px-4 py-10 grid gap-8">
        <div className="bg-gray-50 rounded-2xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
            <form className="flex flex-col gap-4">
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
        <div className="bg-gray-50 rounded-2xl shadow p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <OrderSummary />
        </div>
    </div>
    ) : (
        <Navigate to='/signin' />
    )
)
}

export default Checkout