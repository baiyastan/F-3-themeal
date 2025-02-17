
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";  
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); 
  return (
    <div className="header">
    <div className="header-top">
      <Link> <img src="https://www.themealdb.com/images/logo-small.png" alt="Logo" /></Link>
      <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </button>
      <div className={`header-btn ${menuOpen ? "open" : ""}`}>
        <Link><button>Home</button></Link>
        <Link><button>API</button></Link>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  </div>
  )
}

export default Header
