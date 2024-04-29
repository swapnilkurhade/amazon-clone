import React, { useEffect, useState } from 'react'
import Header from '../Header'
import './Orders.css';
import { db } from '../firebase';
import { useStateValue } from '../ContextHere/StateProvider';
import Order from './Order';

function Orders() {

    const [{basket, user}, dispatch] = useStateValue();
    const [ordersData, setOrdersData] = useState([]);

    useEffect(()=>{
        if(user){
            getData()
        }else{
            setOrdersData([])
        }
    },[user])

    const getData = () =>{
        db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot=>{
            return(
                setOrdersData(snapshot.docs.map(doc=>(
                    {
                        id: doc.id,
                        data: doc.data() 
                    }
                )))
            )
        })
    }

    console.log(ordersData);

    return (
        <>
            <Header/>
            <div className='orders'>
                <h1>Your Orders</h1>
                <div className='orders__order'>
                    {
                        ordersData.map((order)=>(
                            <Order order={order}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Orders
