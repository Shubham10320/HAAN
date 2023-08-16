import React from 'react'
import {useParams} from 'react-router-dom'
// import Quantity from "./Quantity"
import {useState,useEffect} from "react";
import Payment from "./Payment";
import axios from 'axios';


import styles from "../Styles/SingleProduct.module.css";

const SingleProduct = () => {
  const [ele,setEle]=useState({});
  const {id}=useParams();




  const [count, setCount] = useState(1);
  const [icon, setIcon] = useState(false);

  const getData = async () => {
    const res = await axios.get(
      `https://haanproject.onrender.com/products/${id}`
    );
    console.log(res.data);
    setEle(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  async function postData(elem) {
    const { img, name, discounted_price, price, pack, description, category } =
      elem;

    try {
      await axios.post("https://haanproject.onrender.com/cartData", {
        img,
        name,
        discounted_price,
        price,
        pack,
        description,
        category,
      });
    } catch (error) {
      console.log(error);
    }
  }



  return (
          <div className={styles.main}>
              <div >
                <img className={styles.image} src={ele.img} alt={`${ele.id}_image`} />
              </div>
              <div className={styles.elembody}>
                <h2  style={{margin:'20px'}}>{ele.name}</h2>
                <h5>{ele.category}</h5>
                <h4>₹{ele.discounted_price}</h4>
                <h4 style={{textDecoration: "line-through"}}>₹{ele.price}</h4>
                <p>{ele.description}</p>
                
                <div className={styles.buttons}>
                

                <button onClick={() => postData(ele)}>Add to Cart</button>
                <button onClick={() => <Payment elem={ele} />}>Buy Now</button>
              </div>
              </div>
              
            </div>
  )
}

export default SingleProduct


// {icon ? (
//     <button
//       onClick={() => {
//         setIcon((pre) => !pre);
//         setWishList(...wishList, ele);
//       }}
//     >
//       ❤️
//     </button>
//   ) : (
//     <button
//       onClick={() => {
//         setIcon((pre) => !pre);
//         setWishList(...wishList, ele);
//       }}
//     >
//       ♡
//     </button>
//   )}