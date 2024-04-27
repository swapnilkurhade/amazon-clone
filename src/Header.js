import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
        {/* Image */}
        {/* <img src='https://www.amazon.in/ref=nav_logo'/> */}
        <div className='header__logo'>
          <h2>amazon</h2>
        </div>

        <div className='header__search'>
            <input className='header__searchInput' type='text' placeholder='Search Something...'></input>
            <SearchIcon className="header__searchIcon"/>
        </div>

        <div className='header__nav'>
          <div className='header__option'>
            <span className='option__lineOne'>Hello Guest</span>
            <span className='option__lineTwo'>Sign In</span>
          </div>
          <div className='header__option'>
            <span className='option__lineOne'>Returns</span>
            <span className='option__lineTwo'>Orders</span>
          </div>
          <div className='header__option'>
            <span className='option__lineOne'>Your</span>
            <span className='option__lineTwo'>Prime</span>
          </div>
        </div>

        <div className='header__optionBasket'>
            <ShoppingBasketIcon/>
            <span className='option__lineTwo header__basketCount' >0</span>
        </div>
      

    </div>
  )
}

export default Header
