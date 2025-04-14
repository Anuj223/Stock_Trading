import { useState, useEffect, createContext } from "react";

import BuyActionWindow from "./BuyActionWindow";

import SellActionWindow from "./SellActionWindow";

import axios from "axios";

const GeneralContext = createContext({
  openBuyWindow: (uid, price) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid, price) => {},
  closeSellWindow: () => {},
  // buyStock: (uid, qty) => {},
  // sellStock: (uid, qty) => {},
  holdings: {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [stockprice, setStockPrice] = useState();
  const [selectedStockUid, setSelectedStockUid] = useState("");
  const [holdings, setHoldings] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3002/allHolding")
      .then((res) => {
        const holdingsData = {};
        res.data.forEach((stock) => {
          holdingsData[stock.name] ={
                qty: stock.qty,
          avg: stock.avg,
          price: stock.price,
          net: stock.net || 0,
          day: stock.day || 0,
          } 
        });
        setHoldings(holdingsData);
        // console.log("holdings data",holdingsData);

      })
      .catch((err) => {
        console.error("Error fetching details", err);
      });
  }, []);

  const handleOpenWindow = (uid, price) => {
    console.log("Opening Buy Window for:", uid);
    setIsBuyWindowOpen(true);
    setSelectedStockUid(uid);
    setStockPrice(price);
    setIsSellWindowOpen(false);
  };

  const handleCloseWindow = (uid, price) => {
    setIsBuyWindowOpen(false);
    setSelectedStockUid("");
    setStockPrice();
    setIsSellWindowOpen(false);
  };
  const handleSellOpenWindow = (uid, price) => {
    console.log("Opening sell Window for:", uid);
    setIsSellWindowOpen(true);
    setSelectedStockUid(uid);
    setStockPrice(price);
    setIsBuyWindowOpen(false);
  };

  const handleSellCloseWindow = (uid, price) => {
    setIsSellWindowOpen(false);
    setSelectedStockUid("");
    setStockPrice();
    setIsBuyWindowOpen(false);
  };

  // const buyStock = (uid, qty) => {
  //   setHoldings((prevHolding) => ({
  //     ...prevHolding,
  //     [uid] :{
  //     qty: (prevHolding[uid].qty || 0) + qty,

  //     }
  //   }));
  // };

  // const sellStock = (uid, qty) => {
  //   if (!holdings[uid] || holdings[uid].qty < qty) {
  //     alert("Insufficient Holdings!");
  //     return false;
  //   }

  //   setHolding((prevHolding) => ({
  //     ...prevHolding,
  //     [uid] :{

  //       qty: prevHolding[uid].qty - qty,
  //     }
  //   }));
  //   return true;
  // };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenWindow,
        closeBuyWindow: handleCloseWindow,
        openSellWindow: handleSellOpenWindow,
        closeSellWindow: handleSellCloseWindow,
        // buyStock,
        // sellStock,
        holdings,
      }}
    >
      {props.children}
      {isBuyWindowOpen && (
        <BuyActionWindow uid={selectedStockUid} price={stockprice} />
      )}
      {isSellWindowOpen && (
        <SellActionWindow uid={selectedStockUid} price={stockprice} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
