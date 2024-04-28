import React from 'react'
import './SubTotal.css'
import { useStateValue } from '../ContextHere/StateProvider';

function SubTotal() {

  const [ { basket }, dispatch] = useStateValue();

  const total = basket.reduce((acc, curr)=>{ return acc + curr.price;},0) || 0


  return (
    <div className='subtotal'>
      <p>Subtotal ({`${basket?.length}`} items) : <strong>{total}</strong></p>
      <small className='subtotal__gift'>
            <input type='checkbox'></input>
            This order contains gift
      </small>

      <button>Proceed to checkout</button>
    </div>
  )
}

export default SubTotal
