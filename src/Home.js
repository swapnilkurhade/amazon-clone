import React from 'react'
import './Home.css'
import Product from './Product'
import Header from './Header'

function Home() {


    const productOne = [
        {
            id : 111,
            title : 'boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4',
            price : 1248,
            image : 'https://m.media-amazon.com/images/I/61KNJav3S9L._AC_UL320_.jpg',
            rating : 5
        },
        {
            id : 222,
            title : 'Michael Kors Digital Black Dial Womens Watch-MKT5133',
            price : 7878,
            image : 'https://m.media-amazon.com/images/I/519R+JBfeyL._AC_UL320_.jpg',
            rating : 4,
        }
    ]

    const productTwo = [
        {
            id : 444,
            title : 'HP Laptop 15s, 12th Gen Intel Core i3, 15.6-inch (39.6 cm), 8GB DDR4, 512GB SSD, Thin & Light, Dual Speakers (Win 11, MSO)',
            price : 978,
            image : 'https://m.media-amazon.com/images/I/71f2lQ3ESWL._AC_UL320_.jpg',
            rating : 3
        },
        {
            id : 555,
            title : 'Samsung Galaxy M14 5G (Smoky Teal,6GB,128GB)|50MP Triple Cam|Segments Only 6000 mAh 5G SP|5nm Processor|2 Gen. OS Upgrade & 4 Year Security Update|12GB RAM with RAM Plus|Android 13|Without Charger',
            price : 741,
            image : 'https://m.media-amazon.com/images/I/818VqDSKpCL._SX679_.jpg',
            rating : 3,
        },
        {
            id : 555,
            title : 'Dr Trust Signature Series Finger Tip Pulse Oximeter With Audio Visual Alarm (Midnight Black)- 201',
            price : 1299,
            image : 'https://m.media-amazon.com/images/I/71Q3b861IEL._SX679_.jpg',
            rating : 4,
        }
    ]

    const productThree = [
        {
            id : 666,
            title : 'Acer 80 cm (32 inches) G Series HD Ready Smart LED Google TV AR32GT2841HDFL (Black)',
            price : 870,
            image : 'https://m.media-amazon.com/images/I/81itmPrWpeL._SX569_.jpg',
            rating : 3,
        }
        
    ]

  return (
    <>
    
    <Header/>
    <div className='home' >
        <div className='home__container'>
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/pcacc/mayart/3000._CB558026224_.jpg' alt='banner' />

            <div className='home__row'>

                {
                    productOne.map((x)=>(
                        <Product 
                            id={x.id}
                            title={x.title}
                            price={x.price}
                            image={x.image}
                            rating={x.rating}
                        />
                    ))
                }
                
            </div>

            <div className='home__row'>
                {
                    productTwo.map((x)=>(
                        <Product 
                            id={x.id}
                            title={x.title}
                            price={x.price}
                            image={x.image}
                            rating={x.rating}
                        />
                    ))
                }
            </div>

            <div className='home__row'>
                {
                    productThree.map((x)=>(
                        <Product 
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
    </div>
    </>
  )
}

export default Home
