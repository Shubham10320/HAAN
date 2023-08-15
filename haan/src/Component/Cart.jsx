import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Cart.module.css';
import gstImg from '../Media/gst.png';

const Cart = () => {
  const [productsData, setProductsData] = useState([]);
  const [quantities, setQuantities] = useState({}); // State to manage individual quantities
  const [isOverlayOpen, setIsOverlayOpen] = useState(true); 

  const getData = async () => {
    try {
      let res = await axios.get(`https://haanproject.onrender.com/cartData`);
      console.log(res.data);
      setProductsData(res.data);
      const initialQuantities = {};
      res.data.forEach(product => {
        initialQuantities[product.id] = 1; // Initialize quantities for each product
      });
      setQuantities(initialQuantities);
    } catch (error) {
      console.log("error while fetching data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantities(prevQuantities => ({
        ...prevQuantities,
        [productId]: newQuantity
      }));
    }
  };

  const handleInc = (productId) => {
    handleQuantityChange(productId, quantities[productId] + 1);
  };

  const handleDec = (productId) => {
    handleQuantityChange(productId, quantities[productId] - 1);
  };

  const calculateTotal = () => {
    const totalPrice = productsData.reduce((total, product) => {
      return total + product.price * quantities[product.id];
    }, 0);
    return totalPrice;
  };

  const handleDelete = async (productId) => {
    if (quantities[productId] <= 1) {
      await axios.delete(`https://haanproject.onrender.com/cartData/${productId}`);
      getData();
    }
  };

    const closeNav = () => {
    setIsOverlayOpen(false);
  };

  return (
    <div>
      { /* ... (existing code) ... */ }
      
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
                        <button onClick={() => handleDec(ele.id)} style={{fontSize:'larger'}}>-</button>
                        <p>{quantities[ele.id]}</p>
                        <button onClick={() => handleInc(ele.id)} disabled={quantities[ele.id] === 10} style={{fontSize:'larger'}}>+</button>
                        <button onClick={() => handleDelete(ele.id)}>Delete</button>
                      </div>
                     
                        {/* <button onClick={() => handleDelete(ele.id)}>Delete</button> */}
                        <hr className={styles.hrLine}/>
                     
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

