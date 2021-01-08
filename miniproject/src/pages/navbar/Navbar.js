import React from "react";
import "./navbar.css";

/*
 * navbar which has menu items in it.
 */
const navItems = [
  {
    url: "/home",
    title: "HOME",
  },
  {
    url: "/home",
    title: "FEATURES",
  },
  {
    url: "/home",
    title: "BLOG STYLES",
  },
  {
    url: "/home",
    title: "MEGA MENU ",
  },
  {
    url: "/home",
    title: "SHOP",
  },
];
function Navbar() {
  return (
    <header className="navbar">
      <div className="title">
        <div className="title-1">GILLION FOODIE</div>
        <div className="title-2">COOKING BLOG</div>
      </div>
      <div className="menu">
        {navItems.map((item, index) => (
          <div className="menu-item" key={index}>
            {item.title}
          </div>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
