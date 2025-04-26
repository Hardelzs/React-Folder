import React from "react";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="main">
      <div className="movie">
        <Link to={"/"}>HdrMovie</Link>
      </div>

      <div className="otherMov">
        <Link to={"/"}>
          <h1>Home</h1>
        </Link>
        <Link to={"/favourite"}>
          <h1>Favourite</h1>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
