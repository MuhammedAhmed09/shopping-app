import './App.css';
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Outlet, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

//CONTEXT
import CategoriesProvider from './context/ProductContext';
import CartProvider from './context/CartPageContext';
import ToastProvider from './context/TaosterContext';

//NAVBARS
import FirstNav from './topNav/FirstNav';
import MainNav from './topNav/MainNav';

//COMPONENTS
import CollectionBrand from './components/CollectionBrand';

//PAGES
import About from './pages/About';
import Cart from './pages/Cart';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';


//OTHER COMPONENTS
import { Toaster } from 'react-hot-toast';
import SignIn from './authentication/SignIn';
import SignUp from './authentication/SignUp';
import ForgotPass from './authentication/ForgotPass';

const Layout = () => {
  return (
    <>
      <FirstNav/>
      <MainNav/>
      <Outlet/>
    </>
  )
};

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='cart' element={<Cart />} />
          <Route path='products' element={<Products />} />
          <Route path='product/:id' element={<ProductDetails />} />
          <Route path='collections/:categoryName' element={<CollectionBrand />} />
        </Route>
        <Route path='signin' element={<SignIn />} />
        <Route path='forgotpassword' element={<ForgotPass />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )

  return (
    <CartProvider>
      <CategoriesProvider>
        <ToastProvider>
          <Toaster position="top-right" reverseOrder={false} />
          <RouterProvider router={router} />
        </ToastProvider>
      </CategoriesProvider>
    </CartProvider>
  )
}

export default App
