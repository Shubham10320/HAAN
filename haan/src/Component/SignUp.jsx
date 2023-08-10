import React from 'react';
import '../Styles/login.css'
import { useNavigate } from 'react-router';


const SignUp = () => {
    const navigate = useNavigate();
  return (
      <div className='sign-up'>
          <h1>Sign Up</h1>
          <div>
              <span>Already Registered?</span>
              <button onClick={()=>{navigate(-1)}}>Login here</button>
          </div>
          <form action="">
              
              <input type="text" placeholder='Enter Your Name' />

              <input type="email" placeholder='Enter Your Email Address' />

              <input type="text" placeholder='Create Password' />

              <input type="password" placeholder='Confirm Password' />

              <input type="submit" value="Submit" />
          </form>
    </div>
  )
}

export default SignUp