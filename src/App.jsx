import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import CategoriesProvider from './context/ProductContext'

//NAVBARS
import FirstNav from './topNav/FirstNav'
import MainNav from './topNav/MainNav'

//COMPONENTS
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'

//PAGES
import Account from './pages/Account';
import Cart from './pages/Cart';
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import CollectionBrand from './pages/CollectionBrand'
import CartProvider from './context/CartPageContext'
import ToastProvider from './context/TaosterContext'

//OTHER COMPONENTS
import { Toaster } from 'react-hot-toast';
import NotFound from './pages/NotFound'

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
        <Route path='profile' element={<Account />} />
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
