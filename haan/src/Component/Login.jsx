import React from 'react'
import '../Styles/login.css';
import { useNavigate } from 'react-router';

const Login = () => {

    const navigate = useNavigate();

  return (
      <div className='login'>
          <h1>Sign In</h1>
          <div>
              <span>New User?</span> 
              <button onClick={() => { navigate(`/register`) }}>Register here</button>
          </div>
          <form >
              <div>
                <label htmlFor="">Email</label>
                <input type='email' placeholder='Enter Your Email address' />
              </div>
              <div>
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter Your Password' />
              </div>
            <input type="submit" value="Submit" />
          </form>
    </div>
  )
}

export default Login