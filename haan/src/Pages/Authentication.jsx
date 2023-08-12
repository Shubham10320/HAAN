import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextApi'
import Login from '../Component/Login';
import '.././App.css'
import logo from '../Media/Be.png'

const Authentication = () => {
    const context = useContext(AuthContext);
    console.log(context);
  return (
    <div className='auth'>
      <div>
        <img src={logo} alt="" height="50"/>
        <span style={{color:"white", fontSize:"2.5rem", marginLeft:"1rem"}}>Behance</span>
      </div>
      <Login/>
    </div>
  )
}

export default Authentication