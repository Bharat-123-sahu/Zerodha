import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";
import { watchlist } from "../data/data";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // ✅ When UID changes → update stock price
  useEffect(() => {
    if (!uid) return;

    const foundStock = watchlist.find(
      (stock) =>
        stock.name?.toLowerCase() === uid.toLowerCase() ||
        stock.symbol?.toLowerCase() === uid.toLowerCase()
    );

    if (foundStock) {
      const price = Number(foundStock.price);
      setStockPrice(price);
      setTotalPrice(price * stockQuantity);
    } else {
      setStockPrice(0);
      setTotalPrice(0);
    }
  }, [uid]); // 👈 runs every time stock UID changes

  // ✅ Whenever quantity or price changes → recalc total
  useEffect(() => {
    setTotalPrice(stockQuantity * stockPrice);
  }, [stockQuantity, stockPrice]);

  // ✅ Handle Buy click
  const handleBuyClick = async () => {
    if (!uid) return alert("⚠️ No stock selected!");
    if (stockQuantity <= 0) return alert("⚠️ Quantity must be at least 1!");

    try {
      await axios.post("http://localhost:1245/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice*stockQuantity,
        mode: "BUY",
      });

      alert(`✅ Successfully purchased ${stockQuantity} shares of ${uid}!`);
      closeBuyWindow();
    } catch (error) {
      console.error("Error while placing order:", error);
      alert("❌ Failed to place buy order. Check backend or API.");
    }
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          {/* Quantity Input */}
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
            />
          </fieldset>

          {/* Price Field (auto-updated, read-only) */}
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              value={stockPrice*stockQuantity}
              readOnly
              style={{ backgroundColor: "#f3f3f3" }}
            />
          </fieldset>
        </div>
      </div>

      {/* Total Display + Buttons */}
      <div className="buttons">
        <span>
          💰 Total: ₹{totalPrice.toFixed(2)} ({stockQuantity} * ₹{stockPrice})
        </span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link className="btn btn-grey" onClick={closeBuyWindow}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
