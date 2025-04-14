import "./Holdings.css"


import { useState,useEffect,useContext } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";
import VerticalGraph from "./VerticalGraph";

// import {holdings} from "./data/data"

export default function Holdings() {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3002/allHolding").then((res)=>{
      
      setAllHoldings(res.data);
    })
    .catch((err)=>{
      console.error("Error fetching details",err);
    });
  },[])
  let hold =allHoldings;
const labels = hold.map((subArray)=>(subArray["name"]));

const data = {
  labels,
  datasets: [
    {
      label: 'Stocks',
      data: hold.map((stock) =>stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

  let total=0,currTotal=0,totalpl=0;
  // const { holdings } = useContext(GeneralContext);
  // useEffect(()=>{
  //   console.log("Updated",holdings);
    
  // },[holdings]);

  // console.log(holdings);
  
  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>
      <div className="order-table">
        <table>
               
    <thead>

          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur.val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
    </thead>
            
               <tbody>

                {
                 allHoldings.map((stock,indx)=>{
                                // const stock = allHoldings[name];
                                const curValue=stock.price * stock.qty;
                                const isProfit = (curValue-stock.avg)*stock.qty >=0.0;
                                const profClass = isProfit ? "profit" : "loss";
                                const dayClass =stock.isLoss ? "loss" : "profit";
                                total+=stock.avg*stock.qty;
                                currTotal+=curValue;
                                
            return (
                <tr key={indx}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
              
            })
          }
          </tbody>
                
        </table>
      </div>
      <div className="row m-3 p-3">
        <div className="col">
          <h5>
            {/* 29,875.<span>55</span>{" "} */}
            {total.toFixed(2)}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {/* 31,428.<span>95</span>{" "} */}
            {currTotal.toFixed(2)}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col" >
          <h5 className= {currTotal.toFixed(2)-total.toFixed(2)>0.0 ? "profit" : "loss"}>
            {(currTotal.toFixed(2)-total.toFixed(2))}{" "}
            
              ({(currTotal/total).toFixed(2)}%)
              
            
            </h5>
          <p>P&L</p>
        </div>
        <VerticalGraph data ={data}/>
      </div>
    </>
  );
}
