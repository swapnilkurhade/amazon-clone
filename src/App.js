
import { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './components/Checkout';
import Login from './components/Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './ContextHere/StateProvider';


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
        </Routes>

      </div>
    </Router>
  );
}

export default App;
