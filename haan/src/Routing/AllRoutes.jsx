import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home';
import Authentication from '../Pages/Authentication'
import SignUp from '../Component/SignUp';
import Product from '../Component/Product';
import SingleProduct from '../Component/SingleProduct';

import Cart from '../Component/Cart';
import Payment from '../Component/Payment';

const AllRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Authentication />}></Route>
          
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/product/:id' element={<SingleProduct />}></Route>
          

          

      </Routes>
  )
}

export default AllRoutes;