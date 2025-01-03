import React from 'react'
import "../Styles/navbar.css"
import {useNavigate} from 'react-router-dom'
function Navbar() {
  const nevigate = useNavigate()
  return (
    <div className='navbar'>
      <div>Shopping Cart</div>
      <div className='links'>
        <div onClick={()=>{nevigate("/")}}>Home Page</div>
        <div onClick={()=>{nevigate("/cart")}}>Cart Page</div>
        </div>
    </div>
  )
}

export default Navbar