import { useNavigate ,Route,Routes } from "react-router-dom";
import Summary from "./Summary";
import Watchlist from "./Watchlist";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Position from "./Position";
import Funds from "./Funds";
import Apps from "./Apps";

import "./DashBoard.css"
import { GeneralContextProvider } from "./GeneralContext";
import { useState,useEffect } from "react";
export default function DashBoard({username}){
        // const navigate = useNavigate();
        // const [user, setUser] = useState(null);
      
        // Check if user is logged in
//         useEffect(() => {
//           // const storedUser = localStorage.getItem("user");
//           const userData = localStorage.getItem("user");

// let user = null;
// if (userData) {
//   try {
//     user = JSON.parse(userData);
//   } catch (e) {
//     console.error("Failed to parse user data:", e);
//   }
// }

//           console.log(user);
//           if (!user) {
//             navigate("/login"); // Redirect to login if not authenticated
            
//           // window.location.href = "http://localhost:5173";
//           } else {
//             setUser(JSON.parse(storedUser));
//           }
//         }, [navigate]);
      
//         if (!user) return null; // Prevents rendering if no user
      
        return(
                
        <div className="dashboard-container">
                <GeneralContextProvider>
                <Watchlist />
                <div className="content">
                <Routes>
                        <Route exact path="/" element={<Summary username={username}/>} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/holdings" element={<Holdings />} />
                        <Route path="/position" element={<Position />}/>
                        <Route path="/funds" element={<Funds />}/>
                        <Route path="/apps" element={<Apps />}/>
                </Routes>

                </div>
                </GeneralContextProvider>
               </div>

        )

}