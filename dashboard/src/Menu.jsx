import {Link} from "react-router-dom";
import "./Menu.css"
export default function Menu() {
  return (
    <div className="menu">
      <div className="logo">
      <i class="fa-solid fa-feather"></i>
      </div>
      <div className="menus">
        <ul>
          <li>
            <Link to="/" style={{textDecoration:"none"}}>DashBoard</Link>
          </li>
          <li>
            <Link to="/Orders" style={{textDecoration:"none"}}>Orders</Link>
          </li>
          <li>
            <Link to="/Holdings" style={{textDecoration:"none"}}>Holdings</Link>
          </li>
          <li>
            <Link to="/Positions" style={{textDecoration:"none"}}>Positions</Link>
          </li>
          <li>
            <Link to="/Bids" style={{textDecoration:"none"}}>Bids</Link>
          </li>
          <li>
            <Link to="/Funds" style={{textDecoration:"none"}}>Funds</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
