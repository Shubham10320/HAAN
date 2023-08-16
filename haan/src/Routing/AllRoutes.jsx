import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home';
import Authentication from '../Pages/Authentication'
import SignUp from '../Component/SignUp';
import Product from '../Component/Product';
import SingleProduct from '../Component/SingleProduct';
import Wishlist from '../Component/Wishlist';

const AllRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Authentication />}></Route>
          {/* <Route path='/register' element={<SignUp />}></Route> */}
          <Route path='/product' element={<Product />}></Route>
          <Route path='/product/:id' element={<SingleProduct />}></Route>
          {/* <Route path='/wishlist' element={<Wishlist />}></Route> */}
          
      </Routes>
  )
}

export default AllRoutes;