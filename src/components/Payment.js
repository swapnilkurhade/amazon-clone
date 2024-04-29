import React, { useEffect, useState } from 'react'
import Header from '../Header'
import './Payment.css'
import { useStateValue } from '../ContextHere/StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import axios from 'axios';
import instance from '../axios';
import { db } from '../firebase';

function Payment() {

    const navigate = useNavigate()

    const [{basket, user}, dispatch] = useStateValue();

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState('')
    const [clientSecrete, setClientSecrete] = useState(true)

    const stripe = useStripe();
    const elements = useElements();

    const total = basket.reduce((acc, curr)=>{ return acc + curr.price;},0) || 0

    // console.log(user);
    useEffect(()=>{
        getClientSecrete()
    },[basket])

    const getClientSecrete = async() =>{

        const response = await instance({
            method : 'post',
            url : `/payments/create?total=${total * 100}`
        })

        setClientSecrete(response?.data?.clientSecret)
    }

    console.log(clientSecrete);

    const handleChange = (e) =>{
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "")
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecrete,{
            payment_method : {
                card : elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) =>{

            console.log(paymentIntent);
            // console.log({
            //     basket: basket,
            //     amount: paymentIntent?.amount || 0,
            //     // created: paymentIntent?.created
            // });

            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent?.id)
            .set({
                basket: basket,
                amount: paymentIntent?.amount || total,
                created: paymentIntent?.created || new Date()
            });

            

            setSucceeded(true)
            setError(null)
            setProcessing(false)
            dispatch({ type : 'EMPTY_BASKET'})
            navigate('/orders')
        })
    }

    return (
    <>
        <Header/>
        <div className='payment'>
            <div className='payment__container'>
                
                <h1>
                    Checkout 
                    { <Link to={'/checkout'} > {basket?.length} items</Link> }
                </h1>

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123, React Lane</p>
                        <p>Los angelies, CA</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {
                            basket.map((x)=>(
                                <CheckoutProduct
                                    id={x.id}
                                    title={x.title}
                                    image={x.image}
                                    price={x.price}
                                    rating={x.rating}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        {/* Stripe Payment */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment__priceContainer'>
                                <h3>Order Total : {total}</h3>
                            </div>
                            <button className='payment__buynowBtn' disabled={processing || disabled || succeeded} >
                                <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                            </button>
                        </form>

                        { error && <div>{error}</div> }

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Payment
