import { useNavigate , Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "./Menu.css";
export default function Menu() {
  const navigate = useNavigate();
  const [selectMenu, setSelectMenu] = useState(0);
  const [isProfileDropDown, setIsProfileDropDown] = useState(false);
  const [user, setUser] = useState(null);
  // useEffect(() => {
  //   const userData = localStorage.getItem("user");
  
  //   if (userData) {
  //     try {
  //       const parsedUser = JSON.parse(userData);
  //       setUser(parsedUser);
  //     } catch (e) {
  //       console.error("Failed to parse user data:", e);
  //       localStorage.removeItem("user"); // clear corrupted data
  //       navigate("/login");
  //     }
  //   } else {
  //     navigate("/login");
  //   }
  // }, [navigate]);
  // const navigate = useNavigate();
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
      // setUser(user);
      console.log(user);
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const handleLogout = () => {
    removeCookie("token");
    navigate("/signup");
  };
  const handleMenuClick = (idx) => {
    setSelectMenu(idx);
  };
  const handleProfileClick = () => {
    setIsProfileDropDown(!isProfileDropDown);
  };
  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   navigate("/login"); // Redirect to login page
  // };
  const menuClass = "nor";
  const activeMenuClass = "selected";
  return (
    <div className="menu">
      <div className="logo">
        <i class="fa-solid fa-feather"></i>
      </div>
      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(0)}
            >
              {" "}
              <p 
              
              className={selectMenu === 0 ? activeMenuClass : menuClass}
              
              >
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(1)}
            >
              {" "}
              <p 
              
              className={selectMenu === 1 ? activeMenuClass : menuClass}
              
              >Orders</p>
            </Link>
          </li>
          <li>
            <Link
              to="/holdings"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(2)}
            >
              <p 
              
              className={selectMenu === 2 ? activeMenuClass : menuClass}
              
              >Holdings</p>
            </Link>
          </li>
          <li>
            <Link
              to="/position"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(3)}
            >
              <p 
              
              className={selectMenu === 3 ? activeMenuClass : menuClass}
              
              >Positions</p>
            </Link>
          </li>
          <li>
            <Link
              to="/funds"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(4)}
            >
              <p 
              
              className={selectMenu === 4 ? activeMenuClass : menuClass}
              
              >Funds</p>
            </Link>
          </li>
          <li>
            <Link
              to="/bids"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(5)}
            >
              <p 
              
              className={selectMenu === 5 ? activeMenuClass : menuClass}
              
              >Bids</p>
            </Link>
          </li>
        </ul>
        <hr />
        {/* {username && (
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">{username.charAt(0).toUpperCase()}</div>
            <p className="username">{username}</p>
            {isProfileDropDown && (
              <div className="dropdown">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        )} */}
        <div className="profile" onClick={handleProfileClick}>
  {/* <div className="avatar">{username.charAt(0).toUpperCase()}</div> */}
  <div className="avatar">{username?.charAt(0)?.toUpperCase() || "U"}</div>

  {/* <p className="username">{username}</p> */}

  <div
    className="dropdown-content"
    style={{ display: isProfileDropDown ? "block" : "none" }}
  >
  <p className="username">{username}</p>
    <a onClick={handleLogout}>Logout</a>
  </div>
</div>

      </div>
    </div>
  );
}
