import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/cart'

function App() {

  return (
   <>
   <Routes>
    <Route index element={<Home />} />
    <Route path='/cart' element={<Cart />} />
   </Routes>
   </>
  )
}

export default App
