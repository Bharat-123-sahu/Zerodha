import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BuyActionWindow.css"; // same styling

import GeneralContext from "./GeneralContext";
import { watchlist } from "../data/data"; // ✅ to auto fetch current stock price

const SellActionWindow = ({ uid }) => {
  const { closeSellWindow } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [ownedQty, setOwnedQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [canSell, setCanSell] = useState(false);

  // ✅ Fetch user's owned quantity for the selected stock
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:1245/allorder");
        const orders = Array.isArray(res.data) ? res.data : res.data.data || [];

        const relatedOrders = orders.filter((order) => order.name === uid);

        let totalBuy = 0;
        let totalSell = 0;
        relatedOrders.forEach((order) => {
          if (order.mode === "BUY") totalBuy += Number(order.qty);
          if (order.mode === "SELL") totalSell += Number(order.qty);
        });

        const netQty = totalBuy - totalSell;
        setOwnedQty(netQty);
        setCanSell(netQty > 0);
      } catch (err) {
        console.error("❌ Error fetching orders:", err);
      }
    };

    fetchOrders();
  }, [uid]);

  // ✅ Auto-set the current stock price when UID changes
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
  }, [uid]);

  // ✅ Recalculate total whenever qty changes
  useEffect(() => {
    setTotalPrice(stockPrice * stockQuantity);
  }, [stockQuantity, stockPrice]);

  // ✅ Handle SELL action
  const handleSellClick = async () => {
    if (!canSell) return alert("⚠️ You cannot sell this stock — you don’t own it!");
    if (stockQuantity > ownedQty)
      return alert(`⚠️ You only own ${ownedQty} shares. Reduce the quantity.`);

    try {
      await axios.post("http://localhost:1245/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice * stockQuantity, // ✅ sending total
        mode: "SELL",
      });

      alert(`✅ Successfully sold ${stockQuantity} shares of ${uid}!`);
      closeSellWindow();
    } catch (err) {
      console.error("❌ Error placing sell order:", err);
      alert("❌ Failed to place sell order. Please try again.");
    }
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          {/* Quantity */}
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              min="1"
              max={ownedQty}
              value={stockQuantity}
              disabled={!canSell}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
            />
          </fieldset>

          {/* Price (auto from watchlist, read-only) */}
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

      {/* Total and Action Buttons */}
      <div className="buttons">
        <span>
          {canSell ? (
            <>
              💰 Total: ₹{totalPrice.toFixed(2)} ({stockQuantity} × ₹{stockPrice})
              <br />
              ✅ You currently own {ownedQty} shares of {uid}.
            </>
          ) : (
            <>⚠️ You don’t own any shares of {uid}.</>
          )}
        </span>

        <div>
          <Link
            className={`btn ${canSell ? "btn-blue" : "btn-grey"}`}
            onClick={canSell ? handleSellClick : undefined}
          >
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={closeSellWindow}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
