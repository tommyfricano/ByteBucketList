import React, { Fragment, useState} from "react"
import logo from "./guy.jpg";
import Data from "./data.json";
import "./Account.css";

const Account = () => {
    return(
        <div className = "Account">
            <div className="posts">
                { Data.map(post => { 
                    return(
                        <center>
                        <div>
                        <div className="data-box">
                        <div className="data-box-header">Account Information:</div>
                        <div className="data-box-item">
                        <div className="data-box-item-label">Username:</div>
                        <div className="data-box-item-value">{post.username}</div>
                        </div>
                        <div className="data-box-item">
                        <div className="data-box-item-label">Current Password:</div>
                        <div className="data-box-item-value">{post.password}</div>
                        </div>
                        <div className="data-box-item">
                        <div className="data-box-item-label">current Location:</div>
                        <div className="data-box-item-value">{post.currentLocation}</div>
                        </div>
                        <div className="data-box-item">
                        <div className="data-box-item-label">Total Points:</div>
                        <div className="data-box-item-value">{post.totalPoints}</div>
                        </div>
                        </div>
                        </div>
                        </center>
                    )
                })}
            </div>
        </div>
    );
}

export default Account;