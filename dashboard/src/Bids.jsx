import { Link } from "react-router-dom"
import "./Bids.css"

export default function Bids(){
        return(
                
       
                <div className="bids">
                <div className="no-bids">
                  <p>No bids are Available !</p>
          
                  <Link to={"/"} className="btn">
                    Place Bids
                  </Link>
                </div>
              </div>
        )
        
}