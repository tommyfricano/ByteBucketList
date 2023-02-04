import React from "react";
import {  Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  return (
    <div className="nav">
        <ul>
            <li>
                <a>logo</a>
            </li>
            <li>
                <a>Byte's BucketList</a>
            </li>
            <li>
                <a href="/addfriend">Add Friend</a>
            </li>
            <li>
                <a>Username:points</a>
            </li>
            <li>
                <a href="/signout">signout</a>
            </li>
        </ul>
    </div>
    );
}

export default Navbar;