import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product' >
        <div className='product__info'>
            <p>The Lean startupp</p>
            <p className='product__price'>
                <small>$</small>
                <strong>10.99</strong>
            </p>
            <div className='product__rating'>
                <p>*</p>
                <p>*</p>
                <p>*</p>
            </div>
        </div>
        
        <img 
            src='https://images-eu.ssl-images-amazon.com/images/G/31/prime/May24/ACQ/T1/GW/MayART24_GW_PC_CC-2._SY304_CB559659548_.jpg'
            alt='product-img'
        />

        <button>Add to Basket</button>

    </div>
  )
}

export default Product
