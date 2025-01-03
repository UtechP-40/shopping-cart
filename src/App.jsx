import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Cart from './Components/Cart'
import { Route,Routes } from 'react-router-dom'
function App() {
  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </div>
        
  )
}

export default App
