import React from "react";
import {  Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "./imgs/bytesbucklist.png";
import "./Navbar.css";

const Navbar = () => {

  return (
    <div className="nav">
        <CustomLink to="/"><img src={logo} alt="Logo"></img></CustomLink>
        <p className="title">Byte's BucketList</p>
        <ul>
            <li>
                <CustomLink to="/addfriend">Add Friend</CustomLink>
            </li>
            <li>
                <CustomLink to="/account">Account</CustomLink>
            </li>
            <li>
                <CustomLink to="/signin">Sign In</CustomLink>
            </li>
        </ul>
    </div>
    );
}

export default Navbar;

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return (
        <li className={isActive ? "active" : ""}> 
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}