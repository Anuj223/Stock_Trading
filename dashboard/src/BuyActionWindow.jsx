import { useState,useEffect } from "react";

import "./BuyActionWindow.css"

import axios from "axios";

import { Link } from "react-router-dom";

import GeneralContext from "./GeneralContext";

export default function BuyActionWindow({uid,price}){

        

        const [stockQuantity, setStockQuantity] = useState(1);
        const [stockPrice, setStockPrice] = useState(price);

        useEffect(() => {
                setStockPrice(price);
              }, [price]);

        const handleBuyClick = ()=>{
                axios.post("http://localhost:3002/newOrders",{
                name: uid,
                qty: stockQuantity,
                price: stockPrice,
                mode: "BUY"
                }).then(()=>{
                        // const success = buyStock(uid, stockQuantity)
                        if (success) {
                          alert(`buy ${stockQuantity} shares at ₹${price} each`);
                          // closeSellWindow();
                        }
                }).catch(err)(()=>{
                        console.log("error",err);
                })
                GeneralContext.closeBuyWindow();
        }

        const handleCancelClick = () =>{
                GeneralContext.closeBuyWindow();
        }
        return(
        <div className="container1" id="buy-window" draggable="true">
                <div className="regular-orders">
                        <div className="head border-bottom">
                                <h2>{uid}</h2>
                        </div>
                        <div className="inputs">
                                <fieldset>
                                        <legend>Qty.</legend>
                                        <input type="number" name="qty" id="qty" onChange={(e)=>setStockQuantity(e.target.value)} value={stockQuantity}/>
                                </fieldset>
                                <fieldset>
                                        <legend>Price</legend>
                                        <input type="number" name="price" id="price" step="0.05" onChange={(e)=>setStockPrice(parseFloat(e.target.value) || price)} value={stockPrice} />
                                </fieldset>
                        </div>
                </div>
                <div className="buttons">
                        <span>Margin required ₹{parseFloat(stockQuantity * stockPrice + (stockQuantity * stockPrice )*0.03).toFixed(2)}</span>
                </div>
                <Link className="btn btn-blue" onClick={handleBuyClick}>Buy</Link>
                <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
                Cancel
                </Link>
        </div>)
}