
import './App.css'
import { NavBar } from './components/Navbar'
import { Cart } from './components/Cart'
import { useSelector } from 'react-redux'
import { Product } from './components/Product'
import { Notification } from './components/Notification'


function App() {
  const showCart=useSelector((state)=>state.ui.isCartShow)
  const notification=useSelector((state)=>state.ui.notification)


  return (
    <>
    {notification&&
    <Notification message={notification}/>}
  <NavBar/>
  {showCart&&
  <Cart/>}
  <Product/>
    </>
  )
}

export default App
