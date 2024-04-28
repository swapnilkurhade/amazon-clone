import React from 'react'
import './Checkout.css'
import SubTotal from './SubTotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../ContextHere/StateProvider'
import Header from '../Header'

function Checkout() {

  const [{basket, user}, dispatch] = useStateValue();

  return (
    <>
    <Header/>
    <div className='checkout'>
      <div className='checkout__left'>
        <img 
            className='checkout__ad'
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/Budget/Unrec/GW/BS_2X_PC_1._CB580097921_.jpg"
            alt='cart_banner'
            // src='https://m.media-amazon.com/images/I/41yhwaUVEGL._AC_SY200_.jpg'
            />
        
        <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className='checkout__title'>Your Shopping Basket</h2>

            {
              basket?.map((x)=>(
                
                <CheckoutProduct
                  id={x.id}
                  title={x.title}
                  price={x.price}
                  image={x.image}
                  rating={x.rating}
                  />
                  
                ))
            }

            

        </div>

        

      </div>
      <div className='checkout__right'>
        <SubTotal/>
      </div>
    </div>
  </>
  )
}

export default Checkout
