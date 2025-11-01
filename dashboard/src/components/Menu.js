import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menuselected, setMenuSelected] = useState(0);
  const [profileselected,setProfileSelected]=useState(false)

  const handleMenuClick = (index) => {
    setMenuSelected(index);
  };

  const handleprofileclick=(index)=>{
 setProfileSelected(!profileselected)
  }
  const menuclass = "menu";
  const activeMenuclass = "menu selected";

  return (
    <div className="menu-container">
      <img
        src="logoo.png"
        alt="logo"
        style={{ width: "50px", transform: "rotate(150deg)" }}
      />

      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(0)}
            >
              <p className={menuselected === 0 ? activeMenuclass : menuclass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/orders"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(1)}
            >
              <p className={menuselected === 1 ? activeMenuclass : menuclass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/holdings"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(2)}
            >
              <p className={menuselected === 2 ? activeMenuclass : menuclass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/positions"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(3)}
            >
              <p className={menuselected === 3 ? activeMenuclass : menuclass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/funds"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(4)}
            >
              <p className={menuselected === 4 ? activeMenuclass : menuclass}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/apps"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(5)}
            >
              <p className={menuselected === 5 ? activeMenuclass : menuclass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        <div className="profile" onClick={handleprofileclick}>
          
          <div className="avatar">ZU</div>
        
       
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
