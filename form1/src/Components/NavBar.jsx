import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-black text-white">
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
