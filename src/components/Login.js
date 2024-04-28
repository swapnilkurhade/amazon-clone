import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { auth } from '../firebase'

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signinFn = (e) =>{
    e.preventDefault();
    // Firebase....

    auth.signInWithEmailAndPassword(email, password).then(auth=>{
      navigate('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }

  const register = (e) =>{
    e.preventDefault();
    // Firebase...

    auth.createUserWithEmailAndPassword(
      email, password
    ).then((auth)=>{
      if(auth){
        navigate('/')
      }

    }).catch((error)=>{
      alert(error.message)
    })




  }

  return (
    <div className='login'>
      <Link to="/">
        <div className='login__logo'>
          <h2>amazon</h2>
        </div>
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input type='text' value={email} onChange={(e)=>{setEmail(e.target.value)}} />

          <h5>Password</h5>
          <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

          <button type='submit' className='login__signInButton' onClick={signinFn}>Sign In</button>
        </form>

        <p>
          By signing in you agree to the amazon clone conditions of use & sale. Please see our privacy notice, our
          cookies notice and our interest based ads Notice.
        </p>
        <button className='login__registerButton' onClick={register}>Create your amazon account</button>
      </div>
    </div>
  )
}

export default Login
