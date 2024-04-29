import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../ContextHere/StateProvider'

function CheckoutProduct({id, image, title, price, rating = 0, removeBtn=true}) {
    
    const [{ basket }, dispatch] = useStateValue();

    const removeFrombasket = () =>{
        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id : id
        })
    }
  
    return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} alt='product' />

        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct__rating'>
                {
                    [...Array(rating)].map((_,i)=>(
                        <p key={i}>*</p>
                    ))
                }
            </div>
            {
                removeBtn && <button onClick={removeFrombasket}>Remove from Basket</button>
            }
        </div>

    </div>
  )
}

export default CheckoutProduct
