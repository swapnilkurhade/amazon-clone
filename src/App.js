
import { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './components/Checkout';
import Login from './components/Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './ContextHere/StateProvider';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Orders';


const promise = loadStripe('pk_test_51PAWbUSIiRRQ4Mh8k7dVBQedUB3eCfvvBVuBdWhU93CseTbZ45FnilpTN1Bf11hL7xMcxmqRMifH0pVUd3RvMBEg003ZFmLfvK');


function App() {

  const [{  }, dispatch] = useStateValue()

  useEffect(()=>{
      auth.onAuthStateChanged(authUser=>{
        console.log('user is ==> ', authUser);

        if(authUser){
            dispatch({
              type: 'SET_USER',
              user: authUser
            })
        }else{
          dispatch({
              type: 'SET_USER',
              user: null
          })
        }

      })
  },[])


  return (
    // Css Classes are following BEM convention
    <Router>

      <div className="app">
        {/* <Header/> */}
        {/* {window.location.pathname !== "/login" ? <Header /> : null}{" "} */}

        <Routes>
          <Route path='/login' exact Component={Login}> </Route>
          <Route path='/' exact Component={Home}> </Route>
          <Route path='/checkout' exact Component={Checkout} ></Route>
          <Route path='/payment' exact element={<>
            <Elements stripe={promise}> 
              <Payment/>
            </Elements>
          </>} ></Route>
          <Route path='/orders' exact Component={Orders} ></Route>
          

        </Routes>

      </div>
    </Router>
  );
}

export default App;


// root : npm start
// cd functions : firebase emulators:start

// deploy after changes on react : root
// npm run build
// firebase deploy --only hosting

// deploy after changes on backend : cd functions
// firebase deploy --only functions //Not done yet



// https://amaz-clone-6c75c.web.app