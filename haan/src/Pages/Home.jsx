import React from "react";
import NavBar from "../Component/NavBar";
import homeStyle from "../Styles/Home.module.css";
const Home = () => {
  return (
    <div>
      <NavBar />

      <section>
        <div className={homeStyle.circle}></div>
        <div className={homeStyle.content}>
          <div className={homeStyle.textBox}>
            <h2>Buy Once, Use For Life</h2>
            <p>
              Our aim is to inspire people to adopt sustainable practices and
              make conscious choices for a greener future. You're now one step
              further to forget the excessive use of plastic and join a
              conscious and sustainable lifestyle.
            </p>
            <a href="#">All Refills Up To 50%</a>
          </div>
        </div>
      </section>

      <div className={homeStyle.msg}>
        <p>
          <strong>
            Lift Up your Journeys: Natural essentials for your daily adventures
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Home;
