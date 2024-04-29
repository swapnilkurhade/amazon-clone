import React from 'react'
import './SubTotal.css'
import { useStateValue } from '../ContextHere/StateProvider';
import { useNavigate } from 'react-router-dom';

function SubTotal() {

  const navigate = useNavigate();

  const [ { basket }, dispatch] = useStateValue();

  const total = basket.reduce((acc, curr)=>{ return acc + curr.price;},0) || 0

  const proceedCheckout = () =>{
    navigate('/payment')
  }


  return (
    <div className='subtotal'>
      <p>Subtotal ({`${basket?.length}`} items) : <strong>{total}</strong></p>
      <small className='subtotal__gift'>
            <input type='checkbox'></input>
            This order contains gift
      </small>

      <button onClick={proceedCheckout}>Proceed to checkout</button>
    </div>
  )
}

export default SubTotal
