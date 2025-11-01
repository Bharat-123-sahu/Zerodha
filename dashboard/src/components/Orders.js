import React from "react";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// import { Style } from "@mui/icons-material";

const Orders = () => {
  const [orderdata, setOrderdata] = useState([]);
  useEffect(() => {
    const fetching = async () => {
      const res = await axios.get("http://localhost:1245/allorder");
      setOrderdata(res.data);
    };
    fetching();
  }, [orderdata]);
  
  return (
    <div className="orders">
      {/* <div className="no-orders">
        <p>You haven't placed any orders today</p> */}
      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Quentity</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
          {!orderdata
            ? "NO Orders available "
            : orderdata.map((item, index) => {
                {
                  if (item.mode == "SELL") {
                    return (
                      <tr key={index}className="sell">
                        <td>{item.name}</td>
                        <td>{item.qty}</td>
                        <td>{item.price}</td>

                        <td>{item.mode}</td>
                      </tr>
                    );
                  } else if (item.mode == "BUY") {
                    return (
                      <tr key={index} className="buy">
                        <td>{item.name}</td>
                        <td>{item.qty}</td>
                        <td>{item.price}</td>

                        <td>{item.mode}</td>
                      </tr>
                    );
                  }
                }
                //  return(

                //   <tr  key={index }  >

                //   <td>{item.name}</td>
                //   <td>{item.qty}</td>
                //   <td>{item.price}</td>

                //   <td>{item.mode}</td>

                //   </tr>
              })}
        </table>
      </div>
      {/* </> */}
    </div>
  );
};

export default Orders;
