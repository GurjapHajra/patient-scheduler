import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState(null);

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const logUser = async (event) => {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let loginSuccess = false;

    async function fetchData() {
      try {
        const response = await fetch('https://tyraoeguv8.execute-api.us-east-1.amazonaws.com/items');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        data.forEach(item => {
          if (item.id === username && item.password === password) {
            loginSuccess = true;
          }
        });
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }

    await fetchData();

    if (loginSuccess) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");  // Store login state in localStorage
      navigate("/dashboard"); 
    } else {
      document.getElementById("message").innerHTML = "Invalid Username or Password";
    }
  };

  return (
    <>
      <div className="backgroundImg">
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="user-box">
              <input id="username" type="text" name="" required="" />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input id="password" type="password" name="" required="" />
              <label htmlFor="password">Password</label>
            </div>
            <div className="user-box-2" style={{}}>
              <label id="message"></label>
            </div>
            <button onClick={logUser} className="button" style={{ backgroundColor: "#373130" }}>
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
