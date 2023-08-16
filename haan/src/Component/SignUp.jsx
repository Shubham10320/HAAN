import React, { useState, useContext } from "react";
import "../Styles/login.css";
import { useNavigate } from "react-router";
import axios from "axios";
import { AuthContext } from "../Context/AuthContextApi";
const url = `https://haanproject.onrender.com/users`;

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", password: "", email: "" });
  const [error, setError] = useState("");
  const { authState, setAuthState } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.email && user.password && user.name) {
      try {
        axios.get(`${url}?email=${user.email}`).then((response) => {
          const data = response.data;
          if (data.length === 0) {
            axios
              .post(url, { ...user })
              .then((res) => {
                console.log(res);
                setError("User Registered Successfully");
                // navigate(`/login`);
                setAuthState({ ...authState, register: false });
              })
              .catch((error) => {
                console.error("Error sending data:", error);
              });
          } else {
            setError("User Already Registered");
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleMail = (e) => {
    const value = e.target.value;
    if (value) setUser({ ...user, email: value });
  };

  const handlePass = (e) => {
    const value = e.target.value;
    if (value) setUser({ ...user, password: value });
  };

  const handleName = (e) => {
    const value = e.target.value;
    if (value) setUser({ ...user, name: value });
  };

  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <div>
        <span>Already Registered?</span>
        <button
          onClick={() => {
            setAuthState({ ...authState, register: false });
          }}
        >
          Login here
        </button>
        {/* <Link to={} */}
        {error ? <p>{error}</p> : <></>}
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => handleName(e)}
        />

        <input
          type="email"
          placeholder="Enter Your Email Address"
          onChange={(e) => handleMail(e)}
        />

        <input type="text" placeholder="Create Password" />

        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => handlePass(e)}
        />

        <input type="submit" value="Submit" />
      </form>
      <div style={{ display: "flex", gap: "1rem" }}>
        <hr />
        <span>Or</span>
        <hr />
      </div>
      <div className="icons">
        <a className="fa fa-google " href="#"></a>
        <a className="fa fa-facebook" href="#"></a>
        <a className="fa fa-twitter" href="#"></a>
      </div>
    </div>
  );
};

export default SignUp;
