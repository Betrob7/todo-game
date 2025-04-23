import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="header__nav">
      <Link to="/">Startsida</Link>
      <Link to="/todopage">Uppdrag</Link>
      <Link to="/shop">Shop</Link>
    </nav>
  );
}

export default Nav;
