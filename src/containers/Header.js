import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



const Header = () => {

  const cart = useSelector((state) => state.cart)


  return (
    <div className='ui fixed menu'>
      <div className='ui container center'>
        <Link to="/">
          <h2 className='apparelShop'>apparelShop</h2>
        </Link>
        <Link to="/signup">
          <h2 className='Signup'>SIGNUP</h2>
        </Link>
      </div>
      <div className='cart'>
        <Link to="/cart">
          <h2><i class="shopping cart icon">{cart.length}</i></h2>
        </Link>
      </div>
    </div>
  )
}

export default Header
