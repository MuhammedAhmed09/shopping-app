import { Route, Routes } from 'react-router-dom'
import './App.css'

//NAVBARS
import FirstNav from './topNav/FirstNav'
import MainNav from './topNav/MainNav'

//COMPONENTS
import Home from './components/Home'
import Products from './components/Products'
import About from './components/About'
import ContactUs from './components/ContactUs'

//PAGES
import Account from './pages/Account';
import Cart from './pages/Cart';

function App() {

  return (
    <>
      <FirstNav/>
      <MainNav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='about' element={<About />} />
        <Route path='contact-us' element={<ContactUs />} />
        <Route path='profile' element={<Account />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
