import React from 'react'
import { useState, useEffect } from 'react';
import axois from 'axios';
import styles from './Cart.module.css';
const Cart = () => {

  const[productsData, setProductsData] = useState([]);

  const[quantity, setQuantity] = useState(1);

  const getData = async() =>{
    try{
      let res = await axois.get(`https://haanproject.onrender.com/products`);
      console.log(res.data);
      setProductsData(res.data);
    }
    catch(error){
      console.log("error while fetching data");
    }
  }

  useEffect(()=>{
    getData();
  })

  const handleInc=()=>{
    setQuantity(quantity+1);
  }
  const handleDec=()=>{
    setQuantity(quantity-1);
  }

  
  return (
    <div className={styles.mainCartDiv}>
      {productsData.map((ele)=>(
        <div className={styles.cardDiv}>
          <div className={styles.imgDiv}>
            <img style={{width:'200px', height:'200px'}} src = {ele.img} alt='product'/>
          </div>
          <div className={styles.detailsDiv}>
            <h1>{ele.name}</h1>
            <p>{ele.price}</p>
              <div className={styles.btnDiv}>
                <button onClick={handleDec} disabled={quantity===1}>-</button>
                <p>{quantity}</p>
                <button onClick={handleInc} disabled={quantity===10}>+</button>
              </div>
          </div>
        </div>
      ))}
      <div><h1>Total:{0}</h1></div>
    </div>
  )
}

export default Cart
