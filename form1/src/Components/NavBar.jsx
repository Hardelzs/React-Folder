import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Link to={"/"}>
            <h1>Home</h1>
        </Link>
        <Link to={"/favourite"}>
            <h1>Favourite</h1>
            </Link>
    </div>
  )
}

export default NavBar