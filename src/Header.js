import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from './ContextHere/StateProvider';
import { auth } from './firebase';

function Header() {

  const navigate = useNavigate();
  const [ { basket, user }, dispatch] = useStateValue();

  const handleAuth = () =>{
    if(user){
      navigate('/login')
      auth.signOut()
    }
  }

  return (
    <div className='header'>
        {/* Image */}
        {/* <img src='https://www.amazon.in/ref=nav_logo'/> */}
        <Link to={'/'}>
          <div className='header__logo'>
            <h2>amazon</h2>
          </div>
        </Link>

        <div className='header__search'>
            <input className='header__searchInput' type='text' placeholder='Search Something...'></input>
            <SearchIcon className="header__searchIcon"/>
        </div>

        <div className='header__nav'>
            <Link to={!user && '/login'}>
              <div onClick={handleAuth} className='header__option'>
                <span className='option__lineOne'>Hello {user ? user?.email : 'Guest'}</span>
                  <span className='option__lineTwo'>{user ? 'Sign Out' : 'Sign In'} </span>
              </div>
            </Link>
            <Link to='/orders'>
            <div className='header__option'>
                <span className='option__lineOne'>My</span>
                <span className='option__lineTwo'>Orders</span>
            </div>
            </Link>
          <div className='header__option'>
            <span className='option__lineOne'>Your</span>
            <span className='option__lineTwo'>Prime</span>
          </div>
        </div>

        <Link to={'/checkout'}>
          <div className='header__optionBasket'>
              <ShoppingBasketIcon/>
              <span className='option__lineTwo header__basketCount' >{basket?.length}</span>
          </div>
        </Link>
      

    </div>
  )
}

export default Header
