import { Link } from "react-router-dom"
import "./Orders.css"
export default function Orders(){
        return(
                
                <div className="orders">
                <div className="no-orders">
                  <p>You haven't placed any orders today</p>
          
                  <Link to={"/"} className="btn">
                    Get started
                  </Link>
                </div>
              </div>
        )
        
}