import TopBar from "./TopBar";
import DashBoard from "./DashBoard";
// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useState,useEffect } from "react";
export default function Home(){

        // const [user, setUser] = useState(null);

        // // useEffect(() => {
        // //   const params = new URLSearchParams(window.location.search);
        // //   const userParam = params.get("user");
      
        // //   if (userParam) {
        // //     try {
        // //       const userObj = JSON.parse(decodeURIComponent(userParam));
        // //       setUser(userObj);
        // //       localStorage.setItem("user", JSON.stringify(userObj)); // Optional: Store for later
        // //     } catch (e) {
        // //       console.error("Failed to parse user from URL:", e);
        // //     }
        // //   }
        // // }, []);
      
        // useEffect(() => {
        //         const params = new URLSearchParams(window.location.search);
        //         const userParam = params.get("user");
        //       console.log(userParam)
        //         if (userParam && userParam !== "undefined") {
        //           try {
        //             const userObj = JSON.parse(decodeURIComponent(userParam));
        //             console.log(userObj);
        //             setUser(userObj);
        //             localStorage.setItem("user", JSON.stringify(userObj));
        //           } catch (e) {
        //             console.error("Failed to parse user from URL:", e);
        //           }
        //         } else {
        //           console.warn("No valid user param found in URL");
        //         }
        //       }, []);
        // if (!user) return <p>Loading or redirecting...</p>;
        // const navigate = useNavigate();
        // const [cookies, removeCookie] = useCookies([]);
        // const [username, setUsername] = useState("");
        // const [loading, setLoading] = useState(true);
        // useEffect(() => {
        //   const verifyCookie = async () => {
        //     if (!cookies.token) {
        //       navigate("/");
        //       return;
        //     }
        //     const { data } = await axios.post(
        //       "http://localhost:3002",
        //       {},
        //       { withCredentials: true }
        //     );
        //     const { status, user } = data;
        //     setUsername(user);
        //     return status
        //       ? toast(`Hello ${user}`, {
        //           position: "top-right",
        //         })
        //       : (removeCookie("token"), navigate("/"));
        //   };
        //   verifyCookie();
        // }, [cookies, navigate, removeCookie]);
        // // if (loading) return <p>Loading...</p>;
        // const Logout = () => {
        //   removeCookie("token");
        //   navigate("/signup");
        // };
        const navigate = useNavigate();
        const [cookies, removeCookie] = useCookies([]);
        const [username, setUsername] = useState("");
        useEffect(() => {
          const verifyCookie = async () => {
            if (!cookies.token) {
              navigate("/login");
            }
            const { data } = await axios.post(
              "http://localhost:3002",
              {},
              { withCredentials: true }
            );
            const { status, user } = data;
            setUsername(user);
            return status
              ? toast(`Hello ${user}`, {
                  position: "top-right",
                })
              : (removeCookie("token"), navigate("/login"));
          };
          verifyCookie();
        }, [cookies, navigate, removeCookie]);
        const Logout = () => {
          removeCookie("token");
          navigate("/signup");
        };
        return(<>
                <TopBar />
                <DashBoard username={username}/>

        </>)
}