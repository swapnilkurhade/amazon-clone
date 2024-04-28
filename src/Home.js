import React from 'react'
import './Home.css'
import Product from './Product'
import Header from './Header'

function Home() {
  return (
    <>
    
    <Header/>
    <div className='home' >
        <div className='home__container'>
            <img className='home__image' src='https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg' alt='banner' />

            <div className='home__row'>
                <Product 
                    id={111}
                    title={'Title Here'}
                    price={29.99}
                    image={'https://images-eu.ssl-images-amazon.com/images/G/31/prime/May24/ACQ/T1/GW/MayART24_GW_PC_CC-2._SY304_CB559659548_.jpg'}
                    rating={4}
                />
                <Product/>
            </div>

            <div className='home__row'>
                <Product/>
                <Product/>
                <Product/>
            </div>

            <div className='home__row'>
                <Product/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home
