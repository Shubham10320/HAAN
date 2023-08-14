import React from 'react'
import styles from './Payment.module.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
const Payment = () => {

  const[orderedProduct, setOrderedProduct] = useState([]);

  const fetchData = async() => {
    try{
        let res = await axios.get(`https://haanproject.onrender.com/products`);
        console.log(res.data);
        setOrderedProduct(res.data);
    }
    catch(error){
        console.log("error while fetching data");
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);


  // Slider Function
  const orderSummary = document.querySelector(".productOrderSummary");
  
  const upScroll = () => {
      orderSummary.scrollBy(0, -200);
  }
  
  const downScroll = () => {
      orderSummary.scrollBy(0, 200);
  }
  window.upScroll = upScroll;
  window.downScroll = downScroll;


  const calculateSubtotal=()=>{
    const total = orderedProduct.reduce((total, product)=>{
        return total + product.price;   //quantity is come as a prop from cart page so instead of this write--> return total + product.price*quantity;
    },0);
    return total;
  };

  const calculateTotal=()=>{
    return calculateSubtotal()-750;
  }


  return (
    <div className={styles.paymentDiv}>
       <div className={styles.addressDiv}>
            <h1>Contact & Shipping Address</h1>
            <form className={styles.addressDetailsDiv}>
                <label>Name: </label>
                <br/>
                <input placeholder='Name' type='text' required/>
                <br/>
                <br/>
                <label>Email: </label>
                <br/>
                <input placeholder='Email' type='text' required/>
                <br/>
                <br/>
                <label>Address: </label>
                <br/>
                <input placeholder='Address' type='text' required/>
                <br/>
                <br/>
                <label>City: </label>
                <br/>
                <input placeholder='City' type='text' required/>
                <br/>
                <br/>
                <label>State: </label>
                <br/>
                <input placeholder='State' type='text' required/>
                <br/>
                <br/>
                <label>Zip code: </label>
                <br/>
                <input placeholder='Zip code' type='text' required/>
                <br/>
                <br/>
                <label>Country: </label>
                <br/>
                <input placeholder='Country' type='text' required/>
                <br/>
                <br/>
                <button>Pay Now</button>
            </form>
       </div>
       <div className={styles.productPaymentSummaryDiv}>
            <div className={`${styles.productOrderSummary} ${styles.scrollableContainer}`}>
                {/* product details */}
                {orderedProduct.map((ele)=>(
                    <div className={styles.productOrderSummaryCart} key={ele.id}>
                        <div className={styles.imgAndTitle}>
                            <img style={{width:'120px', height:'120px', borderRadius:'10px'}} src={ele.img} alt={ele.title}/>
                            <h2>{ele.name}</h2>
                        </div>
                        <p>{ele.price} Rs.</p>
                    </div>
                ))}
            </div>
            <hr style={{color:'black', width:'100%'}}/>
            <div className={styles.paymentSummaryDetailsDiv}>
                <div className={styles.subtotal}>
                    <h3>Subtotal : </h3>
                    <p>{calculateSubtotal()} Rs.</p>
                </div>
                <div className={styles.shipping}>
                    <h3>Shipping : </h3>
                    <p>+250 Rs.</p>
                </div>
                <div className={styles.discount}>
                    <h3>Discount : </h3>
                    <p>-1000 Rs.</p>
                </div>
                <div className={styles.total}>
                    <h3>Total : </h3>
                    <p>{calculateTotal()} Rs.</p>
                </div>

            </div>
       </div>
    </div>
  )
}

export default Payment
