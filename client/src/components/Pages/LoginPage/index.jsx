import React from 'react'
import SignUpAndLoginImg from '../../../assets/7b0015a09a1402daee30760778e406eb.gif'
import './Login.scss'
import { Link } from 'react-router-dom';
const LoginPage = () => {

  return (
   <>
  <section className='SignUp'>
  <img src={SignUpAndLoginImg} alt="" />
    <div className='SignUpContainer'>
     <div className='SignUpTitle'>
      <h2 style={{fontSize:'48px'}}>Log in to Exclusive</h2>
      <p style={{fontSize:'24px',marginTop:'20px'}}>Enter your details below</p>
      <form>
        
        <input type="text" placeholder='Email or Phone Number'/>
        <input type="password" placeholder='Password'/>
        <div className='LoginButtons'>
        <button className='CreateAccount'>Log in</button>
        <a href="#">Forget Password?</a>
        </div>
        
        

      </form>
      <p className='LoginText'>Don't have account? <Link to={"/signup"}>Sign Up</Link></p>
     </div>
    </div>
  </section>
  <script src="https://apis.google.com/js/platform.js" async defer></script>
   </>
  )
}

export default LoginPage