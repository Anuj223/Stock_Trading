import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Signup.css"

import "react-toastify/dist/ReactToastify.css";

export default function Signup() 
        {
                const navigate = useNavigate();
                const [inputValue, setInputValue] = useState({
                  email: "",
                  password: "",
                  username: "",
                });
                const { email, password, username } = inputValue;
                const handleOnChange = (e) => {
                  const { name, value } = e.target;
                  setInputValue({
                    ...inputValue,
                    [name]: value,
                  });
                };
              
                const handleError = (err) =>
                  toast.error(err, {
                    position: "bottom-left",
                  });
                const handleSuccess = (msg) =>
                  toast.success(msg, {
                    position: "bottom-right",
                  });
              
                const handleSubmit = async (e) => {
                  e.preventDefault();
                  try {
                    const { data } = await axios.post(
                      "http://localhost:3002/signup",
                      {
                        ...inputValue,
                      },
                      { withCredentials: true }
                    );
                    const { success, message,user } = data;
                    if (success) {
                      handleSuccess(message);
                      // localStorage.setItem("user", JSON.stringify(user));

                      setTimeout(() => {
                        navigate("/");
                        // navigate("localhost:5174/");
                        // const userParam = encodeURIComponent(JSON.stringify(user));
                        // window.location.href = `http://localhost:5174/?user=${userParam}`;
          // window.location.href = "http://localhost:5174";
                      }, 1000);
                    } else {
                      handleError(message);
                    }
                  } catch (error) {
                    console.log(error);
                  }
                  setInputValue({
                    ...inputValue,
                    email: "",
                    password: "",
                    username: "",
                  });
                };
              
                return (
                  <div className="form_container">
                    <h2>Signup Account</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="inputs">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={email}
                          placeholder="Enter your email"
                          onChange={handleOnChange}
                        />
                      </div>
                      <div className="inputs">
                        <label htmlFor="email">Username</label>
                        <input
                          type="text"
                          name="username"
                          value={username}
                          placeholder="Enter your username"
                          onChange={handleOnChange}
                        />
                      </div>
                      <div className="inputs">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          name="password"
                          value={password}
                          placeholder="Enter your password"
                          onChange={handleOnChange}
                        />
                      </div>
                      <button className="submit" type="submit">Submit</button>
                      <span>
                        Already have an account? <Link to={"/login"}>Login</Link>

                      </span>
                    </form>
                    <ToastContainer />
                  </div>
                );
              };