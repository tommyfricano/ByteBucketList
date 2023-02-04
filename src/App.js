import './App.css';
import Navbar from './components/navbar/Navbar.js';
import React, {useState} from 'react';
import AddFriend from './components/addFriend/AddFriend';
import Account from './components/account/Account';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import LeaderboardList from './components/home/leaderboard/LeaderBoardList';


function App() {
      return (
      <>
      <Navbar/>
      <div className='container'> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/addfriend" element={<AddFriend/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/signin" element={<Login/>} />
        </Routes>
      </div>
      </>
      );
}

export default App;
