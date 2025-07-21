import { Route, Routes } from 'react-router-dom'
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

function App() {

  return (
    <CategoriesProvider>
      <FirstNav/>
      <MainNav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='profile' element={<Account />} />
        <Route path='cart' element={<Cart />} />
        <Route path='products' element={<Products />} />
        <Route path='product/:id' element={<ProductDetails />} />
      </Routes>
    </CategoriesProvider>
  )
}

export default App
