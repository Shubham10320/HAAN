import React, { useState, useContext } from "react";
import "../Styles/login.css";
import { useNavigate } from "react-router";
import axios from "axios";
import { AuthContext } from "../Context/AuthContextApi";
const url = `https://haanproject.onrender.com/users`;

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ mail: "", password: "" });
  const { authState, login, setAuthState } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.mail && user.password) {
      try {
        axios.get(`${url}?q=${user.mail}`).then((response) => {
          const data = response.data;
          // console.log(user,data, user.password-data.password);
          console.log(data);
          console.log(response);
          if (data.length !== 0) {
            if (user.password == data[0].password) {
              login(data[0]);
              navigate(`/`);
            } else {
              setAuthState({
                ...authState,
                isAuth: false,
                error: "Invalid Password",
              });
            }
          } else {
            setAuthState({
              ...authState,
              isAuth: false,
              error: "User not found",
            });
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleMail = (e) => {
    const value = e.target.value;
    if (value) setUser({ ...user, mail: value });
  };

  const handlePass = (e) => {
    const value = e.target.value;
    if (value) setUser({ ...user, password: value });
  };

  return (
    <div className="login">
      <h1>Sign In</h1>
      <div>
        <span>New User?</span>
        <button
          onClick={() => {
            setAuthState({ ...authState, register: true });
          }}
        >
          Register here
        </button>
        {authState.error ? (
          <p style={{ color: "red" }}>{authState.error}</p>
        ) : (
          <></>
        )}
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email address"
            onChange={(e) => handleMail(e)}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) => handlePass(e)}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
      <div style={{ display: "flex", gap: "1rem" }}>
        <hr />
        <span>Or</span>
        <hr />
      </div>
      <div className="icons">
        <a className="fa fa-google "></a>
        <a className="fa fa-facebook"></a>
        <a className="fa fa-twitter"></a>
      </div>
    </div>
  );
};

export default Login;
