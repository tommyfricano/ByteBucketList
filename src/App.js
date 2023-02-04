import './App.css';
import Navbar from './components/navbar/Navbar.js';
import React from 'react';
import RegistrationForm from './components/registration/RegistrationForm';
import AddFriend from './components/addFriend/AddFriend';
import Account from './components/account/Account';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';


function App() {
      return (
      <>
      <Navbar/>
      <div className='container'> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/addfriend" element={<AddFriend/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/signin" element={<RegistrationForm/>} />
        </Routes>
      </div>
      </>
      );
}

export default App;
