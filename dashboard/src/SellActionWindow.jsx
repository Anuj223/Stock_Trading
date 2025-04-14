import { useState,useEffect,useContext } from "react";

import "./SellActionWindow.css"

import axios from "axios";

import { Link } from "react-router-dom";

import GeneralContext from "./GeneralContext";

export default function SellActionWindow({uid,price}){
        const { holdings, sellStock, closeSellWindow } = useContext(GeneralContext);
        const [stockQuantity, setStockQuantity] = useState(1);
        const [stockPrice, setStockPrice] = useState(price);

        const availableQty = holdings[uid] || 0;
        useEffect(() => {
                setStockPrice(price);
              }, [price]);

        const handleSellClick = ()=>{
                axios.post("http://localhost:3002/sellOrders",{
                name: uid,
                qty: stockQuantity,
                price: stockPrice,
                mode: "SELL"
                }).then(()=>{
                        if (stockQuantity > availableQty) {
                                alert("Insufficient Holdings! You only have " + availableQty + " shares.");
                                return;
                              }
                        //       const success = sellStock(uid, stockQuantity);
                        //       if (success) {
                        //         alert(`Sold ${stockQuantity} shares at ₹${price} each`);
                        //         // closeSellWindow();
                        //       }
                }).catch(err)(()=>{
                        console.log("error",err);
                })
                GeneralContext.closeSellWindow();
        }

        const handleCancelClick = () =>{
                GeneralContext.closeSellWindow();
        }
        return(
        <div className="containe" id="buy-window" draggable="true">
                <div className="regular-orders">
                        <div className="headS border-bottom">
                                <h2>{uid}</h2>
                        </div>
                        <div className="inputsS">
                                <fieldset>
                                        <legend>Qty.</legend>
                                        <input type="number" name="qty" id="qty" onChange={(e)=>setStockQuantity(e.target.value)} value={stockQuantity}
                                        min="1" max={availableQty}/>
                                </fieldset>
                                <fieldset>
                                        <legend>Price</legend>
                                        <input type="number" name="price" id="price" step="0.05" onChange={(e)=>setStockPrice(parseFloat(e.target.value) || price)} value={stockPrice} />
                                </fieldset>
                        </div>
                </div>
                <div className="buttons">
                        <span>Margin required ₹0.0</span>
                </div>
                <Link className="btn btn-blue" onClick={handleSellClick}>Sell</Link>
                <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
                Cancel
                </Link>
        </div>)
}