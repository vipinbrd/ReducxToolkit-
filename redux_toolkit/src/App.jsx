
import './App.css'
import { NavBar } from './components/Navbar'
import { Cart } from './components/Cart'
import { useSelector } from 'react-redux'

function App() {
  const showCart=useSelector((state)=>state.ui.isCartShow)


  return (
    <>
  <NavBar/>
  {showCart&&
  <Cart/>}
    </>
  )
}

export default App
