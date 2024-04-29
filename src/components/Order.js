import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'

function Order({ order }) {
    console.log(order)
  return (
    <div className='order'>
      <h2>Order</h2>
      <p>{moment.unix(order?.data?.created).format('MMMM Do , h:mma')}</p>
      <p className='order__id'>
        <small>{order.id}</small>
      </p>
        {
            order.data.basket.map((x)=>(
                <CheckoutProduct
                    id={x.id}
                    title={x.title}
                    image={x.image}
                    price={x.price}
                    rating={x.rating}
                    removeBtn={false}
                />
            ))
        }

        <h3 className='order__total'>Order Total : {order.data.amount}</h3>

    </div>
  )
}

export default Order
