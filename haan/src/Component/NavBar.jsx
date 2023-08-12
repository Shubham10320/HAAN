import navStyle from '../Styles/NavBar.module.css'
import homeStyle from '../Styles/Home.module.css'
import { Link } from 'react-router-dom';
function NavBar() {


   
    
  return (
    <div>

      <div  id={navStyle.slider}>
        <figure>
          <div>Free shipping over 35 ₹</div>
          <div>Subscribe to our Newsletter</div>
          <div>Get Amazing Discounts!</div>
          <div>Get The Special Deals</div>
        </figure>
      </div>


      <header>
        <div className={navStyle.account}>
          {/* <a href="#"> <span class="material-symbols-outlined">person </span> </a> */}
          <Link to={'/login'} ><span className="material-symbols-outlined">person</span></Link>
        </div>

        <div className={navStyle.logo}>
          {/* <h1> <a className={navStyle.header_logo}>HAAN</a> </h1> &nbsp; */}
          <Link to={'/'} > <h1 className={navStyle.header_logo}>HAAN</h1> </Link>&nbsp;
          <span className="material-symbols-outlined" style={{ color: "teal", fontSize: "2.5rem" }}>temp_preferences_eco</span>
        </div>


        <nav className={navStyle.nav}  id="shubhMenu">
          <ion-icon name="close" className={navStyle.header_close} style={{display:"none"}} id="close-menu"></ion-icon>
          <ul className={navStyle.nav_list}>
            <li className={navStyle.nav_item}> <a href="#" className={navStyle.nav_link}>Shop</a> </li>
            <li className={navStyle.nav_item}> <a href="#" className={navStyle.nav_link}> Collection </a></li>
            <li className={navStyle.nav_item}> <a href="#" className={navStyle.nav_link}> About Us </a></li>
            <li className={navStyle.nav_item}> <a href="" className={navStyle.nav_link}> Sobremesa Talks </a></li>
            <li className={navStyle.nav_item}><a href="" className={navStyle.nav_link}> Refill Station </a></li>

            <h1 className={navStyle.nav_item}>
                <a href="" className={navStyle.nav_link}> <ion-icon name="search"></ion-icon> </a>
            </h1>

            <h1 className={`${navStyle.nav_item}${navStyle.heart}`}>
              <a href="" className={navStyle.nav_link}> <ion-icon name="heart"></ion-icon> </a>
            </h1>


            <h1 className={navStyle.nav_item}>
              <a className={navStyle.nav_link}> <ion-icon name="cart" onclick="showhaanCart()"></ion-icon> </a>
            </h1>

          </ul>
        </nav>

        <ion-icon name="menu" className={navStyle.header_toggle} style={{display:"none"}} id="toggle-menu"></ion-icon>
      </header>

      
   










    </div>
  );
}
export default NavBar;
