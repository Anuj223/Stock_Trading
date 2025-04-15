import "./Watchlist.css";

import { useState,useEffect,useContext } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";

import {MoreHoriz,BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

// import { watchlist } from "./data/data";

import DoughnutGraph from "./DoughnutGraph";


const WatchListitem = ({ stock,onDelete }) => {
  const [showWatchlistAction, setShowWatchlistAction] = useState(false);

    const handleMouseEnter = (e) => {
      setShowWatchlistAction(true);
    };

    const handleMouseLeave = (e) => {
      setShowWatchlistAction(false);
    };

    return (
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="item">
          <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
          <div className="itemInfo">
            <span className="percent">{stock.percent}</span>
            {stock.isDown ? (
              <KeyboardArrowDown className="down" />
            ) : (
              <KeyboardArrowUp className="up" />
            )}
            <span className="price">${stock.price}</span>
          </div>
          <button className="delete-button" 
          onClick={()=>{onDelete(stock.name)}}
>✖</button>
        </div>
  {showWatchlistAction && <WatchListActions uid={stock.name} price={stock.price} />}
      </li>
    );
  };
  const WatchListActions = ({ uid,price }) => {    
    const generalContext = useContext(GeneralContext);

    const handleBuyClick = () => {
      generalContext.openBuyWindow(uid,price);
    };

    const handleSellClick = () =>{
      generalContext.openSellWindow(uid,price);
    }
    return (
      <span className="actions">
        <span>
          <Tooltip
            title="Buy (B)"
            placement="top"
            arrow
            TransitionComponent={Grow}
            onClick={handleBuyClick}
          >
            <button className="buy">Buy</button>
          </Tooltip>
          
          <Tooltip
            title="Sell (S)"
            placement="top"
            arrow
            TransitionComponent={Grow}
            onClick={handleSellClick}
          >
            <button className="sell">Sell</button>
          </Tooltip>
          <Tooltip
            title="Analytics (A)"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button className="action">
              <BarChartOutlined className="icon" />
            </button>
          </Tooltip>
          <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
            <button className="action">
              <MoreHoriz className="icon" />
            </button>
          </Tooltip>
        </span>
      </span>
    );
  };
const DEFAULT_SYMBOLS = [
  "AAPL", 
  "GOOGL", "MSFT", "TSLA", "AMZN",
  
  // "META"  
  // "NFLX", "NVDA", "INTC", "AMD"

]; 

export default function Watchlist() {
  // const [watchlist, setWatchList] = useState([]);

  
const [watchlist, setWatchList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const fetchStock = async (symbol) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    try {
      const res = await axios.get(
        `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${apiKey}`
      );

      console.log(res.data);
      const data = res.data;

      if (data.code || !data.close) {
        throw new Error(data.message || "Invalid symbol");
      }

      const current = parseFloat(data.close);
      const previousClose = parseFloat(data.previous_close);

      return {
        name: symbol,
        price: current,
        percent: (((current - previousClose) / previousClose) * 100).toFixed(2) + "%",
        isDown: current < previousClose,
        symbol,
      };
    } catch (error) {
      console.error(`Error fetching data for ${symbol}:`, error.message);
      return null;
    }
  };

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));


  const fetchAllStocks = async () => {
    try {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const symbols = watchlist.map(stock => stock.symbol || stock.name).join(',');
  
      const response = await fetch(
        `https://api.twelvedata.com/quote?symbol=${symbols}&apikey=${API_KEY}`
      );
      const data = await response.json();
  
      const formattedData = watchlist.map((stock) => {
        const quote = data[stock.symbol || stock.name];
  
        if (!quote || quote.code || !quote.price) return null;
  
        const current = parseFloat(quote.price);
        const previousClose = parseFloat(quote.previous_close);
  
        return {
          ...stock,
          name: stock.symbol || stock.name,
          price: current,
          percent: (((current - previousClose) / previousClose) * 100).toFixed(2) + "%",
          isDown: current < previousClose,
          symbol: stock.symbol || stock.name,
        };
      }).filter(Boolean); // Remove nulls
  
      setWatchList(formattedData);
    } catch (error) {
      console.error("Error fetching batch stock data:", error);
    }
  };
  
  useEffect(() => {
    const initDefaultWatchlist = async () => {
      const fetched = await Promise.all(
        DEFAULT_SYMBOLS.map((symbol) => fetchStock(symbol))
      );
      const cleaned = fetched.filter(Boolean); // Remove any nulls
      setWatchList(cleaned);
    };
  
    initDefaultWatchlist();
    const interval = setInterval(fetchAllStocks, 100000); // update every 15 seconds
    return () => 
      clearInterval(interval);
    
    
  }, []);

  const handleSearch = async (e) => {
    if (e.key === "Enter" && searchInput) {
      const symbol = searchInput.toUpperCase();
      if (watchlist.find((stock) => stock.symbol === symbol)) return;

      const newStock = await fetchStock(symbol);
      if (newStock) {
        setWatchList((prev) => [...prev, newStock]);
        setSearchInput("");
      } else {
        alert("Invalid symbol or not found.");
      }
    }
  };

  const handleDelete = (symbolToDelete) => {
    console.log(symbolToDelete)
    setWatchList((prevList) =>
      prevList.filter((stock) => (stock.symbol || stock.name) !== symbolToDelete)
    );
  };
  const labels = watchlist.map((subArray)=>subArray["name"]);
  const data = {
    labels,
     datasets: [
      {
        label: 'Price',
        data:watchlist.map((stock)=>stock.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  return (
    <div className="Watch">
      <div className="search-block">
        {/* <p className="text">
                Search eg:infty,bse,nidty fut,gold mcx
                </p> */}

        <input
          type="text"
          name="search"
          id="search"
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          onKeyDown={handleSearch}
          placeholder="Search e.g., AAPL, BSE, NIFTY, GOLD"
          className="text"
        />
        <span className="counts">
          {watchlist.length}
          /50
        </span>
      </div>
      <ul className="list">
        {watchlist.map((stock, indx) => {
          return <WatchListitem stock={stock} key={indx} 
          onDelete={()=>handleDelete(stock.symbol || stock.name)}
           />;
        })}
      </ul>
      <DoughnutGraph data={data}/>
    </div>
    
  );
}
