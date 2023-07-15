import React, { useState } from 'react';
import {
  FaChargingStation,
  FaBars,
  FaWallet,
} from "react-icons/fa";
import {
  AiOutlineHome,AiOutlineShop,
} from "react-icons/ai";
import {
  FiSettings,FiLogOut
} from "react-icons/fi";
import {  Outlet,NavLink } from 'react-router-dom';

import logo from "../images/GROVERSE LOGO 02(1) 1.png"

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <AiOutlineHome />
    },
    {
      path: "/Charge",
      name: "Charge",
      icon: <FaChargingStation />
    },
    {
      path: "/Wallet",
      name: "Wallet",
      icon: <FaWallet />
    },
    {
      path: "/Market",
      name: "Market",
      icon: <AiOutlineShop />
    },
    {
      path: "/Settings",
      name: "Settings",
      icon: <FiSettings />
    },
    {
      path: "/LoginRegister",
      name: "Log out",
      icon: <FiLogOut />
    }
    
  ];
  
  return (
    <div className="" style={{ display: "flex" }}>
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <img style={{ display: isOpen ? "block" : "none" }} className="logo" src={logo} alt="Logo" />
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
         
        </div>
        <div style={{ width: isOpen ? "200px" : "50px" }} className='line'></div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeClassName="active">
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>   <Outlet /></main>
    </div>
  );
};

export default Sidebar;
