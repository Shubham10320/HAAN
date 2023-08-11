import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Cart.module.css';
import gstImg from '../Media/gst.png';

const Cart = () => {
  const [productsData, setProductsData] = useState([]);

  const [quantity, setQuantity] = useState(1);
  
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const getData = async () => {
    try {
      let res = await axios.get(`https://haanproject.onrender.com/products`);
      console.log(res.data);
      setProductsData(res.data);
    } catch (error) {
      console.log("error while fetching data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleInc = () => {
    handleQuantityChange(quantity + 1);
  };

  const handleDec = () => {
    handleQuantityChange(quantity - 1);
  };

  const calculateTotal = () => {
    const totalPrice = productsData.reduce((total, product) => {
      return total + product.price * quantity;
    }, 0);
    return totalPrice;
  };

  // Sliding Function
  const orderSummary = document.querySelector(".cardDiv");

  const upScroll = () => {
      orderSummary.scrollBy(0, -200);
  }

  const downScroll = () => {
      orderSummary.scrollBy(0, 200);
  }

  window.upScroll = upScroll;
  window.downScroll = downScroll;

  const openNav = () => {
    setIsOverlayOpen(true);
  };

  const closeNav = () => {
    setIsOverlayOpen(false);
  };

  return (
    <div>
      {/* Button to open the overlay */}
      <span className={styles.openBtn} onClick={openNav}>Cart &#9776;</span>

      {/* Overlay */}
      {isOverlayOpen && (
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
          <button className={styles.closeBtn} style={{fontSize:'larger'}} onClick={closeNav}>&times;</button>

          {/* here is cart div */}
            <div className={styles.wholeCart}>
              <div className={styles.initialCart}>
                <img className={styles.image} src={gstImg} alt="gst"/>
              </div>
              <div className={`${styles.mainCartDiv} ${styles.scrollableContainer}`}>
                {productsData.map((ele) => (
                  <div className={styles.cardDiv} key={ele.id}>
                    <div className={styles.imgDiv}>
                      <img style={{ width: '120px', height: '120px' }} src={ele.img} alt='product' />
                    </div>
                    <div className={styles.detailsDiv}>
                      <h3>{ele.name}</h3>
                      <p>{ele.price} Rs. </p>
                      <div className={styles.btnDiv}>
                        <button onClick={handleDec} disabled={quantity === 1} style={{fontSize:'larger'}}>-</button>
                        <p>{quantity}</p>
                        <button onClick={handleInc} disabled={quantity === 10} style={{fontSize:'larger'}}>+</button>
                      </div>
                      <div><hr className={styles.hrLine}/></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.checkoutDiv}>
                <h2>Total : {calculateTotal()} Rs.</h2>
                <button>Checkout</button>
              </div>
            </div>

           </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
