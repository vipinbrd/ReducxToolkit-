
import './App.css'
import { NavBar } from './components/Navbar'
import { Cart } from './components/Cart'
import { useSelector } from 'react-redux'
import { Product } from './components/Product'

function App() {
  const showCart=useSelector((state)=>state.ui.isCartShow)


  return (
    <>
  <NavBar/>
  {showCart&&
  <Cart/>}
  <Product/>
    </>
  )
}

export default App
