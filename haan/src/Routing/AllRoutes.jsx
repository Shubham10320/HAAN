import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home';
import Authentication from '../Pages/Authentication'
import SignUp from '../Component/SignUp';

const AllRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Authentication />}></Route>
          <Route path='/register' element={<SignUp />}></Route>
      </Routes>
  )
}

export default AllRoutes